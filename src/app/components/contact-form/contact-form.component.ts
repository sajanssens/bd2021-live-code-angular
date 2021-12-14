import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
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
  private _genders: Gender[] = [
    {id: 1, name: 'Male'},
    {id: 2, name: 'Female'}
  ];

  // tslint:disable-next-line:variable-name
  languages: Language[] = [
    {id: 1, name: 'Java'},
    {id: 2, name: 'Kotlin'},
    {id: 3, name: 'Typescript'},
    {id: 4, name: 'PHP'}
  ];

  contactForm: FormGroup;
  plusMinus = 'plus';

  constructor(private contactService: ContactService, private fb: FormBuilder) {}

  get languagesFormArray(): FormArray {
    return this.contactForm.controls.languages as FormArray;
  }

  get genders(): Gender[] { return this._genders; }

  ngOnInit(): void {
    const fb = this.fb;
    this.contactForm = new FormGroup({
      firstName: fb.control(''),
      surname: fb.control(''),
      email: fb.control('', [Validators.required, emailValidator]),
      gender: fb.control(''),
      languages: fb.array([])
    });
    this.addLanguages();
  }

  private addLanguages(): void {
    this.languages.forEach(() => this.languagesFormArray.push(new FormControl(false)));
  }

  submit(): void {
    this.contactForm.value.languages = this.contactForm.value.languages
      .map((checked, i) => checked ? this.languages[i] : null)
      .filter(v => v !== null);

    this.contactService.add(this.contactForm.value);
    this.contactForm.reset();
    this.toggleForm();
  }

  toggleForm(): void {
    this.plusMinus = (this.plusMinus === 'plus') ? 'minus' : 'plus';
  }
}
