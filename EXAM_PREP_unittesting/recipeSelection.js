const recipeSelection = {
  isTypeSuitable(type, dietaryRestriction) {
    if (typeof type !== "string" || typeof dietaryRestriction !== "string") {
      throw new Error("Invalid input");
    }
    if (dietaryRestriction === "Vegetarian" && type === "Meat") {
      return "This recipe is not suitable for vegetarians";
    } else if (
      dietaryRestriction === "Vegan" &&
      (type === "Meat" || type === "Dairy")
    ) {
      return "This recipe is not suitable for vegans";
    } else {
      return "This recipe is suitable for your dietary restriction";
    }
  },
  isItAffordable(price, budget) {
    if (typeof price !== "number" || typeof budget !== "number") {
      throw new Error("Invalid input");
    }

    let remainingBudget = budget - price;

    if (remainingBudget < 0) {
      return "You don't have enough budget to afford this recipe";
    } else {
      return `Recipe ingredients bought. You have ${remainingBudget}$ left`;
    }
  },
  getRecipesByCategory(recipes, category) {
    if (!Array.isArray(recipes) || typeof category !== "string") {
      throw new Error("Invalid input");
    }

    const filteredRecipes = recipes.filter(
      (recipe) => recipe.category === category
    );
    return filteredRecipes.map((recipe) => recipe.title);
  },
};

import { expect } from "chai";

describe("testing recipeSelection functionality", function () {
  describe("•	isTypeSuitable(type, dietaryRestriction) ", function () {
    it("throws with invalis params", function () {
      expect(() => recipeSelection.isTypeSuitable({}, {})).to.throw('Invalid input');
    });
    it("throws with invalis params", function () {
      expect(() => recipeSelection.isTypeSuitable([], [])).to.throw('Invalid input');
    });
    it("throws with invalis params", function () {
      expect(() => recipeSelection.isTypeSuitable(1, 1)).to.throw('Invalid input');
    });
    it("returns properly with meat and vegetarian", function () {
      expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal('This recipe is not suitable for vegetarians');
    });
    it("returns properly with meat and vegan", function () {
      expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal('This recipe is not suitable for vegans');
    });
    it("returns properly with dairy and vegan", function () {
      expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal('This recipe is not suitable for vegans');
    });
    it("returns properly with dairy and vegan", function () {
      expect(recipeSelection.isTypeSuitable("Dairy", "test")).to.equal('This recipe is suitable for your dietary restriction');
    });
  });
  describe("•	isItAffordable (price, budget)", function () {
    it("throws with invalis params", function () {
      expect(() => recipeSelection.isItAffordable({}, {})).to.throw('Invalid input');
    });
    it("throws with invalis params", function () {
      expect(() => recipeSelection.isItAffordable([], [])).to.throw('Invalid input');
    });
    it("throws with invalis params", function () {
      expect(() => recipeSelection.isItAffordable('test', 'test')).to.throw('Invalid input');
    });
    it("returns properly with budget less than 0", function () {
      expect(recipeSelection.isItAffordable(10, 5)).to.equal("You don't have enough budget to afford this recipe");
    });
    it("returns properly with budget less than 0", function () {
      expect(recipeSelection.isItAffordable(5, 5)).to.equal('Recipe ingredients bought. You have 5$ left');
    });

    it("returns properly with budget less than 0", function () {
      expect(recipeSelection.isItAffordable(5, 5)).to.equal('Recipe ingredients bought. You have 0$ left');
    });

  describe("•	getRecipesByCategory(recipes, category)", function () {
    it("throws with invalis params", function () {
      expect(() => recipeSelection.getRecipesByCategory({}, {})).to.throw('Invalid input');
    });

    it("throws with invalis params", function () {
      expect(() => recipeSelection.getRecipesByCategory(2, 2)).to.throw('Invalid input');
    });

    it("throws with invalis params", function () {
      expect(() => recipeSelection.getRecipesByCategory('test', [])).to.throw('Invalid input');
    });

    it("throws with invalis params", function () {
      expect(() => recipeSelection.getRecipesByCategory(undefined, undefined)).to.throw('Invalid input');
    });

    it("returns properly with valid params", function () {
      expect(recipeSelection.getRecipesByCategory([{ title: "Stir-Fry", category: "Asian" }], 'Asian')).to.deep.equal(["Stir-Fry"]);
    });

  });
});
});
