import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.scss']
})
export class SignupModalComponent implements OnInit {
  public signupForm: FormGroup;
  public submitted: boolean;

  constructor(
    public bsModalRef: BsModalRef,
    private readonly formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: ['', Validators.required],
      firstName: ['', Validators.required]
    });
  }

  public onSubmit() {
    this.submitted = true;
    console.log('form', this.signupForm.value);
    if (this.signupForm.invalid) {
      return;
    }

    $.ajax({
      method: 'POST',
      url: 'https://www.guitarzoom.com',
      data: this.signupForm.value,
      done: (res) => {
        console.log('POST Succeed', res);
      },
      error: (err) => {
        console.log('POST Error', err);
      }
    });
  }

}
