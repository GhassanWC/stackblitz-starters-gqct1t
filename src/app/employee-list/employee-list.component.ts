// src/app/employee-list/employee-list.component.ts
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { employeeData } from './employeeData';
import { EditDeviceComponent } from '../edit-device/edit-device.component';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  standalone: true, // Mark this component as standalone
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatSortModule,
    EditDeviceComponent,
  ], // Import any required Angular modules
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  constructor(private employeeService: EmployeeService) {}
  openEditDevicePopup(): void {
    this.employeeService.openPopup();
  }
  // @ViewChild(EditDeviceComponent) editDevice!: EditDeviceComponent;
  // openEditDevicePopup(): void {
  //   if (this.editDevice) {
  //     this.editDevice.openPopup();
  //   }
  // }
  displayedColumns: string[] = [
    'empId',
    'name',
    'entryTime',
    'entryGate',
    'entryDevice',
    'exitTime',
    'exitGate',
    'exitDevice',
    'workingTime',
    'buttons',
  ];

  employees = employeeData;

  dataSource = new MatTableDataSource(this.employees);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
