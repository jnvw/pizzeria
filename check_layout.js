// import puppeteer from 'puppeteer';

// (async () => {
//   const browser = await puppeteer.launch({ headless: 'new' });
//   const page = await browser.newPage();
//   await page.setViewport({ width: 1536, height: 864 });
//   await page.goto('http://localhost:5175/');
  
//   // Wait for the app to render
//   await page.waitForSelector('#root nav');

//   const elements = await page.evaluate(() => {
//     const toObj = (rect) => rect ? { x: rect.x, y: rect.y, width: rect.width, height: rect.height } : null;
//     const root = document.getElementById('root');
//     const nav = document.querySelector('nav');
//     const firstDiv = root.firstElementChild;
//     const body = document.body;
//     const main = document.querySelector('main');
//     const firstMainDiv = main ? main.firstElementChild : null;
    
//     return {
//       body: toObj(body.getBoundingClientRect()),
//       root: toObj(root.getBoundingClientRect()),
//       firstDiv: toObj(firstDiv.getBoundingClientRect()),
//       nav: toObj(nav ? nav.getBoundingClientRect() : null),
//       navDiv: toObj(nav ? nav.firstElementChild.getBoundingClientRect() : null),
//       main: toObj(main ? main.getBoundingClientRect() : null),
//       firstMainDiv: toObj(firstMainDiv ? firstMainDiv.getBoundingClientRect() : null)
//     };
//   });
  
//   console.log(JSON.stringify(elements, null, 2));
//   await browser.close();
// })();
