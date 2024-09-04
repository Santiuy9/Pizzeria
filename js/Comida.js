export class Comida {
    constructor(nombre, precio, ingredientes, imagenPath) {
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.imagenPath = imagenPath
    }

    agregarIngrediente(ingrediente) {
        this.ingredientes.push(ingrediente)
    }

    eliminarIngrediente(ingrediente) {
        this.ingredientes = this.ingredientes.filter(ing => ing !== ingrediente);
    }

    obtenerDetalles() {
        return `Nombre: ${this.nombre}\nPrecio: $${this.precio}\nIngredientes: ${ingredientes.join(', ')}`
    }
}