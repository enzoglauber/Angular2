import { MalicPage } from './app.po';

describe('malic App', () => {
  let page: MalicPage;

  beforeEach(() => {
    page = new MalicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
