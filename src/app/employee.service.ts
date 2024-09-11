// src/app/employee.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private popupVisibilitySubject = new BehaviorSubject<boolean>(false);
  popupVisibility$ = this.popupVisibilitySubject.asObservable();

  openPopup(): void {
    this.popupVisibilitySubject.next(true);
  }

  closePopup(): void {
    this.popupVisibilitySubject.next(false);
  }
}
