import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable() //TypeScript emituje metadane na temat serwisu
export class HeroService {
    private heroesUrl = 'app/heroes'; //Url dla Web api 
    private headers = new Headers( { 'Content-Type': 'application/json' });

    constructor( private http: Http ) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get( this.heroesUrl ).toPromise().then( response => response.json().data as Hero[] );
        //return Promise.resolve(HEROES); //Promise w tym przypadku imituje metode asynchroniczną(Promis przyda się kiedy będziemy musieli poczekać na(opóźnione) dane z serwera)
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>( resolve =>
            setTimeout( resolve, 2000 ) ) // Opóźnienie 2s
            .then(() => this.getHeroes() );
    }
    getHero( id: number ): Promise<Hero> {
        return this.getHeroes().then( heroes => heroes.find( hero => hero.id === id ) );
    }

    create( name: String ): Promise<Hero> {
        return this.http.post( this.heroesUrl, JSON.stringify( { name: name }), { headers: this.headers }).toPromise().then( res => res.json().data ).catch( this.handleError );
    }

    update( hero: Hero ): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;
        return this.http.put( url, JSON.stringify( hero ), { headers: this.headers }).toPromise().then(() => hero ).catch( this.handleError )
    }

    delete( id: number ): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete( url, { headers: this.headers }).toPromise().then(() => null ).catch( this.handleError );
    }

    private handleError( error: any ): Promise<any> {
        console.error( 'An error occured', error ); //tylko od celów demonstracyjny
        return Promise.reject( error.message || error );
    }
}

