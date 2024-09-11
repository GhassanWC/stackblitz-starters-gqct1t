// src/app/app.component.ts
import { Component } from '@angular/core';
import { EmployeeListComponent } from './employee-list/employee-list.component'; // Import the standalone component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EmployeeListComponent], // Include EmployeeListComponent in imports
  templateUrl: './app.component.html', // Use a template URL to link the HTML content
  styleUrls: ['./app.component.css'], // Optional styling for the app component
})
export class AppComponent {}
