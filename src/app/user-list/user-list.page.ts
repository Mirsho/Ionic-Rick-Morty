import { Component, OnInit } from '@angular/core';
import { CharactersServiceService } from '../characters-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  characters: Object[] = [];

  constructor(
    private charactersService: CharactersServiceService
  ) { }

  ngOnInit() {
    this.charactersService.getCharacters()
      .subscribe(
        response => {
          console.log(response);
          this.characters = response.results;
        },
        error => console.log(error),
        () => console.log('Petición comletada.')
      )
  }

}
