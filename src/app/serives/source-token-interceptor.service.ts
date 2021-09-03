import { Injectable } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http'
import { DataServiceService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class SourceTokenInterceptorService implements HttpInterceptor {


  
  constructor(private tkserv:DataServiceService) { }

  token:any=this.tkserv.loginuert;
  tokenvalue=this.token.access_token;


  tkk=localStorage.getItem("token")

  intercept(req,next){
    
    let reqwithToken= req.clone(
      {
       // setHeaders:{
         // Authorization: `Bearer ${this.tkk}`
       // }
      }
    )

    return next.handle(reqwithToken)
  }
}
