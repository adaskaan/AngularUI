export class Category{
    id!: number;
    name!: string;
    
    public toString = () : string => {
        return this.name;
    }
}