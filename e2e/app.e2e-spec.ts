import { AngularMaterialSundayPage } from './app.po';

describe('angular-material-sunday App', function() {
  let page: AngularMaterialSundayPage;

  beforeEach(() => {
    page = new AngularMaterialSundayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
