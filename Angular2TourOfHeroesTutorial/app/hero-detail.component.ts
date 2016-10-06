import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';

import { Hero } from './hero';



@Component({
    moduleId : module.id,
    selector : 'my-hero-detail',
    template : `<div *ngIf="hero">
                       <h2>{{hero.name}} details!</h2>
                       <div><label>id:</label>{{hero.id}}</div>
                       <div>
                           <label>name: </label>
                           <input [(ngModel)]="hero.name" paceholder="name" />
                       </div>
                       <button (click)="goBack()">Back</button> 
                       <button (click)="save()">Save</button>
                   </div>`,
    styleUrls : [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit{
    @Input() //To bedzie parametr wejściowy z componentu AppComponent przekazywany w sekcji template "<my-hero-detail [hero]="selectedHero"></my-hero-detail>"
    hero : Hero;
    
    constructor(
            private heroService: HeroService,
            private route: ActivatedRoute,
            private location: Location
    ) {}
    
    ngOnInit() : void{
      this.route.params.forEach((params: Params) => {
          let id = +params['id']; // + - konweruje w tym przypadku do let ktory jest liczbą
          this.heroService.getHero(id).then(hero => this.hero = hero);
      });  
    }
    
    //metoda cofa nas do poprzedniej lokalizacji. Przy powaznych aplikacjach trzeba na to uważać i stosować CanDeactivate
    goBack(): void {
        this.location.back();
    }
    
    save() : void{
        this.heroService.update(this.hero).then(() => this.goBack());
    }
    
}


//[Instrukcja warunkowa] - *ngIf="warunek"