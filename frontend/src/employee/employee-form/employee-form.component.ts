import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule]
})
export class EmployeeFormComponent implements OnInit {
  employee: Employee = { name: '', email: '', position: '', salary: 0 };
  isEdit = false;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.employeeService.getEmployee(id).subscribe({
        next: (data) => {
          this.employee = data;
        },
        error: (error) => {
          console.error('Erreur lors du chargement de l\'employé:', error);
          this.router.navigate(['/employees']);
        }
      });
    }
  }

  onSubmit() {
    if (this.isEdit && this.employee._id) {
      this.employeeService.updateEmployee(this.employee._id, this.employee).subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour:', error);
        }
      });
    } else {
      this.employeeService.addEmployee(this.employee).subscribe({
        next: () => {
          this.router.navigate(['/employees']);
        },
        error: (error) => {
          console.error('Erreur lors de la création:', error);
        }
      });
    }
  }
}
