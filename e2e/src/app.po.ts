import {browser, by, element, ElementFinder} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  private getInputFirstName(): ElementFinder {
    return element(by.id('inputFirstName'));
  }

  hasInputFirstName(): boolean {
    return this.getInputFirstName() !== undefined;
  }
}
