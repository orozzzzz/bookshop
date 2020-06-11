import { Component, OnInit } from '@angular/core';
import { Basket, Info } from '../shared/basket';

import { HttpService } from '../shared/http.service';
@Component({
    selector: 'app-basket',
    templateUrl: './basket.component.html',
    styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
    basket: Basket[];
    info: Info[];

    constructor(private httpService: HttpService) { }
    ngOnInit() {
        this.basket = this.httpService.getBasket();
        this.info = this.httpService.Info();
    }
    Item(num: number, func: number, n: number) {

        if (func == 2) {
            this.httpService.Item(num, func);
            this.basket[n].count++;
            this.info[0].total_count++;
            this.info[0].total_price = Number(this.info[0].total_price) + Number(this.basket[n].price);
        }
        if (func == 3) {

            if (this.basket[n].count > 1) {
                this.httpService.Item(num, func);
                this.basket[n].count--;
                this.info[0].total_count--;
                this.info[0].total_price -= this.basket[n].price;
            }
        }
        if (func == 4) {
            this.httpService.Item(num, func);
            this.info[0].total_price -= this.basket[n].count * this.basket[n].price;
            this.info[0].total_count -= this.basket[n].count;
            this.basket.splice(n, 1);
        }
    }





}
