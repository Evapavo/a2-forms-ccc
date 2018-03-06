import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteFormComponent } from './components/quotes/quote-form/quote-form.component';
import { QuoteListComponent } from './components/quotes/quote-list/quote-list.component';
import { QuoteItemComponent } from './components/quotes/quote-item/quote-item.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    QuoteListComponent,
    QuoteItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
