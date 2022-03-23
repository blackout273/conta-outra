import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  saveSearch: Array<string>=[]
  data:Date = new Date()
 getDatas(value:any,desc:any){
   desc = !desc?desc='miscellaneous':desc=desc
   if (value>0){
    const payload = JSON.stringify({'valor':value,'Produto':desc,'Date':this.data})
    this.saveSearch.push(payload)
    console.log(this.saveSearch)
   }
   else if (value<0){
    const payload = JSON.stringify({'valor':value,'Produto':desc,'Date':this.data})
    this.saveSearch.push(payload)
    console.log(this.saveSearch)
   }
   
 }
}

