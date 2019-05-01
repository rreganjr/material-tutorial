import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule, MatMenuModule, MatInputModule, MatOptionModule, MatSelectModule,
  MatIconModule, MatListModule, MatCheckboxModule, MatDatepickerModule, MatNativeDateModule,
   MatRadioModule, MatToolbarModule, MatButtonModule, MatSidenavModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SignUpOrInComponent } from './sign-up-or-in/sign-up-or-in.component';
import { ChichiNgModule }  from 'chichi-ng';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    SignUpOrInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    ChichiNgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
