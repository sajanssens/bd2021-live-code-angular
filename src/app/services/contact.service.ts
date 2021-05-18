import {Injectable} from '@angular/core';
import {Contact} from '../components/contact-form/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  #contactsData: Contact[] = [
    {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com'},
    {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com'},
    {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk'}
  ];

  constructor() {
  }

  get contactsData(): Contact[] {
    return this.#contactsData;
  }

  add(c: Contact): void {
    this.contactsData.push(c);
  }

  getContacts(): Contact[] {
    return this.#contactsData;
  }
}
