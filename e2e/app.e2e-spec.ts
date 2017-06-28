import { QuotesPage } from './app.po';

describe('quotes App', () => {
  let page: QuotesPage;

  beforeEach(() => {
    page = new QuotesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
