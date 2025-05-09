import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../../services/employee.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.errorMessage = '';
      },
      error: (error) => {
        console.error('Erreur lors du chargement des employés:', error);
        this.errorMessage = 'Erreur lors du chargement des employés';
      }
    });
  }

  deleteEmployee(id: string | undefined) {
    if (id && confirm("Êtes-vous sûr de vouloir supprimer cet employé ?")) {
      this.employeeService.deleteEmployee(id).subscribe({
        next: () => {
          this.loadEmployees();
          this.errorMessage = '';
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
          this.errorMessage = 'Erreur lors de la suppression de l\'employé';
        }
      });
    }
  }

  editEmployee(id: string | undefined) {
    if (id) this.router.navigate(['/employees/edit', id]);
  }
}
