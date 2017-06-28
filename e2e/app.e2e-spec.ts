import { AngularfirebasePage } from './app.po';

describe('angularfirebase App', () => {
  let page: AngularfirebasePage;

  beforeEach(() => {
    page = new AngularfirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
