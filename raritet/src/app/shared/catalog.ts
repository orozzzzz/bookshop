export class Catalog {
    id_genre: number;
    name_genre: string;

    constructor(id_genre: number, name_genre: string) {
        this.id_genre = id_genre;
        this.name_genre = name_genre;
    }
}
export class Items {
    id: number;
    name: string;
    author: string;
    pic: string;
    ph: string;
    year: number;
    annotation: string;
    price: number;

    constructor(id: number, name: string, author: string, pic: string, ph: string, year: number, annotation: string, price: number) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.pic = pic;
        this.ph = ph;
        this.year = year;
        this.annotation = annotation;
        this.price = price;
    }
}
