import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Catalog, Items } from './catalog';
import { Basket, Info } from './basket';



@Injectable()
export class HttpService {
    items: Items[];
    basket: Basket[];
    catalog: Catalog[];
    info: Info[];
    constructor(private http: HttpClient) {
        this.items = [];
        this.basket = [];
        this.catalog = [];
        this.info = [];
    }
    Info = (): Info[] => {
        this.http.get('http://localhost/info.php/').pipe(map(resp => resp))
            .subscribe((resp: Response) => {
                if (this.info.length == 0) {
                    for (const index in resp) {
                        const info1: Info = new Info(resp[index].total_price, resp[index].total_count);
                        this.info.push(info1);
                    }
                }
            });
        return this.info;
    }
    Item(num: number, func: number) {
        this.http.get('http://localhost/item.php/?id=' + num + '&func=' + func).subscribe((data: string) => {
            if (data == '1') {
                alert("Товар уже находится в корзине");
            }
            if (data == '2') {
                alert('Товар добавлен в корзину');
            }

        })
    }

    getCatalog = (): Catalog[] => {
        this.http.get('http://localhost/catalog.php').pipe(map(resp => resp))
            .subscribe((resp: Response) => {
                if (this.catalog.length == 0) {
                    for (const index in resp) {
                        const cat1: Catalog = new Catalog(resp[index].id_genre, resp[index].name_genre);
                        this.catalog.push(cat1);
                    }
                }
            });
        return this.catalog;
    }

    getBasket = (): Basket[] => {
        this.http.get('http://localhost/basket.php').pipe(map(resp => resp))
            .subscribe((resp: Response) => {
                if (this.basket.length == 0)
                    for (const index in resp) {
                        const basket1: Basket = new Basket(resp[index].name, resp[index].author, resp[index].pic, resp[index].price, resp[index].count, resp[index].id);
                        this.basket.push(basket1);
                    }
                else {
                    var i = 0;
                    while (i < this.basket.length) {
                        this.basket.splice(i);
                        i++;
                    }
                    for (const index in resp) {
                        const basket1: Basket = new Basket(resp[index].name, resp[index].author, resp[index].pic, resp[index].price, resp[index].count, resp[index].id);
                        this.basket.push(basket1);
                    }
                }
            });
        return this.basket;
    }

    getItems = (gid: number): Items[] => {
        this.http.get('http://localhost/items.php/?gid=' + gid).pipe(map(resp => resp))
            .subscribe((resp: Response) => {
                if (this.items.length == 0)
                    for (const index in resp) {
                        const items1: Items = new Items(resp[index].id, resp[index].name, resp[index].author, resp[index].pic, resp[index].ph, resp[index].year, resp[index].annotation, resp[index].price);
                        this.items.push(items1);
                    }
                else {
                    var i = 0;
                    while (i < this.items.length) {
                        this.items.splice(i);
                        i++;
                    }
                    for (const index in resp) {
                        const items1: Items = new Items(resp[index].id, resp[index].name, resp[index].author, resp[index].pic, resp[index].ph, resp[index].year, resp[index].annotation, resp[index].price);
                        this.items.push(items1);
                    }
                }
            });
        return this.items;
    }



}