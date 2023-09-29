import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { EMPTY, catchError, switchMap } from 'rxjs';
import { TxnRequest, User } from 'src/app/interface/user';
import { ApiServicesService } from 'src/app/services/api-services.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {//implements OnInit {
 
  hide : boolean = true;
  loginForm: FormGroup;
  email: string = '';
  constructor(
    private router: Router, 
    private fb: FormBuilder){
      {
        this.loginForm = this.fb.group({
          email: ['', [Validators.required, Validators.email]]
        });
      }
    }

  // updateTransaction(id: number, transactRequest: TxnRequest): void {
  //   this.yourService.updateTxn(id, transactRequest)
  //     .subscribe(x => {
  //       console.log('Transaction updated successfully:', x);
  //       // Handle the response as needed
  //     },
  //     error => {
  //       console.error('Error updating transaction:', error);
  //       // Handle errors
  //     });
  // }

  


  // constructor(private userService: UserService, private router: Router) { }

  onLogin(): void {
    console.log("hi")
    // if (this.loginForm.invalid) {
    //   alert('Please provide a valid email address.');
    //   return;
    // }
    // const email = this.loginForm.value.email;

    // // Call the service to get the user by email
    // this.api.getUserId(this.email).subscribe(
    //   (user) => {
    //     // Check if user exists
    //     if (user) {
    //       // User exists, navigate to the home page or perform login actions
    //       this.router.navigate(['/home']);
    //     } else {
    //       // User does not exist, show error message
    //       alert('Account not found. Please create an account.');
    //     }
    //   },
    //   (error) => {
    //     console.error('Error:', error);
    //     alert('An error occurred. Please try again later.');
    //   }
    // );
    this.router.navigate(['/home'])
  }
}
