import {Injectable} from '@angular/core';
import {Contact} from '../components/contact-form/contact';
import {Subject} from 'rxjs';
import {shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // tslint:disable-next-line:variable-name
  private _contactsData: Contact[] = [
    {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com'},
    {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com'},
    {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk'}
  ];

  // tslint:disable-next-line:variable-name
  private _contactsDataUpdated$ = new Subject<Contact[]>();

  add(c: Contact): void {
    this._contactsData.push(c);
    this.throwUpdateEvent();
  }

  getAll(): void {
    this.throwUpdateEvent();
  }

  get contactsDataUpdated$(): Subject<Contact[]> {
    return this._contactsDataUpdated$;
  }

  private throwUpdateEvent(): void {
    this._contactsDataUpdated$.next(this._contactsData);
  }

}
