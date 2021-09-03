import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DashItems } from './DashItems';

@Injectable({
  providedIn: 'root'
})
export class DashItemsServiceService {

  constructor(private http:HttpClient) { }

  url:any='http://localhost:8090/DashItems'

  getDashItems(){
    return this.http.get<any>(this.url+'/getItems');
  }

  AddItem(itm:DashItems){
    return this.http.post(this.url+'/addItem',itm);

  }

  deleteItem(id:number){
    return this.http.delete(this.url+'/deleteItem/'+id)
  }

  updateItem(itm:any){
    return this.http.put(this.url+'/updateItem',itm)

  }

  ////////////////////////////////////////////////////////


  AddGraphItem(itm:any, id:number){
    return this.http.post('http://localhost:8090//graf/add/'+id,itm);

  }

  ////////////////////////////////////////////////////////

  GetALLOptions(){
   
    return this.http.get<any>('http://localhost:8090/barChartOptions/getall');
  }

  AddBarChartOpt(optItm:any,id:number){

    return this.http.post<any>('http://localhost:8090/barChartOptions/addItem/'+id,optItm)
  }
}
