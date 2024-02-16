const recipeSelection = {
    isTypeSuitable(type, dietaryRestriction) {
        if (typeof type !== "string" || typeof dietaryRestriction !== "string") {
            throw new Error("Invalid input");
        }
        if (dietaryRestriction === "Vegetarian" && type === "Meat") {
            return "This recipe is not suitable for vegetarians";
        } else if (dietaryRestriction === "Vegan" && (type === "Meat" || type === "Dairy")) {
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

        const filteredRecipes = recipes.filter((recipe) => recipe.category === category);
        return filteredRecipes.map((recipe) => recipe.title);
    },
};

import { expect } from "chai";

describe("testing recipeSelection functions", function () {
    describe("testing isTypeSuitable functionality", function () {

        it("returns that the recipe is not suitable with Meat and Vegetarian inputs", function () {
            expect(recipeSelection.isTypeSuitable("Meat", "Vegetarian")).to.equal("This recipe is not suitable for vegetarians")
        });
        it("returns that the recipe is not suitable with Meat and Vegan inputs", function () {
            expect(recipeSelection.isTypeSuitable("Meat", "Vegan")).to.equal("This recipe is not suitable for vegans")
        });
        it("returns that the recipe is not suitable with Dairy and Vegan inputs", function () {
            expect(recipeSelection.isTypeSuitable("Dairy", "Vegan")).to.equal("This recipe is not suitable for vegans")
        });
        it("returns that the recipe is suitable with random inputs not mentioned above - Carnivore and Salad", function () {
            expect(recipeSelection.isTypeSuitable("Salad", "Carnivore")).to.equal("This recipe is suitable for your dietary restriction")
        });
        it("throws an error if the first input is not a string - a number", function () {
            expect(() => recipeSelection.isTypeSuitable(1, "Vegan")).to.throw('Invalid input');
        });
        it("throws an error if the second input is not a string - a number", function () {
            expect(() => recipeSelection.isTypeSuitable("Meat", 1)).to.throw('Invalid input');
        });

    });

    describe("testing isItAffordable functionality", function () {

        it("returns the remaining budget if the price is lower than the budget", function () {
            expect(recipeSelection.isItAffordable(20, 30)).to.equal("Recipe ingredients bought. You have 10$ left")

        });
        it("returns the remaining budget if the price is lower than the budget", function () {
            expect(recipeSelection.isItAffordable(20, 30)).to.equal("Recipe ingredients bought. You have 10$ left")

        });
        it("throws an error if the first input is not a number", function () {
            expect(() => recipeSelection.isItAffordable("Test", 10)).to.throw('Invalid input');
        });
        it("throws an error if the second input is not a number", function () {
            expect(() => recipeSelection.isItAffordable(10, "Test")).to.throw('Invalid input');
        });

    });
    describe("testing getRecipesByCategory functionality", function () {

        it("throws an error if the first input is not an array", function () {
            expect(() => recipeSelection.getRecipesByCategory(10, "Asian")).to.throw('Invalid input');
        });
        it("throws an error if the second input is not a string", function () {
            expect(() => recipeSelection.getRecipesByCategory([], 1)).to.throw('Invalid input');
        });
        it("returns a recipe array with the proper parameters", function () {
            expect(recipeSelection.getRecipesByCategory(([{ title: "Noodles", category: "Asian" }]), "Asian")).to.deep.equal(["Noodles"])

        });


    });

});
