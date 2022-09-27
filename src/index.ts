import { Page } from 'puppeteer';
import { Logger } from './utils/logger';
import { initialize } from './utils/browser';
import { startCrash } from './bloxflip/crash';
import { startRain } from './bloxflip/rain';

let page: Page;

(async () => {
    Logger.log(`STARTUP`, `Starting bloxflip-autocrash`);
    Logger.log(`SUPPORT`, `Support the developers by starring the repo! https://github.com/Norikiru/bloxflip-autocrash`)

    await sleep(1000)

    page = await initialize();

    await Promise.all([startCrash(), startRain()]);
})();

function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

export { page };
