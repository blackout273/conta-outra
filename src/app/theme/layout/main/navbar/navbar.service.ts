import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  saveSearch: Array<string>=[]
  
  
 getDatas(icone:string,value:any,desc:any,mountain:any){
   const payload = JSON.stringify({valor:`${icone} R$${value}`,Produto:desc,Montante:`R$${mountain}`})
   if (value>0 || value<0){
    
    this.saveSearch.push(payload);
    (async ()=>{
      await fetch('http://127.0.0.1:8002/test',{
        method:'POST',
        body:payload,
        headers:{
          "Content-type":'application/json'
        }
      })
      .then(rcv => rcv.json())
      // .then(result => {return result})
    })()
    
   }
  
 }
 comeback(){
   const data = async ()=>{
    return await fetch('http://127.0.0.1:8002/test')
    .then(rcv => rcv.json())
    .then((result) =>{return result} )
  }
  return data()
 }


}
