import { CollectionApiPage } from './app.po';

describe('collection-api App', function() {
  let page: CollectionApiPage;

  beforeEach(() => {
    page = new CollectionApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
