"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const not_found_js_1 = require("./middleware/not-found.ts");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use(express_1.default.json());
app.use(not_found_js_1.notFound);
const port = process.env.PORT || 3000;
const start_server = async () => {
    try {
        await prisma.$connect();
        console.log("Connected to the database");
        app.listen(port, () => {
            console.log(`The server is listening on localhost:${port}`);
        });
    }
    catch (e) {
        console.error("Error connecting to the database: ", e);
        process.exit(1);
    }
};
start_server().then(() => "Happy coding 😄");
//# sourceMappingURL=app.js.map