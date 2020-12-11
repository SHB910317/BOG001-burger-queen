export interface MenuItem {
    id: string;
    typeFood: string;
    name: string;
    price: number;
    image: string;
};
export interface Menu{
    menu: MenuItem[];
}
export interface ItemPedido{
    name: string;
    price: number;
    image: string;
}
export interface SummaryPedido{
    menu: ItemPedido[];
}
