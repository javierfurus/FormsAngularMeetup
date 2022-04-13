import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageHeadingComponent } from './page-heading/page-heading.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialExampleModule } from './material.module';
import { PostsService } from './posts.service';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { HomeComponent } from './home/home.component';
import { ContentTableComponent } from './content-table/content-table.component';
import { HighlightOnHoverDirective } from './directives/highlight.directive';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactiveform/reactiveform.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PageHeadingComponent,
    UserFeedComponent,
    TestComponentComponent,
    HomeComponent,
    ContentTableComponent,
    HighlightOnHoverDirective,
    FormComponent,
    ReactiveFormComponent,
  ],
  bootstrap: [AppComponent],
  providers: [PostsService],
})
export class AppModule {}
