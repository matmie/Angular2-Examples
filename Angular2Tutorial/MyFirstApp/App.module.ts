/*Punkt wyjściowy całej aplikacji w folderze MyFirstApp*/

import { NgModule }      from '@angular/core';  
import { BrowserModule } from '@angular/platform-browser';

import { MyFirstAppComponent } from './MyFirstApp.component'; //Import komponentu zdefiniowanego w folderze projektu
import { ParagraphTextComponent } from './ParagraphText/paragraphtext.component';
import {Testh7Component} from './Testh7.component';

@NgModule({ //Ta adnotacja określa co aktualnie definiuje moduł
  imports:      [ BrowserModule], //Dyrektywa import pozwala pobrać inne moduły
  declarations: [ MyFirstAppComponent, Testh7Component, ParagraphTextComponent ], //Deklarujemy komponenty, "directives", "pipes"
  bootstrap:    [ MyFirstAppComponent, Testh7Component, ParagraphTextComponent ],
  providers: [] //Załączamy serwisy
})
export class AppModule { } 

//Kiedy angular parsuje dokument HTML szuka listy komponentów, "directives", "pipes". Moduły posiadają te informacje w jednym miejscu. Moduły grupują 
//powiązane funkcjonalności

//Każda aplikacja angula2 ma tylko jeden główny(root) moduł

//Ten moduł jest modułem głównym aplikacji i ma ustaloną konwencjonalnie nazwę "AppModule"