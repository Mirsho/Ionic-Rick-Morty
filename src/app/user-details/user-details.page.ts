import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersServiceService } from '../characters-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage implements OnInit {
  characterId?: number;
  character?: Object;

  constructor(
    private route: ActivatedRoute,
    private characterService: CharactersServiceService
  ) { }

  ngOnInit() {
    this.characterId = +this.route.snapshot.paramMap.get('id');
    console.log(this.characterId);
    this.characterService.getCharacter(this.characterId)
      .subscribe(
        res => {
          console.log(res);
          this.character = res;
        },
        error => console.log(error),
        () => console.log('Personaje cargado')
      )
  }

}
