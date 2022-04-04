const order = {
  name: 'Luiz Silva',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 49.99,
  },
};

const customerInfo = (order) => `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`
customerInfo(order);

const orderModifier = (order) => {
  const pizza = Object.keys(order.order.pizza)
  let pizzaStr = ''
  for (const str of pizza) {
    pizzaStr += ` ${str},`
  }
  const drinks = Object.values(order.order.drinks)
  let drinkStr = ''
  for (const index in drinks) {
    drinkStr += ` ${drinks[index].type},`
  }
  const custo = order.payment.total.toString().replace('.',',')
  return `Olá ${order.name}, o total do seu pedido de${pizzaStr.replace(/,$/,'')} e${drinkStr.replace(/,$/,'')} é de R$ ${custo}.`
}

console.log(orderModifier(order));
//console.log(customerInfo(order))