export const productList:Product[] = [
    {id:1, name: 'Lavandina', price: 10, description: 'Botella de 1 Litro'},
    {id:2, name: 'Detergente', price: 30,description: 'Dura de 120 lavadas'},
    {id:3, name: 'Limpia vidrios', price: 100,description: 'Sin esfuerzo'},
    {id:4, name: 'Quita grasa', price: 70,description: 'Para motores'},
    {id:5, name: 'perfume', price: 1}

]

export interface Product {
    id: number;
    name: string;
    price: number;
    description?: string;
}