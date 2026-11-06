// Interaction checks used for DEMO_NOTES. Run with the site served on :3100: node scripts/e2e-check.cjs (needs playwright).
const { chromium, devices } = require('playwright');
const ok = (c, m) => console.log((c ? 'PASS ' : 'FAIL ') + m);
(async () => {
  const b = await chromium.launch();
  const errors = [];
  // mobile menu
  let p = await b.newPage({ viewport: { width: 375, height: 812 }, hasTouch: true, isMobile: true });
  p.on('pageerror', e => errors.push(e.message));
  await p.goto('http://localhost:3100/', { waitUntil: 'networkidle' });
  await p.click('.site-header__bar .site-header__menu');
  ok(await p.isVisible('#mobile-menu'), 'mobile menu opens');
  ok(await p.evaluate(() => document.body.style.overflow === 'hidden'), 'body scroll locked while menu open');
  await p.keyboard.press('Escape');
  ok(!(await p.isVisible('#mobile-menu')), 'Escape closes menu');
  await p.click('.site-header__bar .site-header__menu');
  await p.click('#mobile-menu >> text=Diensten');
  await p.waitForURL('**/diensten/');
  ok(p.url().endsWith('/diensten/'), 'menu link navigates to /diensten/');
  ok(!(await p.isVisible('#mobile-menu')), 'menu closes after navigation');
  ok(await p.evaluate(() => document.querySelector('#mobile-menu a[href="/diensten/"]').getAttribute('aria-current') === 'page'), 'active state on Diensten');
  // swipe carousel on touch
  await p.goto('http://localhost:3100/', { waitUntil: 'networkidle' });
  await p.locator('.yc__viewport').scrollIntoViewIfNeeded();
  const box = await p.locator('.yc__viewport').boundingBox();
  await p.mouse.move(box.x + box.width * 0.8, box.y + 100); await p.mouse.down();
  await p.mouse.move(box.x + box.width * 0.2, box.y + 105, { steps: 6 }); await p.mouse.up();
  await p.waitForTimeout(300);
  ok((await p.locator('.yc__slide.is-active h3').innerText()).includes('1800'), 'swipe left goes to next yacht');
  await p.close();

  // desktop: carousel keys, services keyboard, ruler, form validation
  p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  p.on('pageerror', e => errors.push(e.message));
  await p.goto('http://localhost:3100/', { waitUntil: 'networkidle' });
  await p.locator('.yc__arrow').last().focus();
  await p.keyboard.press('ArrowRight'); await p.keyboard.press('ArrowRight');
  ok((await p.locator('.yc__slide.is-active h3').innerText()).includes('Trawler 1800'), 'arrow keys move carousel');
  await p.click('.yc__thumb >> nth=3');
  ok((await p.locator('.yc__slide.is-active h3').innerText()).includes('Trawler 53'), 'thumbnail selects slide');
  ok(await p.evaluate(() => [...document.querySelectorAll('.yc__slide:not(.is-active)')].every(s => s.inert)), 'inactive slides inert');
  await p.locator('#svc-btn-nieuwbouw').focus();
  await p.keyboard.press('ArrowDown'); await p.keyboard.press('ArrowDown');
  ok(await p.isVisible('#svc-betimmering') && !(await p.isVisible('#svc-nieuwbouw')), 'services arrow keys switch panel');
  ok((await p.getAttribute('#svc-btn-betimmering', 'aria-expanded')) === 'true', 'aria-expanded updated');
  await p.locator('.ruler input[type=range]').first().fill('20');
  const t = await p.locator('.ruler__result .lead').innerText();
  ok(t.includes('1,8 m korter'), 'ruler compares 20 m vs 21,8 m: ' + t);
  const href = await p.getAttribute('.ruler__result a', 'href');
  ok(href.startsWith('mailto:info@bendie.nl') && decodeURIComponent(href).includes('Lengte: 20,0 m'), 'ruler mailto carries length');
  await p.click('.ruler__models label:has-text("Trawler 53")');
  ok((await p.locator('.ruler__cap').innerText()).includes('Trawler 53'), 'ruler model switch');
  // header solid on scroll
  ok(await p.evaluate(() => document.querySelector('.site-header').classList.contains('is-light')), 'header transparent at top');
  await p.evaluate(() => window.scrollTo(0, 600)); await p.waitForTimeout(200);
  ok(await p.evaluate(() => document.querySelector('.site-header').classList.contains('is-solid')), 'header solid after scroll');

  await p.goto('http://localhost:3100/contact/?onderwerp=Schilderwerk', { waitUntil: 'networkidle' });
  ok((await p.inputValue('#f-onderwerp')) === 'Schilderwerk', 'contact preset from query');
  await p.click('button[type=submit]');
  ok(await p.isVisible('#e-naam') && await p.isVisible('#e-email') && await p.isVisible('#e-bericht'), 'empty submit shows errors');
  ok(await p.evaluate(() => document.activeElement.id === 'f-naam'), 'focus moves to first error');
  await p.fill('#f-naam', 'Test'); await p.fill('#f-email', 'fout'); await p.fill('#f-bericht', 'Graag onderhoud aan de motor.');
  await p.click('button[type=submit]');
  ok((await p.innerText('#e-email')).includes('lijkt niet te kloppen'), 'invalid email message');
  let mailto = null;
  await p.route('**/*', r => r.continue());
  p.on('framenavigated', f => {});
  await p.evaluate(() => { const orig = Object.getOwnPropertyDescriptor(window.location.__proto__ || Location.prototype, 'href'); });
  await p.fill('#f-email', 'test@voorbeeld.nl');
  const [req] = await Promise.all([
    p.waitForEvent('request', r => r.url().startsWith('mailto:'), { timeout: 3000 }).catch(() => null),
    p.click('button[type=submit]'),
  ]);
  await p.waitForTimeout(300);
  ok(await p.isVisible('.form__status'), 'status explains mail program opened (no fake "sent")');

  // reduced motion
  const rm = await b.newContext({ reducedMotion: 'reduce', viewport: { width: 1440, height: 900 } });
  p = await rm.newPage();
  await p.goto('http://localhost:3100/', { waitUntil: 'networkidle' });
  await p.waitForTimeout(500);
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('.facts__item')).opacity === '1'), 'reduced motion: content visible without scrolling');
  await p.locator('.dock').scrollIntoViewIfNeeded(); await p.waitForTimeout(800);
  ok(await p.evaluate(() => [...document.querySelectorAll('video')].every(v => v.paused)), 'reduced motion: videos stay paused (poster)');
  ok(await p.evaluate(() => document.querySelector('.dock').style.getPropertyValue('--p') === '1'), 'reduced motion: dockside shows final state');

  // no-JS: content still visible
  const nj = await b.newContext({ javaScriptEnabled: false, viewport: { width: 1440, height: 900 } });
  p = await nj.newPage();
  await p.goto('http://localhost:3100/', { waitUntil: 'networkidle' });
  ok(await p.evaluate(() => getComputedStyle(document.querySelector('.facts__item')).opacity === '1'), 'no-JS: reveal content visible');

  // broken images / links across pages
  const pages = ['/', '/de-werf/', '/diensten/', '/jachten/', '/jachten/impressive-2200/', '/jachten/impressive-1800/', '/jachten/trawler-1800/', '/jachten/trawler-53/', '/winterstalling/', '/contact/', '/bronnen/'];
  p = await b.newPage({ viewport: { width: 1440, height: 900 } });
  const links = new Set(); let broken = [];
  for (const u of pages) {
    await p.goto('http://localhost:3100' + u, { waitUntil: 'networkidle' });
    await p.evaluate(async () => { for (const i of document.images) { i.loading = 'eager'; } await new Promise(r => setTimeout(r, 800)); });
    const bad = await p.evaluate(() => [...document.images].filter(i => i.complete && i.naturalWidth === 0).map(i => i.src));
    broken.push(...bad.map(x => u + ' ' + x));
    (await p.evaluate(() => [...document.querySelectorAll('a[href^="/"]')].map(a => a.getAttribute('href')))).forEach(h => links.add(h.split('#')[0].split('?')[0]));
    const h1 = await p.evaluate(() => document.querySelectorAll('h1').length);
    if (h1 !== 1) broken.push(u + ' h1 count ' + h1);
  }
  ok(broken.length === 0, 'no broken images, one h1 per page ' + broken.join(', '));
  const badLinks = [];
  for (const l of links) { const r = await p.request.get('http://localhost:3100' + l); if (r.status() >= 400) badLinks.push(l + ' ' + r.status()); }
  ok(badLinks.length === 0, `internal links ok (${links.size}) ${badLinks.join(', ')}`);
  ok(errors.length === 0, 'no page errors ' + errors.join(' | '));
  await b.close();
})();
