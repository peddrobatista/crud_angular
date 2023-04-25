import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from './components/templates/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/templates/nav/nav.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {FormsModule} from '@angular/forms';
import {MatFormField} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent,
    ProductReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    FormsModule,
    MatFormField,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
