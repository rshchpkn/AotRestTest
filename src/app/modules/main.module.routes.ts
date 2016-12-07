import { Routes } from '@angular/router';
import { HelloWorldComponent } from '../components/hello-world.component';


export const routes: Routes = [
  {path: 'landing', component: HelloWorldComponent},
  {path: '', redirectTo: '/landing', pathMatch: 'full'},
];
