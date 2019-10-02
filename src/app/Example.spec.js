import {expect} from 'chai';
import {doSomething} from './Example';

describe('Function coverage tests example.', () => {

    it('Should be able to open the window', () => {
        expect(doSomething(null, 1)).to.equal('You can open the window')
        expect(doSomething(99, 1)).to.equal('You can open the window')
    });
    
    it('Should not be able to open the window', () => {
        expect(doSomething(null)).to.equal('You cannot open the window')
        expect(doSomething(null, null)).to.equal('You cannot open the window')
        expect(doSomething(null, 0)).to.equal('You cannot open the window')
        expect(doSomething(0, null)).to.equal('You cannot open the window')
        expect(doSomething(0)).to.equal('You cannot open the window')
        expect(doSomething(99, 0)).to.equal('You cannot open the window')
    });
    
    it('Should be allowed to open the doors', () => {
        expect(doSomething(100)).to.equal('You are allowed to open the doors')
        expect(doSomething(499)).to.equal('You are allowed to open the doors')
    });
    
    it('Should be allowed to turn on the light', () => {
        expect(doSomething(undefined)).to.equal('You are allowed to turn on the light')
        expect(doSomething(500)).to.equal('You are allowed to turn on the light')
    });
});

