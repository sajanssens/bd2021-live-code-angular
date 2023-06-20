import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ContactService} from '../../services/contact.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private service: ContactService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    // static:
    // one-off (snapshot) during life time of this component:
    // const id = +this.route.snapshot.paramMap.get('contactId');
    // this.getContact(id);

    // or reactive:

    // for each time the id changes during life time of this component:
    this.route.paramMap.subscribe((params: ParamMap) => {
        this.getContact(+params.get('id'));
      }
    );

    this.contactForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  private getContact(id: number): void {
    this.service.get(id).subscribe(c => {
        this.contactForm.patchValue(c); // fill the form with the gotten contact
      }
    );
  }

  save(): void {
    this.service.update(this.contactForm.value, this.contactForm.value.id);
    this.router.navigate(['/contacts']);
  }

}
