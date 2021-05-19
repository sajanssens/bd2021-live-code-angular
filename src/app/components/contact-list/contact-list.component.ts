import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Contact} from '../contact-form/contact';
import {ContactService} from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = [];
  checkBoxForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
  }

  ngOnInit(): void {
    this.contactService.contactsDataUpdated$
      .subscribe(c => {
        this.contacts = c;
        this.initCheckBoxForm();
      });

    this.initCheckBoxForm();
    this.contactService.getAll();
  }

  delete(c: Contact): void {
    this.contactService.delete(c);
  }

  private initCheckBoxForm(): void {
    const formContacts: FormGroup[] = [];

    for (const c of this.contacts) {
      formContacts.push(this.fb.group({del: false}));
    }

    this.checkBoxForm = this.fb.group({
      contactsFormArray: this.fb.array(formContacts)
    });
  }


}
