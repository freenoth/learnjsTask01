import { LearnjsTask01Page } from './app.po';

describe('learnjs-task01 App', () => {
  let page: LearnjsTask01Page;

  beforeEach(() => {
    page = new LearnjsTask01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
