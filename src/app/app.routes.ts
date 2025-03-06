import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', title: "App Home page", component: HomeComponent },
    { path: 'dashboard', title: "App Dashboard page", component: DashboardComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', title: "App 404 page", component: PageNotFoundComponent },

];
