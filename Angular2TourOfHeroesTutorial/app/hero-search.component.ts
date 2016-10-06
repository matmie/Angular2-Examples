import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { HeroSearchService } from './hero-search.service';
import { Hero }              from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-search',
    templateUrl: 'hero-search.component.html',
    styleUrls: [ 'hero-search.component.css' ],
    providers: [HeroSearchService]
    
})

export class HeroSearchComponent implements OnInit {
    heroes: Observable<Hero[]>; 
    private searchTerms = new Subject<string>();
    
    constructor(private heroSearchService: HeroSearchService,
                private router: Router){
        
    }
    
    //Dodaj termin wyszukiwania do obiektu Subject
    search(term:string): void{
        this.searchTerms.next(term);
    }
    
    ngOnInit(): void {
        this.heroes = this.searchTerms
        .debounceTime(300) //poczekaj 300 ms na evencie
        .distinctUntilChanged() //ignoruj jezeli nastepne wyszukiwanie jest takie same jak poprzednie
        .switchMap(term => term //przełącz 
                   ? this.heroSearchService.search(term) //zwroc http zwrotke 
                   : Observable.of<Hero[]>([])) //lub pusta tablice
                   .catch(error => 
                                  { 
                                      
                                      //TODO: real error handling
                                      console.log(error); 
                                      return Observable.of<Hero[]>([])
                                    });
    }
    
    gotoDetail(hero: Hero): void {
       let link = ['/detail', hero.id];
       this.router.navigate(link);
    }
    
    
}