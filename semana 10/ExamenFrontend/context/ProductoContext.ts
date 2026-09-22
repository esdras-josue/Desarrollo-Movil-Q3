import { createContext } from "react";
import { Producto } from '../models/Producto';

export const ProductoContext = createContext({
    listaProductos: [] as  Producto[],
    getProductos: () => {},
    guardarProducto: (producto: Producto) => {},
    eliminarProducto: (id: number) => {},
});