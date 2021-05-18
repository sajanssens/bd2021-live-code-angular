import {Component, OnInit, ViewChild} from '@angular/core';
import {Contact} from '../../components/contact-form/contact';
import {ContactListComponent} from '../../components/contact-list/contact-list.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  @ViewChild(ContactListComponent)
  contactListComponent: ContactListComponent;

  contactsData: Contact[];

  constructor() {
  }

  ngOnInit(): void {
    this.contactsData = [
      {firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com'},
      {firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com'},
      {firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk'}
    ];
  }

  handleAdd(c: Contact): void {
    this.contactsData.push(c);
    this.contactListComponent.initCheckBoxForm();
  }

}
