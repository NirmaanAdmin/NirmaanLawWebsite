// razorpay.service.ts
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var Razorpay: any;

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  private razorpayOptions: any;
  authUrl: string = `${environment.apiURL}`;
  registerBody: any;

  constructor(private http: HttpClient) {
    this.razorpayOptions = {
      key: 'rzp_live_sbD6wA1smmm708', // Replace with your actual Razorpay live key id
      amount: 100, // Replace with the amount in paise or the currency's smallest unit
      name: 'Nirmaan360',
      description: 'Payment for a product',
      image: '../assets/nirmaan 360caviar dreams white-01-200h.png', // Replace with the URL of your company logo
      handler: (response: any) => {
        this.register(response);
      },
      prefill: {
        name: 'John Doe',
        email: 'ask@nirmaan360.com',
        contact: '1234567890'
      },
      notes: {
        address: 'Razorpay Corporate Office'
      },
      theme: {
        color: '#ff9933'
      }
    };
  }

  initializeRazorpay(registerBody, amount) {
    this.registerBody = registerBody;
    if (amount > 0) {
      this.razorpayOptions.amount = amount;
    }
    if (this.razorpayOptions) {
      this.razorpayOptions.prefill.name = this.registerBody.firstName;
      this.razorpayOptions.prefill.email = this.registerBody.email;
      this.razorpayOptions.prefill.contact = this.registerBody.phoneNumber;
    }

    const rzp = new Razorpay(this.razorpayOptions);
    rzp.open();
  }

  register(razorPayResponse: any = null) {
    if (razorPayResponse) {
      this.registerBody.transactionInfo = JSON.stringify(razorPayResponse);
    }

    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.http.post<any>(this.authUrl + 'Auth/Register', this.registerBody, { headers }).pipe(response => response);


  }
}
