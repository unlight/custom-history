import { spawn, ChildProcess } from 'child_process';
import * as assert from 'assert';
import Nightmare = require('nightmare');

describe('browser', () => {

    let serverProc: ChildProcess;
    let nightmare: Nightmare;

    beforeAll(done => {
        jest.setTimeout(15 * 1000);
        serverProc = spawn('node', ['node_modules/webpack-dev-server/bin/webpack-dev-server.js']);
        serverProc.stdout.on('data', (data) => {
            if (data.toString().indexOf('Compiled successfully.') !== -1) {
                done();
            }
        });
    });

    afterAll(() => {
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
