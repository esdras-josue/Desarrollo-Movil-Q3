import { createContext } from "react";
import { Producto } from "../models/Producto";

export const ProductoContext = createContext({
    getProductos: () => {},
    guardarProducto: (producto: Producto) => {},
    eliminarProducto: (id: number) => {},
});