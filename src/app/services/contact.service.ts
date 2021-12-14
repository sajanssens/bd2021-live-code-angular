import {Injectable} from '@angular/core';
import {Contact} from '../domain/contact';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {serverUrl} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  uri = serverUrl + '/contacts';

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:variable-name
  private _contactsDataUpdated$ = new Subject<Contact[]>(); // is een observable

  getAll(): void {
    this.http.get<Contact[]>(this.uri) // get contacts from server
      .subscribe(                      // when the results arrive (some time in the future):
        responseData => this._contactsDataUpdated$.next(responseData) // throw the next event on _contactsDataUpdated$
      );                               // rise the contactsUpdated event and supply the contacts
  }

  add(c: Contact): void {
    this.http.post<Contact>(this.uri, c) // post contact to server
      .subscribe(() => this.getAll());   // when posted: getAll (refresh)
  }

  delete(c: Contact): void {
    this.http.delete(`${this.uri}/${c.id}`) // delete contact from server
      .subscribe(() => this.getAll());      // when deleted: getAll (refresh)
  }

  search(value: string): void {
    this.http.get<Contact[]>(`${this.uri}?q=${value}`)
      .subscribe(contacts => this._contactsDataUpdated$.next(contacts));
  }

  get contactsDataUpdated$(): Subject<Contact[]> {
    return this._contactsDataUpdated$;
  }

  get(id: number): Observable<Contact> {
    return this.http.get<Contact>(`${this.uri}/${id}`);
  }

  update(c: Contact, id: number): void {
    this.http.put<Contact[]>(`${this.uri}/${id}`, c) // put contact to server
      .subscribe(() => this.getAll());  // when posted: getAll (refresh)
  }
}
