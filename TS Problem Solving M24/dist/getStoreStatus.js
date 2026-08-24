"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Problem 2
const getStockStatus = (stock) => {
    if (stock === 0) {
        return 'Out of Stock';
    }
    else if (stock >= 1 && stock <= 5) {
        return 'Almost Sold Out';
    }
    else if (stock >= 6 && stock <= 20) {
        return 'Available';
    }
    return 'In Stock';
};
//# sourceMappingURL=getStoreStatus.js.map