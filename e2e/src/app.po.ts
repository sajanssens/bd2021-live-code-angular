import {browser, by, element, ElementFinder} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/contacts');
  }

  private getInputFirstName(): ElementFinder {
    return element(by.id('inputFirstName'));
  }

  private getInputSurname(): ElementFinder {
    return element(by.id('inputSurname'));
  }

  private getInputEmail(): ElementFinder {
    return element(by.id('inputEmail'));
  }

  private getFormButton(): ElementFinder {
    return element(by.css('#submitButton'));
  }

  hasInputFirstName(): boolean {
    return this.getInputFirstName() !== undefined;
  }

  // body > app-root > app-contact-form > form > table > tr:nth-child(1)

  getNrOfContacts(): any {
    return element.all(by.css('table > tr')).count();
  }

  enterFirstName(value: string): void {
    this.getInputFirstName().sendKeys(value);
  }

  enterSurname(value: string): void {
    this.getInputSurname().sendKeys(value);
  }

  enterEmail(value: string): void {
    this.getInputEmail().sendKeys(value);
  }

  submitForm(): void {
    this.getFormButton().click();
  }
}
