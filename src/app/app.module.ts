import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReapeatTypeComponent } from './reapeat-type/reapeat-type.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReapeatTypeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: ReapeatTypeComponent },
      ]
    }
    ),
    FormlyBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
