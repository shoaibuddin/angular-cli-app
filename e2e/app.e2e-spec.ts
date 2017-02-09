import { EnigmaPage } from './app.po';

describe('enigma App', function() {
  let page: EnigmaPage;

  beforeEach(() => {
    page = new EnigmaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
