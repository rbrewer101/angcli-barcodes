import { Angcli02Page } from './app.po';

describe('angcli02 App', function() {
  let page: Angcli02Page;

  beforeEach(() => {
    page = new Angcli02Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
