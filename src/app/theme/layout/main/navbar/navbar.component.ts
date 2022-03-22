
import { NavbarService } from './navbar.service';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mountain:number = 200
  value:number=0
  state:boolean=false
  cor:boolean = true
  description:string=' '
  icon:string='+'
  produto:string=''

  hideValues(event:any){
   event._currentIconFetch.closed
    console.log(event)
  }
  
  send(value:any,desc:any){
    this.description = desc
    this.value = value
    this.produto = this.description
    this.state?this.mountain-=this.value:this.mountain+=Number(this.value)
    this.navbarService.getDatas(this.value,this.description)
  }
  toggleChanges(event: MatSlideToggleChange){
    this.state = event.checked
    this.state?this.icon='-':this.icon='+'
    
  }
  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {

  }

}
