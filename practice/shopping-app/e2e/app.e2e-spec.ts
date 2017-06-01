import { ShoppingAppPage } from './app.po';

describe('shopping-app App', () => {
  let page: ShoppingAppPage;

  beforeEach(() => {
    page = new ShoppingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
