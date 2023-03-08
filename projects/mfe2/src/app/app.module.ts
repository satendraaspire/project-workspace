import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './employee/employee.module';

import { HttpClientModule } from '@angular/common/http'
import{ ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
