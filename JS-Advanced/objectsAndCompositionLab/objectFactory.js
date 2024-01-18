
function factory(library, orders) {
  // Array to store fulfilled orders
  const products = [];

  // Iterate through each order
  for (const order of orders) {
    // Create a copy of the template
    const product = { ...order.template };

    // Add functions from the library based on the parts array
    for (const part of order.parts) {
      if (library[part]) {
        // Bind the function to the product template
        product[part] = library[part];
      }
    }

    // Add the fulfilled order to the products array
    products.push(product);
  }

  return products;
}

const library = {
  print: function () {
    console.log(`${this.name} is printing a page`);
  },
  scan: function () {
    console.log(`${this.name} is scanning a document`);
  },
  play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
  },
};

const orders = [
  {
    template: { name: 'ACME Printer' },
    parts: ['print']
  },
  {
    template: { name: 'Initech Scanner' },
    parts: ['scan']
  },
  {
    template: { name: 'ComTron Copier' },
    parts: ['scan', 'print']
  },
  {
    template: { name: 'BoomBox Stereo' },
    parts: ['play']
  }
];
const products = factory(library, orders);
products[0].print()



