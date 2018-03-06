import { HashHistory } from './index';

describe('custom-history:', () => {

    let history: HashHistory;
    let window: any;

    beforeEach(() => {
        window = {
            addEventListener: jasmine.createSpy('addEventListener'),
            removeEventListener: jasmine.createSpy('removeEventListener'),
            location: { hash: '' },
            history: jasmine.createSpyObj('history', ['pushState', 'replaceState'])
        };
        history = new HashHistory(window);
    });

    it('listen', () => {
        const removeListen = history.listen(() => null);
        expect(removeListen).toEqual(jasmine.any(Function));
        expect(window.addEventListener).toHaveBeenCalledWith('hashchange', jasmine.any(Function), false);
        removeListen();
        expect(window.removeEventListener).toHaveBeenCalledWith('hashchange', jasmine.any(Function));
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
