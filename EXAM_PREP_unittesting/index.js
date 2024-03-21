import { expect } from "chai";

const companyAdministration = {
  hiringEmployee(name, position, yearsExperience) {
    if (position == "Programmer") {
      if (yearsExperience >= 3) {
        return `${name} was successfully hired for the position ${position}.`;
      } else {
        return `${name} is not approved for this position.`;
      }
    }
    throw new Error(`We are not looking for workers for this position.`);
  },
  calculateSalary(hours) {
    let payPerHour = 15;
    let totalAmount = payPerHour * hours;

    if (typeof hours !== "number" || hours < 0) {
      throw new Error("Invalid hours");
    } else if (hours > 160) {
      totalAmount += 1000;
    }
    return totalAmount;
  },
  firedEmployee(employees, index) {
    let result = [];

    if (
      !Array.isArray(employees) ||
      !Number.isInteger(index) ||
      index < 0 ||
      index >= employees.length
    ) {
      throw new Error("Invalid input");
    }
    for (let i = 0; i < employees.length; i++) {
      if (i !== index) {
        result.push(employees[i]);
      }
    }
    return result.join(", ");
  },
};

describe("testing companyAdministration functionality", function () {
  describe("testing hiringEmployee (name, position, yearsExperience)", function () {
    it("throws an error with position not a programmer", function () {
      expect(() =>
        companyAdministration.hiringEmployee("Gosho", "test", 5)
      ).to.throw("We are not looking for workers for this position.");
    });

    it("returns correctly with years of experience > 3", function () {
      expect(
        companyAdministration.hiringEmployee("Gosho", "Programmer", 5)
      ).to.equal("Gosho was successfully hired for the position Programmer.");
    });

    it("returns correctly with years of experience = 3", function () {
      expect(
        companyAdministration.hiringEmployee("Gosho", "Programmer", 3)
      ).to.equal("Gosho was successfully hired for the position Programmer.");
    });

    it("returns correctly with years of experience < 3", function () {
      expect(
        companyAdministration.hiringEmployee("Gosho", "Programmer", 1)
      ).to.equal(`Gosho is not approved for this position.`);
    });

    it("throws an error with position not a programmer", function () {
      expect(() => companyAdministration.hiringEmployee("Gosho")).to.throw(
        "We are not looking for workers for this position."
      );
    });
  });

  describe("testing calculateSalary (hours)", function () {
    it("throws an error with param not a number", function () {
      expect(() => companyAdministration.calculateSalary("test")).to.throw(
        "Invalid hours"
      );
    });

    it("throws an error with param negative number", function () {
      expect(() => companyAdministration.calculateSalary(-5)).to.throw(
        "Invalid hours"
      );
    });

    it("returns properly with hours more than 160", function () {
      expect(companyAdministration.calculateSalary(160)).to.equal(2400);
    });

    it("returns properly with hours more than 160", function () {
      expect(companyAdministration.calculateSalary(160.5)).to.equal(3407.5);
    });
  });

  describe("testing firedEmployee (employees, index) ", function () {
    it("returns properly with valid index and array", function () {
      expect(
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 2)
      ).to.equal("Petar, Ivan");
    });

    it("returns properly with valid index and array", function () {
        expect(
          companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)
        ).to.equal("Petar, George");
      });

    it("returns properly with valid index and array", function () {
      expect(companyAdministration.firedEmployee(["Petar"], 0)).to.equal("");
    });

    it("throws with invalid params", function () {
      expect(() =>
        companyAdministration.firedEmployee(undefined, undefined)
      ).to.throw("Invalid input");
    });

    it("throws with invalid index", function () {
      expect(() =>
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)
      ).to.throw("Invalid input");
    });

    it("throws with invalid index", function () {
      expect(() => companyAdministration.firedEmployee({}, 0)).to.throw(
        "Invalid input"
      );
    });

    it("throws with invalid index", function () {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], null)).to.throw(
          "Invalid input"
        );
      });

      it("throws with invalid index", function () {
        expect(() => companyAdministration.firedEmployee({}, 1)).to.throw(
          "Invalid input"
        );
      });

      it("throws with invalid index", function () {
        expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 5)).to.throw(
          "Invalid input"
        );
      });

    it("throws with invalid index", function () {
      expect(() => companyAdministration.firedEmployee("test", 0)).to.throw(
        "Invalid input"
      );
    });

    it("throws with invalid index", function () {
        expect(() => companyAdministration.firedEmployee({}, {})).to.throw(
          "Invalid input"
        );
      });

      it("throws with invalid index", function () {
        expect(() => companyAdministration.firedEmployee([], 1)).to.throw(
          "Invalid input"
        );
      });

    it("throws with invalid index", function () {
      expect(() =>
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 10)
      ).to.throw("Invalid input");
    });

    it("throws with invalid index", function () {
      expect(() =>
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)
      ).to.throw("Invalid input");
    });

    it("throws with invalid index", function () {
      expect(() =>
        companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3.5)
      ).to.throw("Invalid input");
    });
  });
});
