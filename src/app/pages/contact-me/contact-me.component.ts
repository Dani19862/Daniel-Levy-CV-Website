import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
})
export class ContactMeComponent {
  constructor(public cvService: CvService) {}
  ngOnInit() {
    this.cvService.succsessSource.subscribe((data) => {
      console.log(data);
    });
  }

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
      Validators.maxLength(15),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z]+$'),
      Validators.maxLength(15),
    ]),
    phoneNumber: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{10}$'),
    ]),
  });

  onSubmit() {
    console.log(this.contactForm);
    this.cvService.succsessSource.next(true);
  }
}
