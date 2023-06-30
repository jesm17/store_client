export interface Product  {
    name: string;
    cost: number;
    categories: string[] | number[];
    image: string | null | File;
}