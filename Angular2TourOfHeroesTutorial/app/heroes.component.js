"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var hero_service_1 = require('./hero.service');
var HeroesComponent = (function () {
    function HeroesComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
        this.title = 'Tour of Heroes';
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; }); //pobieramy z serwisu dane które są obiektem Promise<Hero[]> dlatego mamy funkcje then(clalback) 
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        var link = ['/detail', this.selectedHero.id];
        this.router.navigate(link);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name).then(function (hero) { _this.heroes.push(hero); _this.selectedHero = null; });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService.delete(hero.id).then(function () { _this.heroes = _this.heroes.filter(function (h) { return h !== hero; }); if (_this.selectedHero === hero) {
            _this.selectedHero = null;
        } });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-heroes',
            templateUrl: 'heroes.component.html',
            styleUrls: ['heroes.component.css'],
            providers: [hero_service_1.HeroService] //Tutaj dodajemy serwisy. Angular wtedy tworzy świeże instancje tych obiektów w trakcie tworzenia obiektu AppComponent.
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//[Two-Way data binding] -  [(ngModel)] - zastępując parametr value tym znacznikiem mamy pewność ze kiedy zmieni się wartość pola name obiektu hero, zmiana ta będzie widoczna wszędzie
//gdzie zostało użyte to pole
//[One_way data binding] - {{}} - w typ polu będzie jakiś parametr np z klasy. Widać działanie powyżej w sekcji template
//[ES2015] - `` - użyte w sekcji template, aby kod był czytelny
//[Iterowanie po tablicy] - *ngFor="let hero of heroes" - zastosowanie na elemencie ozancza ze cały blok będzie powtarzany tyle razy ile jest elementów w tablicy
//[Przykładowe zdarzenie] - (click)="onSelect(hero)" - kliknięcie na obiekt który zawiera taki atrybut spowoduje uaktywnienie metody AppComponent.onSelect na obiekcie hero 
//[Podświetlanie wybranego elementu z listy] - [class.selected]="hero === selectedHero" - do zastosowania w komponencie, który chcemy podświetlić, wyróżnić
//# sourceMappingURL=heroes.component.js.map