import {Component, OnInit} from '@angular/core';
import {Contact} from './contact';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contacts: Contact[];
  newContact = {} as Contact;
  contactForm: FormGroup;
  bedrag = 45.99;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl(''),
    });

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

  save(): void {
    this.contacts.push(this.contactForm.value);
    this.contactForm.reset();
  }
}
