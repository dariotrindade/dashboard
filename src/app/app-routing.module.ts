import { UserdetailsComponent } from './userdetails/userdetails.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from './section/section.component';

const routes: Routes = [
  { path: '', redirectTo: 'Section', pathMatch: 'full' },
  { path: 'Section', component: SectionComponent },
  { path: 'UserDetails', component: UserdetailsComponent },
  // { path: '**', redirectTo: '/404' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
