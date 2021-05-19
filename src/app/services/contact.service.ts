import {Injectable} from '@angular/core';
import {Contact} from '../components/contact-form/contact';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {serverUrl} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  uri = serverUrl + '/contacts';

  // tslint:disable-next-line:variable-name
  private _contactsData: Contact[] = [
    {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com'},
    {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com'},
    {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk'}
  ];

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:variable-name
  private _contactsDataUpdated$ = new Subject<Contact[]>();

  add(c: Contact): void {
    this._contactsData.push(c);
    this.throwUpdateEvent();
  }

  getAll(): void {
    this.http.get<Contact[]>(this.uri) // get contacts from server
      .subscribe(  // when the results arrive (some time in the future):
        // rise the contactsUpdated event and supply the contacts
        contacts => {
          this._contactsDataUpdated$.next(contacts);
        }
      );
  }

  get contactsDataUpdated$(): Subject<Contact[]> {
    return this._contactsDataUpdated$;
  }

  private throwUpdateEvent(): void {
    this._contactsDataUpdated$.next(this._contactsData);
  }

}
