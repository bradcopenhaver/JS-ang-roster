import { JSAngRosterPage } from './app.po';

describe('js-ang-roster App', function() {
  let page: JSAngRosterPage;

  beforeEach(() => {
    page = new JSAngRosterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
