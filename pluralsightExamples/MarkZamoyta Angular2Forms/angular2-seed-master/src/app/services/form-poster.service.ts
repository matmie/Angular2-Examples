import { Injectable } from "@angular/core";
import { IEmployee } from "../model/employee.model";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FormPoster {
    
    constructor(private _http: Http){

    }

    extractData(res:Response){
        let body = res.json();
        return body.data || {};
    }

    extractLanguages(res:Response){
        let body = res.json();
        return body.data || {};
    }

    handleError(error: any){
        console.error("post error: ", error);
        return Observable.throw(error.statusText);
    }

    getLanguages(): Observable<any> {
        return this._http.get('http://localhost:3100/getlanguages')
                         .delay(5000)
                         .map(this.extractLanguages)
                         .catch(this.handleError);
    }

    postEmployeeForm(employee: IEmployee): Observable<any>{
        console.log('posting employee: ', employee);
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers:headers});

        return this._http.post('http://localhost:3100/postemloyee', body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
    };
}
