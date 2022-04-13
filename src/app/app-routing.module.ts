import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { UserFeedComponent } from './user-feed/user-feed.component';

const routes: Routes = [
  { path: 'test', component: TestComponentComponent },
  { path: 'user-feed', component: UserFeedComponent },
  { path: 'form', component: FormComponent },
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
