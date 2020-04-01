import {
  Component,
  ComponentFactoryResolver,
  ViewChild,
  OnDestroy
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";

import { AuthService, AuthResponseData } from "./auth.service";
import { AlertComponent } from "../share/alert/alert.component";
import { PlaceholderDirective } from "../share/placeholder/placeholder.directive";

@Component({
  templateUrl: "./auth.component.html"
})
export class AuthComponent implements OnDestroy {
  isLoginMode = true;
  isLoading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, { static: false })
  alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    // console.log(form.value);
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        // console.log(resData);
        this.isLoading = false;
        this.router.navigate(["/recipes"]);
      },
      errRes => {
        // console.log(errRes);
        this.error = errRes;
        this.showErrorAlert(errRes);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  onHanleError() {
    this.error = null;
  }

  private showErrorAlert(message) {
    // const alertCmp = new AlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(
      AlertComponent
    );
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componntRef = hostViewContainerRef.createComponent(alertCmpFactory);
    componntRef.instance.message = message;
    this.closeSub = componntRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
