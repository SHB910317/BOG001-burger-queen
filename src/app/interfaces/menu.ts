export interface MenuItem {
    id: string;
    typeFood: string;
    name: string;
    price: number;
    image: string;
    quantity:number;
    Additions:AddItem[];
};
export interface Menu{
    menu: MenuItem[];
}
export interface NewMenuItem{
    id: any,
    image: string,
    name: string,
    price: number,
    option: string,
    Additions:{
        egg: boolean,
        cheese: boolean,
        price:number
    }
   
}

export interface AddItem{
    add: string,
    price: number
    image: string
}
/* interface Option{
    options: OptionItem[]
}
interface OptionItem{
    option: string,
    image: string
}
 */
