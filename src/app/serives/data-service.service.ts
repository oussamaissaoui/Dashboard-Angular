import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Url } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  options= {
    Headers: new HttpHeaders({
      'Content-Type':'application/json',
      Authorization:'Basic'+ btoa('user'+':'+'password')
    }),
    params:new HttpParams()
  }

  constructor(private http:HttpClient) { }

  
 

  url:any;

  readData(ur:any, user:any,password:any){

    

    let uurl=ur;

    return this.http.get<any>(uurl);

  }

  loginuert(ur:string, user:any){


    let options= {
      Headers: new HttpHeaders({
        'Content-Type':'application/json',
        Authorization:'Basic'+ btoa(user.email+':'+user.password)
      }),
      params:new HttpParams()
    }

    let   Headers= new HttpHeaders({
      'Content-Type':'application/json',
      Authorization:'Basic'+ btoa(user.email+':'+user.password)
    });

    console.log(user)
    return this.http.post<any>(ur,user);

  }


  /////////////////////////////////////////////////////


  getSeriesData(url:string){

    return this.http.get(url)
  }
}


