const onlineStore = {
    isProductAvailable(product, stockQuantity) {
        if (typeof product !== "string" || typeof stockQuantity !== "number") {
            throw new Error("Invalid input.");
        }

        if (stockQuantity <= 0) {
            return `Sorry, ${product} is currently out of stock.`;
        } else {
            return `Great! ${product} is available for purchase.`;
        }
    },
    canAffordProduct(productPrice, accountBalance) {
        if (typeof productPrice !== "number" || typeof accountBalance !== "number") {
            throw new Error("Invalid input.");
        }

        let remainingBalance = accountBalance - productPrice;

        if (remainingBalance < 0) {
            return "You don't have sufficient funds to buy this product.";
        } else {
            return `Product purchased. Your remaining balance is $${remainingBalance}.`;
        }
    },
    getRecommendedProducts(productList, category) {
        let recommendedProducts = [];

        if (!Array.isArray(productList) || typeof category !== "string") {
            throw new Error("Invalid input.");
        }

        productList.forEach((product) => {
            if (product.category === category) {
                recommendedProducts.push(product.name);
            }
        });

        if (recommendedProducts.length === 0) {
            return `Sorry, we currently have no recommended products in the ${category} category.`;
        } else {
            return `Recommended products in the ${category} category: ${recommendedProducts.join(", ")}`;
        }
    },
};

import { expect } from "chai";

describe("Online Store Test", function () {
    describe("testing isProductAvailable functionality", function () {

        it("returns out of stock message if the stockQuantity is equal to zero", function () {
            expect(onlineStore.isProductAvailable('socks', 0)).to.equals(`Sorry, socks is currently out of stock.`)
        });

        it("returns out of stock message if the stockQuantity is less than 0", function () {
            expect(onlineStore.isProductAvailable('socks', -5)).to.equals(`Sorry, socks is currently out of stock.`)
        });

        it("returns product available message if the stockQuantity is more than 0", function () {
            expect(onlineStore.isProductAvailable('socks', 5)).to.equals(`Great! socks is available for purchase.`)
        });

        it("throws an error if the product is not a string", function () {
            expect(() => (onlineStore.isProductAvailable(5, 5)).to.throw('Invalid input.'))
        });

        it("throws an error if the stockQuantity is not a number", function () {
            expect(() => (onlineStore.isProductAvailable("socks", "t-shirt"))).to.throw('Invalid input.')
        });
    });

    describe("testing canAffordProduct functionality", function () {

        it("returns success and $0 account balance if price and account are equal", function () {
            expect(onlineStore.canAffordProduct(20, 20)).to.equal("Product purchased. Your remaining balance is $0.")
        });

        it("returns you don't have sufficient funds if acc.balance - price is less than zero", function () {
            expect(onlineStore.canAffordProduct(30, 20)).to.equal("You don't have sufficient funds to buy this product.")
        });

        it("returns success and the remaining account balance if the price is affordable", function () {
            expect(onlineStore.canAffordProduct(10, 20)).to.equal("Product purchased. Your remaining balance is $10.")
        })

        it("throws an error if the account balance is not a number", function () {
            expect(() => (onlineStore.canAffordProduct(10, 'test')).to.throw('Invalid input.'))
        });

        it("throws an error if the product price is not a number", function () {
            expect(() => (onlineStore.canAffordProduct("test", 10))).to.throw('Invalid input.')
        });
    });

    describe("testing getRecommendedProducts functionality", function () {

        it("throws an error if the productList is not an array", function () {
            expect(() => (onlineStore.getRecommendedProducts(123, 'test')).to.throw('Invalid input.'))
        });

        it("throws an error if the productList is not an array", function () {
            expect(() => (onlineStore.getRecommendedProducts(123, 'test')).to.throw('Invalid input.'))
        });

        it("throws an error if the category is not a string", function () {
            expect(() => (onlineStore.getRecommendedProducts([{ category: "diapers" }], 123))).to.throw('Invalid input.')
        });

        it("returns no recommended products message if there are no values with the corresponsing string in the array", function () {
            expect(onlineStore.getRecommendedProducts([{ name: 'diapers', category: "baby sector" }], 'socks')).to.equal("Sorry, we currently have no recommended products in the socks category.")
        })

        it("returns the success message with all products that match the category", function () {
            expect(onlineStore.getRecommendedProducts([{ name: 'baby socks', category: "baby sector" }], 'baby sector')).to.equal("Recommended products in the baby sector category: baby socks")
        })

    });
});
