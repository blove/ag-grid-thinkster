function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

module.exports = () => {
  const data = {
    customers: [],
    accounts: [],
    products: [],
    orders: [],
    orderItems: []
  };

  const faker = require('faker');

  for (let customer = 0; customer < 500; customer++) {
    const id = data.customers.length + 1;
    data.customers.push({
      id,
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      avatar: faker.image.avatar(),
      address: {
        street1: faker.address.streetName(),
        city: faker.address.city(),
        state: faker.address.state(),
        zip: faker.address.zipCode()
      }
    });
    for (let account = 0; account < getRandomInt(3) + 1; account++) {
      data.accounts.push({
        id: data.accounts.length + 1,
        customerId: id,
        accountNumber: faker.finance.account(),
        name: faker.finance.accountName(),
        amount: faker.finance.amount()
      });
    }
  }

  for (let product = 0; product < 200; product++) {
    data.products.push({
      id: data.products.length + 1,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      color: faker.commerce.color(),
      details: faker.commerce.productAdjective(),
      imageUrl: faker.image.imageUrl()
    });
  }

  for (let order = 0; order < 50; order++) {
    const account = data.accounts[getRandomInt(data.accounts.length)];
    const id = data.orders.length + 1;
    data.orders.push({
      id,
      accountId: account.id,
      customerId: account.customerId,
      dateOfOrder:
        order < 25 && order % 2 === 0
          ? faker.date.past()
          : order < 75
          ? faker.date.recent()
          : faker.date.future()
    });

    for (let orderItem = 0; orderItem < getRandomInt(10) + 2; orderItem++) {
      const product = data.products[getRandomInt(data.products.length)];

      data.orderItems.push({
        orderId: id,
        productId: product.id,
        quantity: getRandomInt(4) + 1
      });
    }
  }

  return data;
};
