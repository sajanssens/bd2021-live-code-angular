import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../contact-form/contact';

@Component({
  selector: '[app-contact-row]',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent implements OnInit {

  @Input() contact: Contact;

  constructor() {
  }

  ngOnInit(): void {
  }

}
