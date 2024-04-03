const workforceManagement = {
  recruitStaff(name, role, experience) {
    if (role === "Developer") {
      if (experience >= 4) {
        return `${name} has been successfully recruited for the role of ${role}.`;
      } else {
        return `${name} is not suitable for this role.`;
      }
    }
    throw new Error(`We are not currently hiring for this role.`);
  },

  computeWages(hoursWorked) {
    let hourlyRate = 18;
    let totalPayment = hourlyRate * hoursWorked;

    if (typeof hoursWorked !== "number" || hoursWorked < 0) {
      throw new Error("Invalid hours");
    } else if (hoursWorked > 160) {
      totalPayment += 1500;
    }
    return totalPayment;
  },

  dismissEmployee(workforce, employeeIndex) {
    let updatedStaff = [];

    if (
      !Array.isArray(workforce) ||
      !Number.isInteger(employeeIndex) ||
      employeeIndex < 0 ||
      employeeIndex >= workforce.length
    ) {
      throw new Error("Invalid input");
    }
    for (let i = 0; i < workforce.length; i++) {
      if (i !== employeeIndex) {
        updatedStaff.push(workforce[i]);
      }
    }
    return updatedStaff.join(", ");
  },
};

import { expect } from "chai";

describe("testing Workforce Management functionality", function () {
  describe("testing recruitStaff (name, role, experience)", function () {
    it("throws with a position not Dev", function () {
      expect(() =>
        workforceManagement.recruitStaff("Test", "test", 5)
      ).to.throw(`We are not currently hiring for this role.`);
    });

    it("Works with a position Dev and exp >= 4", function () {
      expect(workforceManagement.recruitStaff("Test", "Developer", 4)).to.equal(
        `Test has been successfully recruited for the role of Developer.`
      );
    });

    it("Works with a position Dev and exp < 4", function () {
      expect(workforceManagement.recruitStaff("Test", "Developer", 3)).to.equal(
        `Test is not suitable for this role.`
      );
    });
  });

  describe("testing computeWages (hoursWorked)", function () {
    it("throws with not a num", function () {
      expect(() => workforceManagement.computeWages({})).to.throw(
        `Invalid hours`
      );
    });

    it("throws with not a num", function () {
      expect(() => workforceManagement.computeWages([])).to.throw(
        `Invalid hours`
      );
    });

    it("throws with not a num", function () {
      expect(() => workforceManagement.computeWages(undefined)).to.throw(
        `Invalid hours`
      );
    });

    it("throws with a negative num", function () {
      expect(() => workforceManagement.computeWages(-5)).to.throw(
        `Invalid hours`
      );
    });

    it("returns with 100 hours", function () {
      expect(workforceManagement.computeWages(100)).to.equal(1800);
    });

    it("returns with 161 hours", function () {
      expect(workforceManagement.computeWages(161)).to.equal(4398);
    });

    it("returns with 160 hours", function () {
      expect(workforceManagement.computeWages(160)).to.equal(2880);
    });
  });

  describe("testing dismissEmployee (workforce, employeeIndex)", function () {
    it("throws with invalid params", function () {
      expect(() => workforceManagement.dismissEmployee({}, {})).to.throw(
        `Invalid input`
      );
    });

    it("throws with invalid params", function () {
      expect(() => workforceManagement.dismissEmployee([], [])).to.throw(
        `Invalid input`
      );
    });

    it("throws with invalid params", function () {
      expect(() =>
        workforceManagement.dismissEmployee(undefined, undefined)
      ).to.throw(`Invalid input`);
    });

    it("throws with invalid params", function () {
      expect(() =>
        workforceManagement.dismissEmployee(["test1", "test2"], -1)
      ).to.throw(`Invalid input`);
    });

    it("throws with invalid params", function () {
      expect(() =>
        workforceManagement.dismissEmployee(["test1", "test2"], 2)
      ).to.throw(`Invalid input`);
    });

    it("throws with invalid params", function () {
      expect(() =>
        workforceManagement.dismissEmployee(["test1", "test2", "test3"], 3)
      ).to.throw(`Invalid input`);
    });

    it("works with valid params", function () {
      expect(
        workforceManagement.dismissEmployee(["test1", "test2", "test3"], 0)
      ).to.equal(`test2, test3`);
    });

    it("works with valid params", function () {
        expect(
          workforceManagement.dismissEmployee(["test1", "test2", "test3"], 2)
        ).to.equal(`test1, test2`);
      });
  });
});
