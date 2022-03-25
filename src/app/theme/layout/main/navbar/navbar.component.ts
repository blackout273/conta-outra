
import { NavbarService } from './navbar.service';
import { MatSlideToggleChange, MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mountain: number = 0
  value: number = 0
  state: boolean = false
  cor: boolean = true
  description: string = '...'
  icon: string = '+'
  defaultValue:string = ''
  refreshed:string='0'

  KeyDown(event:KeyboardEvent){
    this.refreshed= (<HTMLInputElement>event.target).value
  }
 
  send(value: any, desc: any) {
    this.description = !desc && value?desc='miscellaneous':desc=desc
    this.value = value>0 || value<0? value : 0
    this.state ? this.mountain -= this.value : this.mountain += Number(this.value)
    this.navbarService.getDatas(this.icon,this.value, this.description,this.mountain)
    
  }
  toggleChanges(event: MatSlideToggleChange) {
    this.state = event.checked
    this.state ? this.icon = '-' : this.icon = '+'
  }
  
  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {

  }

}
