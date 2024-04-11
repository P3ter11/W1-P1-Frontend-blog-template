import { Schema, model } from "mongoose";

const authorSchema = new Schema(
    {
        nome: {
            type: String,
            required: true
        },

        cognome: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        data_di_nascita: {
            type: String,
            required: true
        },

        avatar: {
            type: String,
            required: true
        }

    },
    {
        collection: "authors",
    }
)

//Esportiamo il modello User che rispecchi lo schema userSchema
export default model("Authors", authorSchema);