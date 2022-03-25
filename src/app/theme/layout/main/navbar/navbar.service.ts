import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  saveSearch: Array<string>=[]
  
  
 getDatas(icone:string,value:any,desc:any,mountain:any){
   const data = new Date()
   const zone = 3*60
   data.setMinutes(data.getMinutes()*zone)
   desc = !desc?desc='miscellaneous':desc=desc //Esta Linha pode ser apagada
   const payload = JSON.stringify({valor:`${icone} R$${value}`,Produto:desc,Montante:`R$${mountain}`,Date:data})
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
      .then(result => console.log(result))
    })()
   }
   
   
 }
}

