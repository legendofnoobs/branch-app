import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-branch',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, SelectModule, ButtonModule, ToastModule, CommonModule],
  templateUrl: './add-branch.html',
  styleUrl: './add-branch.css',
})
export class AddBranchComponent {
  branchForm: FormGroup;
  governorates = [
    { label: 'Cairo', value: 'cairo' },
    { label: 'Alexandria', value: 'alexandria' },
    { label: 'Giza', value: 'giza' },
    { label: 'Aswan', value: 'aswan' },
    { label: 'Luxor', value: 'luxor' }
  ];

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.branchForm = this.fb.group({
      branchEn: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/)]],
      branchAr: ['', [Validators.required, Validators.pattern(/^[\u0600-\u06FF0-9\s!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/)]],
      governorate: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.branchForm.valid) {
      const { branchEn, governorate } = this.branchForm.value;
      const govLabel = governorate.label;

      this.messageService.add({
        severity: 'success',
        summary: 'Branch Added',
        detail: `Branch "${branchEn}" added successfully in ${govLabel}`
      });

      // Optional: reset form after success
      // this.branchForm.reset();
    } else {
      this.branchForm.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Validation Error',
        detail: 'Please fill all required fields'
      });
    }
  }

  onCancel() {
    this.branchForm.reset();
  }
}
