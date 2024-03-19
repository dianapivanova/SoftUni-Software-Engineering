const recipeSelection = {
    isTypeSuitable(type, dietaryRestriction) {
      if (typeof type !== "string" || typeof dietaryRestriction !== "string"){
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

  describe("testing recipeSelection functionality", function () {
    describe("testing •	isTypeSuitable(type, dietaryRestriction) functionality", function () {
      it("throws an error with invalid parameters", function () {
        expect(() => recipeSelection.isTypeSuitable(1, 1)).to.throw('Invalid input')
      });
  
      it("works with type meat and vegetarian", function () {
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians')
      });

      it("works with type dairy and vegan", function () {
        expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal('This recipe is not suitable for vegans')
      });

      it("works with type meat and vegan", function () {
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans')
      });

      it("works with any other parameter", function () {
        expect(recipeSelection.isTypeSuitable('test', 'test')).to.equal('This recipe is suitable for your dietary restriction')
      });
  
    });

    describe("testing •	isItAffordable(price, budget) functionality", function () {
        it("throws an error with invalid parameters", function () {
          expect(() => recipeSelection.isItAffordable('test','test')).to.throw('Invalid input')
        });
    
        it("works with budget lower than price", function () {
          expect(recipeSelection.isItAffordable(10, 5)).to.equal("You don't have enough budget to afford this recipe")
        });
  
        it("works with budget higher than price", function () {
            expect(recipeSelection.isItAffordable(5, 10)).to.equal("Recipe ingredients bought. You have 5$ left")
          });
      });

      describe("testing • getRecipesByCategory(recipes, category)  functionality", function () {
        it("throws an error with invalid parameters", function () {
          expect(() => recipeSelection.getRecipesByCategory(undefined, undefined)).to.throw('Invalid input')
        });
    
        it("works with valid parameters and a match", function () {
          expect(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "Asian" }], "Asian")).to.deep.equal(['Spicy Tofu Stir-Fry'])
        });

        it("works with valid parameters and a match", function () {
            expect(recipeSelection.getRecipesByCategory([{ title: "Spicy Tofu Stir-Fry", category: "test" }], "Asian")).to.deep.equal([])
          });
        });
  
  })