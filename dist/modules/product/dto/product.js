"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const app = (0, express_1.default)();
const PORT = 5000;
app.get('/api/products', (req, res) => {
    const rawdata = fs_1.default.readFileSync('product_details.json');
    const products = JSON.parse(rawdata.toString());
    setTimeout(() => {
        res.json(products);
    }, 2000);
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
//# sourceMappingURL=product.js.map