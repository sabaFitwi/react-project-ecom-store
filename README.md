# Course Assignment

## Overview:

This project involves building an eCom store using React. The API that will be used is https://api.noroff.dev/api/v1/online-shop. Individual products can be accessed by appending the product ID to the API URL.

The following pages need to be built for the eCom store:

### Homepage

Individual product page
Cart page
Checkout success page
Contact page (with form validation)
Homepage:
The homepage should display a list of all the products available. There should be a search bar that filters products as the user types. Clicking on a product should take the user to an individual product page.

### Layout:

All pages should use a <Layout> component that includes a header and footer. The header should include a navigation bar as well as a cart icon component that displays the current number of items in the cart.

### Individual product page:

The individual product page should display the title of the product, the description, and an image. The discounted price of the product should be displayed, and if there is a difference between the discountedPrice and price properties, the discount should be calculated and displayed. Reviews for the product should be displayed if they exist. There should be an "Add to cart" button that adds the product to the cart.

### Cart page:

The cart page should display all products that have been added to the cart, as well as the total price of all the products. There should be a "Checkout" button that takes the user to the checkout success page.

### Checkout success page:

The checkout success page should display a message notifying the user that their order was successful. There should be a link that takes the user back to the store. The cart should be cleared when the user reaches the checkout success page.

### Contact page:

The contact page should include a form with fields for full name, subject, email, and body. Form validation should be implemented, with the following requirements:

- Full name: Minimum of 3 characters, required
- Subject: Minimum of 3 characters, required
- Email: Must be a valid email address, required
- Body: Minimum of 3 characters, required
  React Router should be used to switch between pages. The design should be responsive, and it is recommended to use styled-components or CSS modules to design from scratch. The code should be clean and well-formatted. TypeScript is not required.
