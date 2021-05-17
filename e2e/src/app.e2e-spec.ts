import {AppPage} from './app.po';
import {browser, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should have input for first name', () => {
    expect(page.hasInputFirstName()).toBe(true);
  });

  it('should submit valid contact', () => {
    page.getNrOfContacts().then(countBefore => {
      page.enterFirstName('Hank');
      page.enterSurname('Knot');
      page.enterEmail('h@nk.com');
      page.submitForm();

      expect(page.getNrOfContacts()).toBe(countBefore + 1);
    });

    browser.sleep(2000);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
