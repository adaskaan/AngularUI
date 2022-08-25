export class Category{
    id!: number;
    categoryName!: string;

    public toString = () : string => {
        return this.categoryName;
    }
}