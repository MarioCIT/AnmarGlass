import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-quote-form',
  imports: [ReactiveFormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatOptionModule, MatSelectModule],
  templateUrl: './quote-form.html',
  styleUrl: './quote-form.scss',
})
export class QuoteForm implements OnInit{
contactForm!: FormGroup;

  // Form dropdown options
  categories = ['Residential', 'Commercial'];
  serviceTypes = ['New Installation', 'Repair / Replacement'];
  
  residentialServices = [
    'Shower Enclosures', 
    'Windows (Single/Double Pane)', 
    'Sliding Patio Doors', 
    'Window/Door Screens', 
    'Custom Mirrors', 
    'Glass Tabletops'
  ];

  commercialServices = [
    'Storefront Glass Systems', 
    'Commercial Curtain Walls', 
    'Office Glass Partitions', 
    'Security / Bullet-Resistant Glass', 
    'Automatic Sliding Doors', 
    'Panic Hardware / Door Repairs'
  ];

constructor(private fb: FormBuilder) {}
  ngOnInit(): void{
    this.initForm();
  }


  private initForm(): void{
      this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9xX+-.() ]{7,20}$')]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(10), Validators.maxLength(254)]],
      companyName: ['', [Validators.minLength(5), Validators.maxLength(80)]],
      address: ['', [ Validators.minLength(5), Validators.maxLength(100)]],
      city: ['', [Validators.minLength(5), Validators.maxLength(20)]],
      zipCode: ['', [Validators.minLength(5), Validators.maxLength(20)]],

      //project details
      projectCategory: ['Residential', [Validators.required]],
      serviceType: ['New Installation', [Validators.required]],
      specificServices: [[], [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onCategoryChange(): void{
     const category = this.contactForm.get('projectCategory')?.value;
     const companyControl = this.contactForm.get('companyName');

    if (category === 'Commercial'){
      companyControl?.setValidators([Validators.required])
    } else {
      companyControl?.clearValidators();
    }
    companyControl?.updateValueAndValidity();
  }  

  onSubmit(): void{
    if (this.contactForm.valid){
      console.log('form payload submitted successfully:', this.contactForm.value);
    } else{
      this.contactForm.markAllAsTouched();
    }
  }
}