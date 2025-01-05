# Add to Cart Task Using Router

## Project Description  
This project demonstrates the creation of a ReactJS application with product and cart functionality, leveraging the **Fake Store API**. Users can view products on a dedicated product page, add items to a cart, and manage the cart's contents. Proper routing is implemented using **React Router** for seamless navigation between the product and cart pages.

---

## Features  
- **Product Page**  
  - Fetches and displays a list of products from the Fake Store API.  
  - Each product shows:  
    - Product Image  
    - Title  
    - Price  
    - Description  
  - Responsive layout for an optimized user experience across devices.

- **Cart Page**  
  - Displays items added to the cart with the following details:  
    - Product Name  
    - Price  
    - Quantity  
    - Total price per item (based on quantity).  
  - Allows users to:  
    - Add items to the cart.  
    - Remove items from the cart.  
    - Increase or decrease the quantity of each cart item.  
  - Dynamically calculates and displays:  
    - Total price for all items in the cart.  
    - Final price with a **10% discount** applied.  

- **Routing**  
  - Proper navigation between the product page and the cart page using **React Router**.  

- **State Management**  
  - Ensures the state is updated correctly when items are added to or removed from the cart.  

- **Styling**  
  - Designed using **HTML**, **CSS**, and **Tailwind CSS** for clean and responsive UI.  

---

## Tech Stack  
- **Frontend Framework**: ReactJS  
- **Routing**: React Router  
- **Styling**: HTML, CSS, and Tailwind CSS  
- **Functionality**: JavaScript  

---

## Setup and Installation  

1. Clone the repository:  
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   npm start
   ```

4. Open your browser and navigate to:  
   ```
   http://localhost:3000
   ```

---

## Usage  

1. Navigate to the **Product Page** to browse the list of products fetched from the Fake Store API.  
2. Click **Add to Cart** to add items to the cart.  
3. Go to the **Cart Page** using the navigation bar or appropriate route.  
4. On the Cart Page, manage cart items:  
   - Increase/decrease quantities.  
   - Remove items.  
   - View total and discounted prices.

---

## Task Requirements Fulfilled  

- Fetching data using the **Fake Store API**.  
- Displaying products in a user-friendly, responsive layout.  
- Adding/removing items from the cart.  
- Dynamically updating the cart state.  
- Applying a **10% discount** on the total price.  
- Implementing navigation with **React Router**.  
- Writing clean and well-documented code.  

---

## Future Improvements  

- Add search and filter functionality to the Product Page.  
- Persist cart data using localStorage or a database.  
- Implement user authentication for a personalized cart experience.  
