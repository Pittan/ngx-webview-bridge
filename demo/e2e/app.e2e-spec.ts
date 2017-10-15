import { NgxWebviewBridgeDemoPage } from './app.po';

describe('ngx-webview-bridge-demo App', () => {
  let page: NgxWebviewBridgeDemoPage;

  beforeEach(() => {
    page = new NgxWebviewBridgeDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
