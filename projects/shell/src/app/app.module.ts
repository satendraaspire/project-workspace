import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';

import{HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { EmployeFilterPipe } from './Pipes/employe-filter.pipe';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './user.effects';
import { AssginProjectComponent } from './assgin-project/assgin-project.component';




@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [], 
    EffectsModule.forRoot([UserEffects])


  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    EmployeFilterPipe,
    AssginProjectComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
