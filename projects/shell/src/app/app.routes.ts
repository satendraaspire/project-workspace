import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { AssginProjectComponent } from './assgin-project/assgin-project.component';
export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'assgin-project',
      component: AssginProjectComponent,
    },
    {
      path: 'employee',
      loadChildren: () =>
           loadRemoteModule({
              type: 'module',
              remoteEntry: 'http://localhost:4300/remoteEntry.js',
              exposedModule: './flights.module'
          })
          .then(m => m.FlightsModule)
  },
  {
    path: 'employee-data',
    loadChildren: () =>
         loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4301/remoteEntry.js',
            exposedModule: './employee.module'
        })
        .then(m => m.EmployeeModule)
  },

    // Your route here:

    // {
    //   path: 'employee',
    //   loadChildren: () => import('mfe1/flights.module').then(m => m.FlightsModule)
    // },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

