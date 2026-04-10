# Automation Engineer Assessment

## 📌 Tech Stack
- Playwright (JavaScript)
- Node.js
- GitHub Actions (CI)

---

## ⚙️ Setup Instructions

Clone the repository:

git clone <your-repo-link>

Install dependencies:

npm install

---

## ▶️ Run Tests

Run all tests:

npx playwright test

Run UI tests:

npx playwright test tests/ui.spec.js

Run API tests:

npx playwright test tests/api.spec.js

---

## 🔁 CI/CD

GitHub Actions is configured in:
.github/workflows/test.yml

Tests run automatically on every push.

---

## 📊 Reporting

Playwright generates HTML report after execution:

npx playwright show-report

---

## ✅ Features Covered

### UI Automation
- Login functionality
- Product sorting (high to low)
- Add top 2 products to cart
- Checkout flow
- Order confirmation validation

### API Automation
- Authentication (token extraction)
- Fetch user cart
- Add product to cart
- Response validation

---

## 🚀 Author
Deekshith