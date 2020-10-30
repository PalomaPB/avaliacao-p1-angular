import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { BitcoinComponent } from '../bitcoin/bitcoin.component';
import { MinhacarteiraComponent } from '../minhacarteira/minhacarteira.component';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinService } from '../bitcoin.service';
import { CommonModule } from '@angular/common';

@NgModule({
  imports:      [ 
    BrowserModule, 
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    RouterModule.forRoot([
      {path:'bitcoin', component: BitcoinComponent},
      {path:'carteira', component: MinhacarteiraComponent}
    ]) ],
  declarations: [ AppComponent, HelloComponent, BitcoinComponent, MinhacarteiraComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ BitcoinService ]
})
export class AppModule { }
