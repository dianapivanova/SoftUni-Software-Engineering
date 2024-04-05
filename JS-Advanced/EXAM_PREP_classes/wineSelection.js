class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.space == this.wines.length) {
      throw new Error("Not enough space in the cellar.");
    }
    this.wines.push({ wineName, wineType, price, paid: false });
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }
  payWineBottle(wineName, price) {
    let findWine = this.wines.find((x) => x.wineName === wineName);
    if (!findWine) {
      throw new Error(`${wineName} is not in the cellar.`);
    }
    if (findWine.paid == true) {
      throw new Error(`${wineName} has already been paid.`);
    }
    findWine.paid = true;
    this.bill += findWine.price;
    return `You bought a ${wineName} for a ${price}$.`;
  }
  openBottle(wineName) {
    let findWine = this.wines.find((x) => x.wineName === wineName);
    if (!findWine) {
      throw new Error(`The wine, you're looking for, is not found.`);
    }
    if (findWine.paid == false) {
      throw new Error(`${wineName} need to be paid before open the bottle.`);
    }
    let idx = this.wines.indexOf(findWine);
    this.wines.splice(idx, 1);
    return `You drank a bottle of ${wineName}.`;
  }
  cellarRevision(wineType) {
    if (wineType == undefined) {
      let emptySlots = this.space - this.wines.length;
      let sortedArr = this.wines.sort((a, b) =>
        a.wineName.localeCompare(b.wineName)
      );
      let result = [
        `You have space for ${emptySlots} bottles more.`,
        `You paid ${this.bill}$ for the wine.`,
      ];
      sortedArr.forEach((x) => {
        let hasPaid = x.paid ? "Has Paid" : "Not Paid";
        result.push(`${x.wineName} > ${x.wineType} - ${hasPaid}.`);
      });
      return result.join("\n");
    } else {
      let filteredArr = this.wines.filter((x) => x.wineType == wineType);
      if (filteredArr.length == 0) {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
      let result = [];
      filteredArr.forEach((x) => {
        let hasPaid = x.paid ? "Has Paid" : "Not Paid";
        result.push(`${x.wineName} > ${x.wineType} - ${hasPaid}.`);
      });
      return result.join('\n');
    }
  }
}
const selection = new WineSelection(5)
selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
selection.payWineBottle('Bodegas Godelia Mencía', 144);
selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
console.log(selection.cellarRevision());



