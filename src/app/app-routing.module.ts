import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { RegisterClientComponent } from './user/register.client/register.client.component';


const routes: Routes = [
{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
{path: 'dashboard', component: DashboardComponent},
{path: 'clientes', component: RegisterClientComponent},
{path: 'vendas', component: DashboardComponent},
{path: 'financeiro', component: RegisterClientComponent},
{path: 'caixa', component: RegisterClientComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
