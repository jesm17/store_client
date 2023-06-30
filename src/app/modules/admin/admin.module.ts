import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'src/app/components/user/admin/main/main.component';
import { adminGuard } from 'src/app/guards/admin/admin.guard';
import { EmployeesComponent } from 'src/app/components/user/admin/employees/employees.component';

const routes: Routes = [
  {
    path: 'admin/main',
    component: MainComponent,
    canActivate: [adminGuard],
  },
  {
    path: 'employes',
    component: EmployeesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AdminModule {}
