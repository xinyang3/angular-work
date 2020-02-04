import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ManageCrisesComponent} from "./manage-crises/manage-crises.component";
import {ManageHeroesComponent} from "./manage-heroes/manage-heroes.component";
import {AdminComponent} from "./admin/admin.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
