const { test, expect } = require('@playwright/test');

test('API Flow', async ({ request }) => {

  // Login
  const login = await request.post('https://dummyjson.com/auth/login', {
    data: {
      username: 'emilys',
      password: 'emilyspass'
    }
  });

  expect(login.status()).toBe(200);
  const loginData = await login.json();

  const token = loginData.token;
  const userId = loginData.id;

  // Get cart
  const cart = await request.get(`https://dummyjson.com/carts/user/${userId}`);
  expect(cart.status()).toBe(200);

  // Add product
  const add = await request.post('https://dummyjson.com/carts/add', {
    data: {
      userId: userId,
      products: [{ id: 1, quantity: 2 }]
    }
  });

  expect([200, 201]).toContain(add.status());

  const addData = await add.json();

  expect(addData.products[0].quantity).toBe(2);
});