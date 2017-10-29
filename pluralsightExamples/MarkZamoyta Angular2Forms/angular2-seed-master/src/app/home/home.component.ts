import {Component} from '@angular/core';
import { IEmployee } from '../model/employee.model';
import { FormPoster } from '../services/form-poster.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

    startDate: Date;
    minDate: Date = new Date('November 10 2017'); 
    //startTime= new Date('Oct 29 2017 3:00 PM');
    startTime: Date;
    onOffSwitch = "On";
    postRating = 5;


    languages = [];
    hasPrimaryLanguageError: boolean = false;
    model : IEmployee = {
        firstName:"Mateusz",
        lastName: "Smith",
        isFullTime: true,
        paymentType: 'w2',
        primaryLanguage: "default"
    };

    constructor(private _formPoster: FormPoster){
       this._formPoster.getLanguages()
                       .subscribe(data => this.languages = data.languages,
                                  err => console.log("get error: ", err)); 
    }

    submitForm(form: NgForm){
        console.log("Model: " , this.model);
        console.log("Form: ", form.value);
        //validate form
        this.validatePrimaryLanguage(this.model.primaryLanguage);
        if(this.hasPrimaryLanguageError)
            return;
        this._formPoster.postEmployeeForm(this.model)
                .subscribe(data => console.log("succes:",data), err => console.log("error:",err));
    }

    firstSignToUpperCase(value:string){
        if(value.length >0){
            this.model.lastName = value.charAt(0).toUpperCase() + value.slice(1);
        }
        else{
            this.model.lastName = "";
        }
    }

    validatePrimaryLanguage(value){
        console.log("Lang: " + value);
        this.hasPrimaryLanguageError = value === 'default' ? true : false;
    }

    leave(value){
        console.log("Leave: ", value);
    }
    hover(value){
        console.log("Hover: ", value);
;    }
}
