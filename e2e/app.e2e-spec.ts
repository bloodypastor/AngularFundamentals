import { CooperPage } from './app.po';

describe('cooper App', () => {
  let page: CooperPage;

  beforeEach(() => {
    page = new CooperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
