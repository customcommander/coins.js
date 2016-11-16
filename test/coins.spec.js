describe('coins', function () {
    it('is a function', function () {
        expect(typeof coins).to.eql('function');
    });

    it('returns an array of objects', function () {
        var result = coins('ctx_ver=Z39.88-2004&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rfr_id=info:sid/citeulike.org:citeulike&rft_dat=article/328919&rft_id=info:doi/10%2e1088%2f0029%2d5515%2f45%2f10a%2f001&rft.date=2005-10&rft.title=Nuclear+Fusion&rft.aulast=International&rft.atitle=Status+report+on+fusion+research&rft.spage=A1&rft.volume=45&rft.issue=10A&rft.issn=0029%2d5515&rft.genre=article&genre=article');
        expect(Array.isArray(result), 'returns an array').to.be.true;
        expect(result[0], 'returns an array of object').to.be.an('object');
    });

    describe('parse html', function () {

        it('returns null if there are no COinS', function () {
            var ctxObjs = coins('<div title="nothing"></div>');
            expect(ctxObjs).to.be.null;
        });

        it('returns the context object', function () {
            var ctxObjs = coins(
                '<div id="adt_328919" class="article_details" style="margin-left: 0px;">' +
                '    <div class="vague"><i>Nuclear Fusion</i>, Vol. 45, No. 10A. (October 2005), A1, <a href="http://dx.doi.org/10.1088/0029-5515/45/10a/001">doi:10.1088/0029-5515/45/10a/001</a></div>' +
                '    <div class="vague">by <a class="author" href="/author/International"> International</a></div>' +
                '    <div class="item-icons">' +
                '        <a id="copy_this_328919" class="articleitem-button articleitem-button-copy tipsy-hint-s" data-poster="" data-article_id="328919" data-tags="" title="Copy to another library" onclick="fnListItems.itemCopyThis(event,this); return false;">Copy</a>' +
                '        <a class="articleitem-button articleitem-button-myattachments tipsy-hint-s" data-article_id="328919" title="I have attachments on my copy of this article" id="mypdf_328919">My Attachments</a>' +
                '        <a id="mycopy_328919" class="articleitem-button articleitem-button-mycopy tipsy-hint-s" title="View my copy of this article">My Copy</a>' +
                '    </div>' +
                '    <div class="item-abstract"></div>' +
                '    <span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info:ofi/fmt:kev:mtx:journal&amp;rfr_id=info:sid/citeulike.org:citeulike&amp;rft_dat=article/328919&amp;rft_id=info:doi/10%2e1088%2f0029%2d5515%2f45%2f10a%2f001&amp;rft.date=2005-10&amp;rft.title=Nuclear+Fusion&amp;rft.aulast=International&amp;rft.atitle=Status+report+on+fusion+research&amp;rft.spage=A1&amp;rft.volume=45&amp;rft.issue=10A&amp;rft.issn=0029%2d5515&amp;rft.genre=article&amp;genre=article"></span>' +
                '</div>'
            );

            expect(ctxObjs[0].raw).to.eql({
                'ctx_ver': 'Z39.88-2004',
                'rft_val_fmt': 'info:ofi/fmt:kev:mtx:journal',
                'rfr_id': 'info:sid/citeulike.org:citeulike',
                'rft_dat': 'article/328919',
                'rft_id': 'info:doi/10%2e1088%2f0029%2d5515%2f45%2f10a%2f001',
                'rft.date': '2005-10',
                'rft.title': 'Nuclear+Fusion',
                'rft.aulast': 'International',
                'rft.atitle': 'Status+report+on+fusion+research',
                'rft.spage': 'A1',
                'rft.volume': '45',
                'rft.issue': '10A',
                'rft.issn': '0029%2d5515',
                'rft.genre': 'article',
                'genre': 'article'
            });
        });
    });

    describe('context object', function () {
        it('includes a `raw` object property that is a key/value pairs representation of the query string', function () {
            var result = coins('ctx_ver=Z39.88-2004&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rfr_id=info:sid/citeulike.org:citeulike&rft_dat=article/328919&rft_id=info:doi/10%2e1088%2f0029%2d5515%2f45%2f10a%2f001&rft.date=2005-10&rft.title=Nuclear+Fusion&rft.aulast=International&rft.atitle=Status+report+on+fusion+research&rft.spage=A1&rft.volume=45&rft.issue=10A&rft.issn=0029%2d5515&rft.genre=article&genre=article');

            expect(result[0].raw).to.eql({
                'ctx_ver': 'Z39.88-2004',
                'rft_val_fmt': 'info:ofi/fmt:kev:mtx:journal',
                'rfr_id': 'info:sid/citeulike.org:citeulike',
                'rft_dat': 'article/328919',
                'rft_id': 'info:doi/10%2e1088%2f0029%2d5515%2f45%2f10a%2f001',
                'rft.date': '2005-10',
                'rft.title': 'Nuclear+Fusion',
                'rft.aulast': 'International',
                'rft.atitle': 'Status+report+on+fusion+research',
                'rft.spage': 'A1',
                'rft.volume': '45',
                'rft.issue': '10A',
                'rft.issn': '0029%2d5515',
                'rft.genre': 'article',
                'genre': 'article'
            });
        });
    });
});
