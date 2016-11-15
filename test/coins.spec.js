describe('coins', function () {
    it('is a function', function () {
        expect(typeof coins).to.eql('function');
    });

    it('returns an array of objects', function () {
        var result = coins('ctx_ver=Z39.88-2004&rft_val_fmt=info:ofi/fmt:kev:mtx:journal&rfr_id=info:sid/citeulike.org:citeulike&rft_dat=article/328919&rft_id=info:doi/10%2e1088%2f0029%2d5515%2f45%2f10a%2f001&rft.date=2005-10&rft.title=Nuclear+Fusion&rft.aulast=International&rft.atitle=Status+report+on+fusion+research&rft.spage=A1&rft.volume=45&rft.issue=10A&rft.issn=0029%2d5515&rft.genre=article&genre=article');
        expect(Array.isArray(result), 'returns an array').to.be.true;
        expect(result[0], 'returns an array of object').to.be.an('object');
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
