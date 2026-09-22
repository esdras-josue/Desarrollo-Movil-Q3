export interface Producto {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    estado: 'Disponible' | 'No disponible';
    categoria: string;
    fotografia_url: string | null;
}