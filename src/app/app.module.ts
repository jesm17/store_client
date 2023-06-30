import { NgModule, OnInit, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/user/admin/nav/nav.component';
import { AdminsComponent } from './components/user/admin/admins/admins.component';
import { ProductsComponen } from './components/user/admin/products/products.component';
import { CategoriesComponent } from './components/user/admin/categories/categories.component';
import { ClientsComponent } from './components/user/admin/clients/clients.component';
import { EmployeesComponent } from './components/user/admin/employees/employees.component';
import { AdminModule } from './modules/admin/admin.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MainComponent } from './components/user/admin/main/main.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    NavComponent,
    AdminsComponent,
    ProductsComponen,
    CategoriesComponent,
    ClientsComponent,
    EmployeesComponent,
    MainComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: '', component: IndexComponent },
    ]),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
