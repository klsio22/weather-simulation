"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/previsao-do-tempo', async (req, res) => {
    const { city } = req.query;
    try {
        const response = await axios_1.default.get(`https://api.openweathermap.org/data/2.5/weather?appid=${process.env.API_KEY}&q=${city}&units=metric&lang=pt_br`);
        return res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
app.get('/', (req, res) => {
    res.json('Hello World!');
});
app.listen(port, () => {
    console.log(`Backend rodando na porta ${port}`);
});
