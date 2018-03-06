import { spawn, ChildProcess } from 'child_process';
import * as assert from 'assert';
import Nightmare = require('nightmare');

describe('browser', function() {

    this.timeout('8s');

    let serverProc: ChildProcess;
    let nightmare: Nightmare;

    before(done => {
        serverProc = spawn('node', ['node_modules/webpack-dev-server/bin/webpack-dev-server.js']);
        serverProc.stdout.on('data', (data) => {
            if (data.toString().indexOf('Compiled successfully.') !== -1) {
                done();
            }
        });
    });

    after(() => {
        serverProc.kill();
    });

    beforeEach(() => {
        nightmare = new Nightmare().goto('http://localhost:8080');
    });

    it('about', async () => {
        const body = await nightmare
            .click('a[href="#/about"]')
            .evaluate(() => document.body.innerHTML)
            .end();
        assert(body.includes('<p>About</p>'));
    });

    it('link home', async () => {
        const body = await nightmare
            .click('a[href="/"]')
            .evaluate(() => document.body.innerHTML)
            .end();
        assert(body.includes('<p>Home</p>'));
    });

});
