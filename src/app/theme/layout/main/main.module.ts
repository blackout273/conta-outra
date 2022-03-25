
import { RouterModule } from '@angular/router';
import { NavbarService } from './navbar/navbar.service';
import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon'
import { MatSlideToggleModule } from '@angular/material/slide-toggle'

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent

    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSlideToggleModule,
    RouterModule
    

  ],
  providers: [
    NavbarService,CurrencyPipe
  ]

})
export class MainModule { }

