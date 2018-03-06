import { Quote } from './../../../shared/models/quote.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent  {
  quote: Quote = new Quote();
  @Output() onCreate: EventEmitter<Quote> = new EventEmitter<Quote>();

  onSubmitQuoteForm(quoteForm: NgForm) {
    this.onCreate.emit(this.quote); // this.onCreate.emit(Object.assign({}, this.quote));

    this.quote = new Quote();
    quoteForm.reset();
  }
}
