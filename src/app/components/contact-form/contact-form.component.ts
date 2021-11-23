import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {ContactService} from '../../services/contact.service';
import {Contact} from './contact';

function emailValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }

  const regex = /^.+@.+\.[a-zA-Z]+$/;
  return regex.test(control.value) ? null : {email: {valid: false}};
}

@Component({
  selector: 'app-contact-form', // de html-tag die je gebruikt om dit component ergens in een ander component te plaatsen
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Input() contact: Contact;

  contactForm: FormGroup;
  plusMinus = 'plus';

  constructor(private contactService: ContactService, private fb: FormBuilder) {
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
