import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../domain/contact';
import {Gender} from '../../domain/gender';
import {emailValidator} from '../../util/util';

@Component({
  selector: 'app-contact-form', // de html-tag die je gebruikt om dit component ergens in een ander component te plaatsen
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contact: Contact;

  // tslint:disable-next-line:variable-name
  private _genders: Gender[] = [{id: 1, name: 'Male'}, {id: 2, name: 'Female'}];

  contactForm: FormGroup;
  plusMinus = 'plus';

  constructor(private contactService: ContactService, private fb: FormBuilder) {
  }

  get genders(): Gender[] {
    console.log(this._genders);
    return this._genders;
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl('', [Validators.required, emailValidator]),
      gender: new FormControl(''),
      languages: this.fb.array([
        this.fb.group({sel: false}),
        this.fb.group({sel: false}),
        this.fb.group({sel: false}),
        this.fb.group({sel: false})
      ])
    });
  }

  addContactModelDriven(): void {
    this.contactService.add(this.contactForm.value);
    this.contactForm.reset();
    this.toggleForm();
  }

  toggleForm(): void {
    this.plusMinus = (this.plusMinus === 'plus') ? 'minus' : 'plus';
  }
}
