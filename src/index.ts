import { CustomHistory, Location } from 'preact-router';

export class HashHistory implements CustomHistory {

    constructor(private window: Window) { }

    listen(callback: (location: Location) => void) {
        const hashchangeListener = () => {
            callback(this.location);
        };
        this.window.addEventListener('hashchange', hashchangeListener, false);
        return () => {
            this.window.removeEventListener('hashchange', hashchangeListener);
        };
    }

    get location(): Location {
        const pathname = this.window.location.hash.slice(1);
        return { pathname, search: '' };
    }

    push(url: string): void {
        this.window.history.pushState(null, null, `#${url}`);
    }

    replace(url: string): void {
        this.window.history.replaceState(null, null, `#${url}`);
    }
}

export function createHashHistory(): CustomHistory {
    return new HashHistory(window);
}
