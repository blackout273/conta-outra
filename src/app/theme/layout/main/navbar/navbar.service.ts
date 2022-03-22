import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  
 getDatas(value:any,desc:any){
   console.log(JSON.stringify({'valor':value,'Produto':desc}))
 }
}

