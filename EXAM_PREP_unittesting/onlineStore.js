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
    if (
      typeof productPrice !== "number" ||
      typeof accountBalance !== "number"
    ) {
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
      return `Recommended products in the ${category} category: ${recommendedProducts.join(
        ", "
      )}`;
    }
  },
};

import { expect } from "chai";

describe("testing onlineStore class functionality", function () {
  describe("testing •	isProductAvailable(product, stockQuantity) functionality", function () {
    it("throws an error with invalid parameters", function () {
      expect(() => onlineStore.isProductAvailable(5, "test")).to.throw(
        "Invalid input"
      );
    });

    it("works with quantity equal to 0", function () {
      expect(onlineStore.isProductAvailable("test", 0)).to.equal(
        "Sorry, test is currently out of stock."
      );
    });

    it("works with quantity less than 0", function () {
      expect(onlineStore.isProductAvailable("test", -10)).to.equal(
        "Sorry, test is currently out of stock."
      );
    });

    it("works with quantity higher than 0", function () {
      expect(onlineStore.isProductAvailable("test", 10)).to.equal(
        "Great! test is available for purchase."
      );
    });
  });

  describe("testing •	canAffordProduct(productPrice, accountBalance) functionality", function () {
    it("throws an error with invalid parameters", function () {
      expect(() => onlineStore.canAffordProduct("test", "test")).to.throw(
        "Invalid input"
      );
    });

    it("works with second param lower than the first one", function () {
      expect(onlineStore.canAffordProduct(5, 2)).to.equal(
        "You don't have sufficient funds to buy this product."
      );
    });

    it("works with second param higher than the first one", function () {
      expect(onlineStore.canAffordProduct(5, 10)).to.equal(
        "Product purchased. Your remaining balance is $5."
      );
    });
  });

  describe("testing •	getRecommendedProducts(productList, category) functionality", function () {
    it("throws an error with invalid parameters", function () {
      expect(() => onlineStore.getRecommendedProducts("test", 5)).to.throw(
        "Invalid input"
      );
    });

    it("works with matches from the array", function () {
      expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "Photography" }], "Photography")).to.equal(
        "Recommended products in the Photography category: Camera"
      );
    });

    it("works with matches from the array", function () {
        expect(onlineStore.getRecommendedProducts([{ name: "Camera", category: "test" }], "Photography")).to.equal(
          "Sorry, we currently have no recommended products in the Photography category."
        );
      });
  });
});
