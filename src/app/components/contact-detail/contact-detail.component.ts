import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Contact} from '../contact-form/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactForm: FormGroup;
  contact: Contact;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ContactService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.get(id).subscribe(c => {
        this.contact = c;
        this.contactForm.patchValue(c); // fill the form with the gotten contact
      }
    );

    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  save(): void {
    console.log(this.contact);
    this.service.update(this.contactForm.value, this.contact.id);
    this.router.navigate(['/contacts']);
  }

}
