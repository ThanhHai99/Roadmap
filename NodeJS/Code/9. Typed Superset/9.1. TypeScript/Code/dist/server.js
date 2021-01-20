"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
let app = express_1.default();
let server = http_1.default.createServer(app);
app.get("/", (req, res) => {
    res.send("Home page !!!");
});
let port = process.env.PORT || 1999;
server.listen(port, () => {
    console.log(`Server running at port: ${port}`);
});
//# sourceMappingURL=server.js.map