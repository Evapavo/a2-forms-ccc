import { Quote } from './../../../shared/models/quote.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent {
  quotes: Array<Quote> = [];


  onCreateQuote(quote: Quote) {
    this.quotes.push(quote);
  }
}
