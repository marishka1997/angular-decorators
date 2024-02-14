import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { NgContentExampleComponent } from './ng-content-example/ng-content-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    NgContentExampleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
