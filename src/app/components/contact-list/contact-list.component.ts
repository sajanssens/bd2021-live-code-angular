import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Contact} from '../contact-form/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnChanges {

  @Input() contacts: Contact[];

  checkBoxForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initCheckBoxForm();
  }

  initCheckBoxForm(): void {
    const formContacts: FormGroup[] = [];

    for (const c of this.contacts) {
      formContacts.push(this.fb.group({del: false}));
    }

    this.checkBoxForm = this.fb.group({
      contactsFormArray: this.fb.array(formContacts)
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
    this.initCheckBoxForm();
  }

}
