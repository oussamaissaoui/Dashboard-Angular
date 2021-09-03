import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private addwidget=new Subject<any>();
  recievedWidget$=this.addwidget.asObservable();


  private addwidgetFromdash=new Subject<any>();
  recievedWidgetFromdash$=this.addwidgetFromdash.asObservable();

  constructor() { }

  addWid(wid:any){
   this.addwidget.next(wid);
  }

  addwidFromdash(wid:any){
    this.addwidgetFromdash.next(wid);
  }
   

  
}
