import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { CharactersService} from '../characters.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit {

  contacts: Array<Object> = [];


  constructor(private router: Router,
              private myService: CharactersService
              ) {}

  ngOnInit() {
    this.fetchChars();
  }
  viewDetails(id) {this.router.navigate(['contact', id])}

  fetchChars () {
    this.myService.fetchCharacters()
      .then((characterList) => {
        this.contacts = characterList;
      })
      .catch((err) => {
        console.log('Fetch Characters error');
        console.log(err);
      });
  }

}
