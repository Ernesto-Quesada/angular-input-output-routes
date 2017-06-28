import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotelist',
  templateUrl: './quotelist.component.html',
  styleUrls: ['./quotelist.component.css']
})
export class QuotelistComponent implements OnInit {

  quotes: Array<any> = [
    {
        id: 1,
        text: 'I love fries.',
        author: 'Neil Armstrong'
    }, {
        id: 12,
        text: 'Stay thirsty, my friends. Dos Equis.',
        author: 'Most Interesting Man In The World'
    }, {
        id: 99,
        text: 'Stay hungry. Stay foolish.',
        author: 'Ghost of Steve Jobs'
    }, {
        id: 101,
        text: 'Do things that don\'t scale.',
        author: 'Steve Jobs'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  removeQuote (id) {
    this.quotes = this.quotes.filter(
      (quote) => quote.id !== id
    );
  }

}
