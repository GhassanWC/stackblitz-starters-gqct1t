import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-edit-device',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-device.component.html',
  styleUrl: './edit-device.component.css',
})
export class EditDeviceComponent implements OnInit {
  isVisible = false;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.popupVisibility$.subscribe(
      (isVisible) => (this.isVisible = isVisible)
    );
  }

  closePopup(): void {
    this.employeeService.closePopup();
  }
  // export class EditDeviceComponent {
  //   isVisible = false;

  //   openPopup(): void {
  //     this.isVisible = true;
  //   }

  //   closePopup(): void {
  //     this.isVisible = false;
  //   }
}
