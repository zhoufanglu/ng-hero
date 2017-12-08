import {Component} from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <h1>{{title}}</h1>
    <div>
      <label>nowName:</label>
      <span>{{hero.name}}</span>
    </div>
    <div>
      <span>pse write name↓</span>
      <label for = "name">name:</label>
      <input id = "name" type="text" placeholder="name" [(ngModel)]="hero.name">
    </div>
    <hr>
    <ul class="heroes">
      <li *ngFor="let hero of heroes">
        <span id = "{{hero.id}}">{{hero.name}}</span>
      </li>
    </ul>
  `
})
export class AppComponent {
  title = 'Tour of Heroes by Tog';
  hero: Hero = {
    id: 1,
    name: 'lfz'
  };
  heroes = HEROES;
}
const HEROES:  Hero[] = [
  {id: 1, name: '11'},
  {id: 2, name: '22'},
  {id: 3, name: '33'},
  {id: 4, name: '44'},
  {id: 5, name: '55'},
  {id: 6, name: '66'},
  {id: 7, name: '77'},
  {id: 8, name: '88'},
  {id: 9, name: '99'},
  {id: 10, name: '1010'}
];



