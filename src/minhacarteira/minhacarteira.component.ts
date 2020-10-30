import { formatNumber } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../bitcoin.service';

@Component({
  selector: 'app-minhacarteira',
  templateUrl: './minhacarteira.component.html',
  styleUrls: ['./minhacarteira.component.css']
})
export class MinhacarteiraComponent implements OnInit {
  valor_carteira = 1000;

  constructor(public bitcoinService: BitcoinService) { }

  ngOnInit() {
    this.update();
  }

  update(){
    this.bitcoinService.update();
  }

  getPrice(){
    return this.bitcoinService.currentPrice;
  }

  comprarBitcoin(){
    this.valor_carteira += 50;
    this.update();
  }

  venderBitcoin(){
    this.valor_carteira -= 50;
  }

}