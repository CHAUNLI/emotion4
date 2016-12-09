import { Emotion4Page } from './app.po';

describe('emotion4 App', function() {
  let page: Emotion4Page;

  beforeEach(() => {
    page = new Emotion4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
