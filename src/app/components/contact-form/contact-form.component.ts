import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact.service';
import {Contact} from '../../domain/contact';
import {Gender} from '../../domain/gender';
import {emailValidator} from '../../util/util';
import {Language} from '../../domain/language';

@Component({
  selector: 'app-contact-form', // de html-tag die je gebruikt om dit component ergens in een ander component te plaatsen
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Input() contact: Contact;

  // tslint:disable-next-line:variable-name
  private _genders: Gender[] = [{id: 1, name: 'Male'}, {id: 2, name: 'Female'}];

  // tslint:disable-next-line:variable-name
  private _languages: Language[] = [{id: 1, name: 'Java'}, {id: 2, name: 'Kotlin'}, {id: 3, name: 'Typescript'}, {id: 4, name: 'PHP'},];

  contactForm: FormGroup;
  plusMinus = 'plus';

  constructor(private contactService: ContactService, private fb: FormBuilder) {
  }

  get genders(): Gender[] {
    return this._genders;
  }


  get languages(): Language[] {
    return this._languages;
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      surname: new FormControl(''),
      email: new FormControl('', [Validators.required, emailValidator]),
      gender: new FormControl(''),
      languages: this.fb.array([
        this.fb.group({Java: false}),
        this.fb.group({Kotlin: false}),
        this.fb.group({Typescript: false}),
        this.fb.group({PHP: false})
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
