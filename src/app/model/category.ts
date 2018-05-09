export class Category {

    id: String;
    name: String;
    subCategories: Category[];

    constructor(private catName: String) {
        this.name = catName;
        this.id = '';
        this.subCategories = [];
     }

}
