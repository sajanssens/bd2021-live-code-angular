import {Component, OnInit} from '@angular/core';
import {Contact} from './contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contacts: Contact[];
  newContact = {} as Contact;

  ngOnInit(): void {
    this.contacts = [
      {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com'},
      {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com'},
      {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk'}
    ];
  }

  addContact(): void {
    this.contacts.push(this.newContact);
    this.newContact = {} as Contact; // i.e.: (Contact) new Object()
  }
}
