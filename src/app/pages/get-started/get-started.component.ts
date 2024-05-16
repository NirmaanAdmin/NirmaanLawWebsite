import { Component, ElementRef, ViewChild } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { RazorpayService } from 'src/app/razorpay.service';

@Component({
  selector: 'get-started',
  templateUrl: 'get-started.component.html',
  styleUrls: ['get-started.component.css'],
})
export class GetStarted {

  @ViewChild('cdialog') customDialog: ElementRef;
  rawxxpf: string = ' ';
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  companyName: string;
  selectedPlan: string = "Free";
  selectedMembership: string = "845B443F-45C4-4487-9DB0-E4A0AC80F900";
  amount: number = 0;
  isLoading: boolean = false;
  constructor(private title: Title, private meta: Meta, private razorpayService: RazorpayService) {
    this.title.setTitle('Get-Started - Nirmaan Law')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Get-Started - Nirmaan Law',
      },
    ])
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  clickMore = false;
  showData() {
    this.clickMore = !this.clickMore;
  }
  isActive: number = 100
  closeMenu() {
    this.isActive = 100;
  }
  openMenu() {
    this.isActive = 0
  }
  validateContactNo(contactNo): boolean {
    return /^[-+,\/()0-9 ]+$/g.test(contactNo);
  }

  validateEmailId(EmailId): boolean {
    return /^(?!\.)(?!.*\.$)(?!.*?\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g.test(
      EmailId
    );
  }
  openDialog() {
    this.customDialog.nativeElement.showModal();
  }

  closeDialog() {
    this.firstName = null;
    this.lastName = null;
    this.emailAddress = null;
    this.phoneNumber = null;
    this.companyName = null;
    this.customDialog.nativeElement.close();
  }
  validateForm() {
    if (this.firstName?.trim() != null && this.companyName?.trim() != null && this.selectedPlan?.trim() != null && this.selectedMembership?.trim() != null && this.validateEmailId(this.emailAddress.trim()) == true) {
      window.open("https://calendly.com/nirmaan360/30min?month=2024-03", "_blank");


      let body = {
        FirstName: this.firstName,
        LastName: this.lastName,
        Email: this.emailAddress,
        PhoneNumber: this.phoneNumber,
        CompanyName: this.companyName,
        Regarding: "Law",
        formDataNameOrder: JSON.stringify(["FirstName", "LastName", "Email", "PhoneNumber", "CompanyName", "Regarding"]),
        formGoogleSheetName: "responses",
        formGoogleSendEmail: "hsk@nirmaan360.com",
      }

      let status = this.sendMail(body);

      //After that, send feedback mail to user's email.
      let body2 = {
        "Message": "Thank you for reaching out Nirmaan Law. We will contact you shortly in under 24 hours.",
        formDataNameOrder: JSON.stringify(["Message"]),
        formGoogleSheetName: "responses",
        formGoogleSendEmail: this.emailAddress,
      }
      this.sendMail(body2);


      this.openDialog();
    }
    else {
      alert("Please Enter Correct Details.")
    }
  }
  sendMail(body: any) {
    var url = "https://script.google.com/macros/s/AKfycbxzxfVMDYuk8aXvdoDzYiTmZkOXAe8bETGohUnCZch6ftNRBfxalfUbGllgFRknVlks/exec";
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // url encode form data for sending as post data
    var encoded = Object.keys(body).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(body[k]);
    }).join('&');
    xhr.send(encoded);
    return xhr.status;
  }

}
