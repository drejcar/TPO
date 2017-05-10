import { PatronazneSestreFEdeployPage } from './app.po';

describe('patronazne-sestre-fedeploy App', function() {
  let page: PatronazneSestreFEdeployPage;

  beforeEach(() => {
    page = new PatronazneSestreFEdeployPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
