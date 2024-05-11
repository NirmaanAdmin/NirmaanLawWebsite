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
    this.title.setTitle('Get-Started - Nirmaan360')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Get-Started - Nirmaan360',
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
    this.customDialog.nativeElement.close();
  }
  validateForm() {
    if (this.firstName?.trim() != null && this.companyName?.trim() != null && this.selectedPlan?.trim() != null && this.selectedMembership?.trim() != null && this.validateEmailId(this.emailAddress.trim()) == true) {
      this.makePayment();
    }
    else {
      alert("Please Enter Correct Details.")
    }
  }

  makePayment() {
    let body = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.emailAddress,
      phoneNumber: this.phoneNumber,
      companyName: this.companyName,
      licenseKey: this.selectedPlan == "Free" ? null : this.selectedPlan,
      membershipKey: (!this.selectedMembership || this.selectedPlan == "Free") ? null : this.selectedMembership,
      transactionInfo: null,
    }
    if (this.selectedPlan == "Free") {
      this.isLoading = true;
      this.selectedPlan = null;
      this.selectedMembership = null;
      this.razorpayService.registerBody = { ...body };
      this.razorpayService.register().subscribe((res) => {
        this.isLoading = false;
        this.openDialog()

      });
    }
    else {
      if (this.selectedPlan == "95252D31-1EA3-4DF8-BAC4-A8CD13DA9D83") {
        //this is in Paisa
        this.amount = 3000000
      }

      if (this.selectedPlan == "AEE6B77E-6E8B-4455-A5B8-C617F65D969E") {
        //this is in Paisa
        this.amount = 5100000

      }

      this.razorpayService.initializeRazorpay(body, this.amount);
    }

    // this.firstName = null;
    // this.lastName = null;
    // this.emailAddress = null;
    // this.phoneNumber = null;
    // this.companyName = null;
    // this.selectedPlan = "Free";
  }
}
