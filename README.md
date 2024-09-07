# Fast-Food Review Website

## Project Overview

This project is a simple static website that features different fast-food chains in Kazakhstan, offering reviews and insights about their menus, discounts, and general customer experiences. The project is focused on enhancing the visibility of local fast-food chains like Bahandi Burgers, Shaurma Food, and Zheka’s Doner. The website consists of multiple HTML pages, styled using inline CSS, with additional sections that display images, menus, and review content.

---

## Project Structure

The project contains the following HTML pages:

### 1. **Main Page (`index.html`)**
   - **Description**: The homepage includes navigation to the other pages and introduces the concept of fast-food reviews. The layout includes a logo, navigation links, and a footer.
   - **Key Features**:
     - A navigation bar that links to various pages.
     - Header with an embedded YouTube link for entertainment.
     - Footer includes the authors' names.

### 2. **Bahandi Burgers Page (`bahandi.html`)**
   - **Description**: This page is dedicated to Bahandi Burgers, a popular fast-food chain in Kazakhstan. The page highlights both the advantages and disadvantages of eating at Bahandi Burgers.
   - **Key Features**:
     - Image of Bahandi Burgers.
     - Pros and cons list.
     - Footer with authors’ names.

### 3. **Discounts Page (`orders.html`)**
   - **Description**: A page that features discounted meals and combo deals at Shaurma Food.
   - **Key Features**:
     - A table with images of food, price, restaurant names, and checkboxes for adding items to an order.
     - Form input for submitting orders with comments.
     - Footer with authors’ names.

### 4. **Shaurma Food Page (`SF.html`)**
   - **Description**: A page describing Shaurma Food, one of the popular restaurants in Kazakhstan, known for its shawarma and various other dishes.
   - **Key Features**:
     - Description of the menu.
     - Advantages of Shaurma Food’s diverse offerings and accessibility.
     - Images displaying shawarma-related content.

### 5. **Zheka's Doner Page (`shekas.html`)**
   - **Description**: This page focuses on Zheka’s Doner, a kebab restaurant known for its grilled meats and fresh toppings. The page showcases the menu and the restaurant’s offerings.
   - **Key Features**:
     - Visual display of Zheka's restaurant and menu.
     - Text describing the range of dishes available beyond doner kebabs.

### 6. **Login/Register Page (`register.html`)**
   - **Description**: A form page that allows users to register or log into the site. The form captures user email, password, and other preferences.
   - **Key Features**:
     - Email, password, gender, and preferences selection.
     - A reset button to clear form entries.

---

## File Structure

```
/project-directory
│
├── index.html                # Main page with navigation and fast-food overview
├── bahandi.html              # Bahandi Burgers review page
├── SF.html                   # Shaurma Food restaurant page
├── orders.html               # Discounts and order submission page
├── shekas.html               # Zheka's Doner review page
├── register.html             # Registration/login form page
├── images/
│   ├── donerava.png          # Logo image used across multiple pages
│   ├── bahandi_burgers.jpg   # Bahandi Burgers image
│   ├── sf2in1.jpg            # Discounted combo image for Shaurma Food
│   ├── house.jpg             # Zheka’s Doner restaurant image
│   └── menu.jpg              # Zheka’s Doner menu image
└── stylesd.css               # Optional external CSS file (linked in register.html)
```

---

## How to Use

1. **Cloning the repository**: 
   - Clone the repository onto your local machine using `git clone`.
   
2. **Viewing the website**:
   - Open any of the HTML files in a web browser to view the content.
   - The `index.html` file serves as the homepage, from which users can navigate to other pages.
   
3. **Adding content**:
   - To update images, add new image files in the `/images` directory and update the relevant `<img>` elements in the HTML files.
   - To add new pages, copy one of the existing HTML templates and modify its content accordingly.

---

## Future Improvements

- **Responsive Design**: Improve the current static layout to be responsive, ensuring the website looks good on all devices.
- **External CSS**: Move all inline CSS styles to a central `styles.css` file for better maintainability.
- **JavaScript**: Add interactivity with JavaScript, such as dynamic form validation and cart functionality for the discount page.
- **Backend Integration**: Implement backend support for form submissions and user authentication.

---

## Authors

- **Madikozha Issayev**
- **Alikhan Khamidulla**
- **Abubakir Meirkhan**

This project was created as part of a web development tutorial. The goal was to showcase basic HTML, CSS, and form creation skills.
