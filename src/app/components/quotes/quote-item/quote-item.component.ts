import { Quote } from './../../../shared/models/quote.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent {
  @Input() quote: Quote = new Quote();
}
