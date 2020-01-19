import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { SignupModalComponent } from '../signup-modal/signup-modal.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  public bsModalRef: BsModalRef;
  public currentStep = 'step1';
  public step1: {
    level: string;
    learningItem: string;
  } = {
    level: '',
    learningItem: ''
  };
  public isClickedSignupModal: boolean;

  constructor(private modalService: BsModalService) {}

  ngOnInit() {
  }

  public openSignupModal() {
    this.isClickedSignupModal = true;
    if (this.step1.level && this.step1.learningItem) {
      this.bsModalRef = this.modalService.show(SignupModalComponent);
    }
  }

}
