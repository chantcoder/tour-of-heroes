import { Component } from '@angular/core';
import { Heroes } from './interfaces/heroes-interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  objHeroes = new Heroes();
  ngOnInit(): void {
  }
  title = 'tour-of-heroes';

  heroes: any[] = [{
    id:1,
    title: 'Hero 1',
    bg_Color: 'bg-primary',
    common: 'p-2 text-white fw-bold mx-1 text-center '
  },
  {
    id:2,
    title: 'Hero 2',
    bg_Color: 'bg-secondary',
    common: 'p-2 text-white fw-bold mx-1 text-center '
  },
  {
    id:3,
    title: 'Hero 3',
    bg_Color: 'bg-warning',
    common: 'p-2 text-white fw-bold mx-1 text-center '
  },
  {
    id:4,
    title: 'Hero 4',
    bg_Color: 'bg-danger',
    common: 'p-2 text-white fw-bold mx-1 text-center '
  },]

  initSelection(event:any){
    //alert(event.target.value)
    if(event.target.value == 'D'){
      this.objHeroes.dashboard = 'D';
    }else if(event.target.value == 'H'){
      this.objHeroes.dashboard = 'H';
    }
  }

  editHeroes:boolean = false;
  selectedHero!:string;
  editClicked(data:any){
    this.editHeroes = true;
    this.selectedHero = data.title;
    this.objHeroes.heroes_id = data.id;
    this.objHeroes.hero_name = data.title;
  }

  // heroesBackClicked
  heroesBackClicked(){
    this.editHeroes = false;
    this.objHeroes = new Heroes();
    this.objHeroes.dashboard = 'D';
  }

  // editHeroesEvent
  editHeroesEvent(){
    alert(this.objHeroes.hero_name);
    
   let data =  this.heroes.filter(x => this.heroes.indexOf(x.id == this.objHeroes.heroes_id));
    console.log(data);
    console.log('index',data)
  }

}
