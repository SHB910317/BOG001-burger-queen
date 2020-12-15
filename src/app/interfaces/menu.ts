export interface MenuItem {
    id: string;
    typeFood: string;
    name: string;
    price: number;
    image: string;
};
export interface Menu{
    menu: MenuItem[];
};

export interface NewBurguer{
    id: string,
    image:string,
    name: string,
    price: number,
    Modal: boolean,
	option: string,
    Additions:
        {
            add: string,
            price: number,
        },
}
