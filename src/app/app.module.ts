import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { GroceryComponent } from './app.grocery';

@NgModule({
  declarations: [
    GroceryComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [GroceryComponent]
})
export class AppModule { }
