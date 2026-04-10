const { test, expect, request } = require('@playwright/test');

test('API Flow Test', async () => {

  const apiContext = await request.newContext();

  // 1️⃣ LOGIN
  const loginRes = await apiContext.post('https://dummyjson.com/auth/login', {
    data: {
      username: 'emilys',
      password: 'emilyspass'
    }
  });

  expect(loginRes.status()).toBe(200);

  const loginData = await loginRes.json();
  const token = loginData.token;
  const userId = loginData.id;

  console.log("Token:", token);
  console.log("User ID:", userId);

  // 2️⃣ GET USER CART
  const cartRes = await apiContext.get(`https://dummyjson.com/carts/user/${userId}`);

  expect(cartRes.status()).toBe(200);

  const cartData = await cartRes.json();
  console.log("Cart:", cartData);

  // 3️⃣ ADD PRODUCT
  const addRes = await apiContext.post('https://dummyjson.com/carts/add', {
    data: {
      userId: userId,
      products: [
        {
          id: 1,
          quantity: 2
        }
      ]
    }
  });

  // 4️⃣ ASSERTIONS
  expect([200, 201]).toContain(addRes.status());

  const addData = await addRes.json();

  console.log("Added Product:", addData);

  // check product added
  expect(addData.products[0].id).toBe(1);
  expect(addData.products[0].quantity).toBe(2);

  // check total price exists
  expect(addData.total).toBeGreaterThan(0);

});