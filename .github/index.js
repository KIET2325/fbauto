const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const email = process.env.FB_EMAIL;
  const pass = process.env.FB_PASS;

  console.log('Đang đăng nhập...');
  await page.goto('https://www.facebook.com/login');
  await page.type('#email', email, { delay: 50 });
  await page.type('#pass', pass, { delay: 50 });
  await page.click('[name="login"]');
  await page.waitForNavigation();

  console.log('Đăng nhập thành công. Đang truy cập newfeed...');
  await page
