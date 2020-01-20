import { Component } from '@angular/core';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public bsModalRef: BsModalRef;
  public isShowMobileBar: boolean;

  constructor(private modalService: BsModalService) {}

  public openLoginModal() {
    this.bsModalRef = this.modalService.show(LoginModalComponent);
  }
}
