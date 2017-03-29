import { Angular4QuickstartPage } from './app.po';

describe('angular4-quickstart App', () => {
  let page: Angular4QuickstartPage;

  beforeEach(() => {
    page = new Angular4QuickstartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
