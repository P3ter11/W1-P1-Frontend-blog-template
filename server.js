import express from "express";
import { config } from "dotenv";
import  mongoose  from "mongoose";
import { testRoute } from "./services/routes/test.route.js";
import { apiRoute } from "./services/routes/api.route.js";

//Inizializzazione dei file .env
config();

const PORT = process.env.PORT || 3001;

//Creazione del server
const app = express();

app.use(express.json()); //permette di gestire i file json

//Importa Routes
app.use("/test", testRoute);
app.use("/api", apiRoute);

//Esegue una chiamata post all'indirizzo e ritorna i parametri del body (fatto con postman)
apiRoute.post("/", async (req, res) =>{
    res.send(JSON.stringify(req.body));
});

//Esegue una chiamata post del nome passato nell'url e ritorna il nome
apiRoute.post("/:name", async (req, res) =>{
    res.send(req.params.name);
});


const initServer = async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("connesso al server");

        //Abilita server
        app.listen(PORT, () => {
            console.log("Il nostro server è in ascolto alla porta: "+PORT);
        });
    } catch (error) {
        console.error("Errore di connessione", error);
    }
}

initServer();