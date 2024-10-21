import { Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { SkillsComponent } from './skills/skills.component';

export const routes: Routes = [
    { path: 'dashboard', title: "App Dashboard page", component: DashboardComponent },
    { path: 'skills', title: "App Skills page", component: SkillsComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: '**', title: "App 404 page", component: PageNotFoundComponent },

];
