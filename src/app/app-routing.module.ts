import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TravellersListComponent} from './travellers-list/travellers-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'profil/booking-rules/travellers-list', component: TravellersListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}