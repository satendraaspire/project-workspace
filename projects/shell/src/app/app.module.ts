import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';

import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { EmployeFilterPipe } from './Pipes/employe-filter.pipe';
import { StoreModule } from '@ngrx/store';



@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({}, {})

  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeFilterPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
