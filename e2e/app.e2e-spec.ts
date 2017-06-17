import { DemoAppClientPage } from './app.po';

describe('demo-app-client App', () => {
  let page: DemoAppClientPage;

  beforeEach(() => {
    page = new DemoAppClientPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
