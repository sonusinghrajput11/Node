import { AngularNodeCrudPage } from './app.po';

describe('angular-node-crud App', () => {
  let page: AngularNodeCrudPage;

  beforeEach(() => {
    page = new AngularNodeCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
