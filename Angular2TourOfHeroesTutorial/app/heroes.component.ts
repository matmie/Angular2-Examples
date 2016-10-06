import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';

import { HeroService } from './hero.service';

@Component({
        moduleId: module.id,
        selector: 'my-heroes',
        templateUrl: 'heroes.component.html',
        styleUrls : ['heroes.component.css' ], //Te style będą widoczne tylko w tym komponencie
        providers : [HeroService] //Tutaj dodajemy serwisy. Angular wtedy tworzy świeże instancje tych obiektów w trakcie tworzenia obiektu AppComponent.
                                   //Każdy komponent-dziecko tego komponentu bedzie mógł wykorzystywać te rzeczy. 
})                      

export class HeroesComponent implements OnInit{ //OnInit jak sama nazwa mówi określa zachowanie komponentu podczas jego inicjalizacji
    title = 'Tour of Heroes'; 
    selectedHero: Hero; 
    heroes: Hero[];
    
    ngOnInit(): void{ //Metoda z interfejsu OnInit uruchamiana podczas inicjalizacji komponentu
        this.getHeroes();
    }
    
    constructor(private heroService: HeroService,
                private router: Router){ //Konstruktor, który tworzy i inicjalizuje prywatną zmienną która jest serwisem HeroService
    }
    
    getHeroes(): void {
       this.heroService.getHeroes().then(heroes => this.heroes = heroes); //pobieramy z serwisu dane które są obiektem Promise<Hero[]> dlatego mamy funkcje then(clalback) 
    }
    
    onSelect(hero: Hero):void {
        this.selectedHero = hero;
    }
    
    gotoDetail(): void {
        let link = ['/detail', this.selectedHero.id];
        this.router.navigate(link);
    }
    
    add(name: String): void {
        name = name.trim();
        if(!name) { return; }
        this.heroService.create(name).then(hero => { this.heroes.push(hero); this.selectedHero = null; });
    }
    
    delete(hero: Hero): void{
        this.heroService.delete(hero.id).then(() => {this.heroes = this.heroes.filter(h => h !== hero); if(this.selectedHero === hero) {this.selectedHero = null;}});
    }
}

//[Two-Way data binding] -  [(ngModel)] - zastępując parametr value tym znacznikiem mamy pewność ze kiedy zmieni się wartość pola name obiektu hero, zmiana ta będzie widoczna wszędzie
//gdzie zostało użyte to pole


//[One_way data binding] - {{}} - w typ polu będzie jakiś parametr np z klasy. Widać działanie powyżej w sekcji template


//[ES2015] - `` - użyte w sekcji template, aby kod był czytelny

//[Iterowanie po tablicy] - *ngFor="let hero of heroes" - zastosowanie na elemencie ozancza ze cały blok będzie powtarzany tyle razy ile jest elementów w tablicy

//[Przykładowe zdarzenie] - (click)="onSelect(hero)" - kliknięcie na obiekt który zawiera taki atrybut spowoduje uaktywnienie metody AppComponent.onSelect na obiekcie hero 

//[Podświetlanie wybranego elementu z listy] - [class.selected]="hero === selectedHero" - do zastosowania w komponencie, który chcemy podświetlić, wyróżnić


