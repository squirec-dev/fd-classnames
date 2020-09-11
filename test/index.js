const { expect } = require('chai');
const { arrayFromObject, arrayFromString, classNames } = require('../index');

describe('arrayFromObject', () => {
    it('Given an object, returns an array', () => {
        expect(arrayFromObject({
            'hayeswater': true,
            'kentmere-reservoir': true,
        })).to.be.an('array').to.deep.equal(['hayeswater', 'kentmere-reservoir']);
    });

    it('Given an object, returns a filtered array', () => {
        expect(arrayFromObject({
            'bassenthwaite-lake': true,
            'blea-water': false,
        })).to.be.an('array').to.deep.equal(['bassenthwaite-lake']);
    });
})

describe('arrayFromString', () => {
    it('Given a string, returns an array', () => {
        expect(arrayFromString(
            'grisedale-tarn',
        )).to.be.an('array').to.deep.equal(['grisedale-tarn']);
    });

    it('Given a string with spaces, returns an array with multiple items', () => {
        expect(arrayFromString(
            'grisedale-tarn elter-water grasmere',
        )).to.be.an('array').to.deep.equal([
            'grisedale-tarn',
            'elter-water',
            'grasmere',
        ]);
    });
})

describe('classNames; valid cases', () => {
    it('Given a string, returns a string', () => {
        expect(classNames('esk')).to.equal('esk');
    });

    it('Given an object with value true, returns a string containing key', () => {
        expect(classNames({
            'sark': true,
        })).to.equal('sark');
    });

    it('Given an object with value false, returns a string without key', () => {
        expect(classNames({
            'liddel-water': false,
        })).to.equal('');
    });

    it('Given an object with multiple values, returns a string containing keys', () => {
        expect(classNames({
            'hether-burn': true,
            'rae-burn': true,
            'carwinley-burn': true,
        })).to.equal('hether-burn rae-burn carwinley-burn');
    });

    it('Given multiple options, returns a string containing keys', () => {
        expect(classNames('cogra-moss', 'wet sleddale', {
            'coniston-water': true,
            'windermere': true,
        })).to.equal('cogra-moss wet sleddale coniston-water windermere');
    });

    it('Given duplicate options/ values, returns a string filtered', () => {
        expect(classNames('wastwater', {
            'wastwater': true,
            'ullswater': true,
            'ullswater': true,
            'loweswater': true,
        })).to.equal('wastwater ullswater loweswater');
    });
});

describe('classNames; handles errors gracefully', () => {
    it('Given a string with value null/ undefined, returns empty string', () => {
        expect(classNames(null)).to.equal('');
        expect(classNames(undefined)).to.equal('');
    });

    it('Given an object with value \'true\', returns a string containing key', () => {
        expect(classNames({
            'sark': 'true',
        })).to.equal('');
    });

    it('Given an object with value null/ undefined, returns empty string', () => {
        expect(classNames({
            'little-caldew': null,
        })).to.equal('');
        expect(classNames({
            'river-caldew': undefined,
        })).to.equal('');
    });
});
