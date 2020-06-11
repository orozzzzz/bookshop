export class Basket {
    name: string;
    author: string;
    pic: string;
    price: number;
    count: number;
    id: number;


    constructor(name: string, author: string, pic: "", price: number, count: number, id: number) {
        this.name = name;
        this.author = author;
        this.pic = pic;
        this.price = price;
        this.count = count;
        this.id = id;
    }
}

export class Info {
    total_price: number;
    total_count: number;

    constructor(total_price: number, total_count: number) {
        this.total_price = total_price;
        this.total_count = total_count;
    }
}
