NODE_BIN_DIR = ./node_modules/.bin

all_files = $(shell find . -name "*.js" -not -path "*/node_modules/*" -not -path "*/build/*" -not -path "*/dist/*")
lib_files = $(shell find lib -name "*.js")
test_files = $(shell find test -name "*.spec.js")

covered_files = $(addprefix build/covered/,$(lib_files))
covered_bundle = build/covered/bundle/coins.js

dist_files = $(addprefix dist/,$(lib_files))
dist_bundle = dist/bundle/coins.js

all: lint test

clean:
	rm -rfv build

lint: build/install build/lint
test: build/install build/test
dist: build/install build/lint build/test build/dist

###############################################################################
############## PRIVATE TARGETS - DO NOT RUN DIRECTLY ##########################
###############################################################################

build/install: package.json
	mkdir -p $(dir $@)
	npm install
	touch $@

build/lint: $(all_files)
	mkdir -p $(dir $@)
	$(NODE_BIN_DIR)/eslint ./
	touch $@

build/test: build/test/node build/test/browser
	$(NODE_BIN_DIR)/istanbul report --dir $@/coverage --root $@ html
	touch $@

build/test/node: $(lib_files) $(test_files)
	mkdir -p $@
	$(NODE_BIN_DIR)/istanbul cover --print none --report json --dir $@ $(NODE_BIN_DIR)/_mocha -- -R spec
	touch $@

build/test/browser: $(covered_bundle) $(test_files) karma.conf.js
	mkdir -p $@
	SOURCE_FILES=$(covered_bundle) TEST_FILES=$(test_files) COV_DIR=$@ $(NODE_BIN_DIR)/karma start
	touch $@

$(covered_bundle): $(covered_files)
	mkdir -p $(dir $@)
	$(NODE_BIN_DIR)/webpack \
		--entry=./build/covered/lib/coins.js \
		--output-library=coins \
		--output-library-target=umd \
		--output-filename=$@

$(covered_files): build/covered/%.js: %.js
	mkdir -p $(dir $@)
	$(NODE_BIN_DIR)/istanbul instrument $^ --output $@

build/dist: $(dist_files) $(dist_bundle)
	mkdir -p $(dir $@)
	touch $@

$(dist_files): dist/%.js: %.js
	mkdir -p $(dir $@)
	cp $< $@

$(dist_bundle): $(dist_files)
	mkdir -p $(dir $@)
	$(NODE_BIN_DIR)/webpack \
		--entry=./dist/lib/coins.js \
		--output-library=coins \
		--output-library-target=umd \
		--output-filename=$@

.PHONY: all clean lint test dist
