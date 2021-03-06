import mongoose from 'mongoose'
import DB_Mongo from './DB_Mongo.js'

//------------------------------------
// ESQUEMA DEL DOCUMNETO CARRITO

const carritoSchema = mongoose.Schema({
    carrito: Array
})

/// MODELO DEL DOCUMENTO ALMACENADO EN UNA COLECCION 


const CarritoModel = mongoose.model('carritos', carritoSchema)


/* CRUD: CREATE, READ, UPDATE, DELETE*/


class CarritoModelMongoDB {
    /* -------- CRUD: Create -------  */
    async createCarrito(carrito) {
        if(!DB_Mongo.conexionOk) return {}
        
        try {
            const carritoSave = new CarritoModel({carrito: carrito})
            await carritoSave.save()

            return carrito
        }
        catch(error) {
            console.log(`Error en createCarrito: ${error.message}`)
            return {}
        }
    }
}

export default CarritoModelMongoDB