import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

function emailValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }

  const regex = /^.+@.+\.[a-zA-Z]+$/;
  return regex.test(control.value) ? null : {email: {valid: false}};
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @Output() contactAdded = new EventEmitter();

  contactForm: FormGroup;
  loadingMessage = 'loading...';
  emailInput = new FormControl('', [Validators.required, emailValidator]);

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(''),
      surname: new FormControl(''),
      email: this.emailInput,
    });
  }

  handleLoadingIsClicked(someOutput: string): void {
    console.log(someOutput);
    this.loadingMessage = someOutput;
  }


  addContactModelDriven(): void {
    this.contactAdded.emit(this.contactForm.value);
    this.contactForm.reset();
  }
}
