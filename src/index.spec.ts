import { HashHistory } from './index';
import { createSpyObj } from 'jest-createspyobj';

describe('custom-history:', () => {

    let history: HashHistory;
    let window: any;

    beforeEach(() => {
        window = {
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            location: { hash: '' },
            history: createSpyObj('history', ['pushState', 'replaceState'])
        };
        history = new HashHistory(window);
    });

    it('listen', () => {
        const removeListen = history.listen(() => null);
        expect(removeListen).toEqual(expect.any(Function));
        expect(window.addEventListener).toHaveBeenCalledWith('hashchange', expect.any(Function), false);
        removeListen();
        expect(window.removeEventListener).toHaveBeenCalledWith('hashchange', expect.any(Function));
    });

    it('location', () => {
        window.location.hash = '#/foo';
        expect(history.location.pathname).toEqual('/foo');
    });

    it('push', () => {
        history.push('/zoo');
        expect(window.history.pushState).toHaveBeenCalledWith(null, null, '#/zoo');
    });

    it('replace', () => {
        history.replace('/koo');
        expect(window.history.replaceState).toHaveBeenCalledWith(null, null, '#/koo');
    });

});
