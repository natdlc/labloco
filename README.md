Welcome! This is the frontend code for Zuitt's E-commerce capstone. Listed below are all the features built (and in progress if any).

FRONT-END-SPECIFIC

Main
- (c) Single product
- (c) Registration (with log in confirmation)
- () Collections
- () Cart
- () Checkout
- () Order history

Admin
- (c) Retrieve all products (admin only)
- (c) Create Product (Admin only)
- (c) Update Product information (Admin only)
- (c) Unarchive Product (Admin only)
- (c) Archive Product (Admin only)
- (c) Admin DASHBOARD

Others
- (c) Responsive and functional navbar
- (c) Single page app (SPA)
- (c) Inaccessible reg/login for logged in users
- () Admin cant add to cart
- () Ecommerce app
- () Self made features

- () Hot/Featured
- (c) Logout
- (c) 404 page
- (c) About page
- (c) user context
- (c) product context
- (c) category context
- (w) Form validations
- (w) admin page

ADMIN FEATURES

Users

- (c) Set user as admin (Admin only)

Products

- (c) Create Product (Admin only)
- (c) Create image for product (admin only)
- (c) Delete image for product (admin only)
- (c) Update Product information (Admin only)
- (c) Archive Product (Admin only)
- (c) Unarchive Product (Admin only)
- (c) Retrieve all products (admin only)
- (c) Add categories to product (admin only)
- (c) Add only active categories to product (admin only)
- (c) Remove product from category (admin only)
- (c) Add custom order option with value (admin only)
- (c) Delete custom order option (admin only)

Orders

- (c) Retrieve all orders (Admin only)

Categories

- (c) Add a category (admin only)
- (c) Add hot/featured products section (admin only)
- (c) Retrieve all categories (admin only)
- (c) Retrieve all products in specific category (admin only)
- (c) Edit category name (admin only)
- (c) Archive a category (admin only)
- (c) Unarchive a category (admin only)
- (c) Remove a category (admin only)
- (c) Add product to category (admin only)
- (c) Can't delete category linked to products (admin only)

Newsletters

- (c) Retrieve newsletter emails (admin only)

Couriers

- (c) Create courier (admin only)
- (c) Retrieve couriers (admin only)
- (c) Deactivate courier (admin only)
- (c) Activate courier (admin only)

Discounts

- (c) Create discounts (admin only)
- (c) Retrieve discounts (admin only)
- (c) Set discount to inactive (admin only)
- (c) Set discount to active (admin only)

MINIMUM

- (c) User registration
- (c) User authentication
- (c) Create Product (Admin only)
- () Retrieve all active products
- () Retrieve single product
- () Update Product information (Admin only)
- (c) Archive Product (Admin only)
- () Non-admin User checkout (Create Order)

STRETCH

- (c) Set user as admin (Admin only)
- () Retrieve authenticated user’s orders
- (c) Retrieve all orders (Admin only)

EXTRAS

Cart

- () Add to cart active product only (auth)
- () Remove product from cart (auth)
- () Clear cart (auth)
- () Admin can't add to cart

Users

- () Schema update: registeredOn, firstName, lastName, address, mobileNum
- () No duplicate users (via email)
- () Retrieve authenticated user profile (authed)
- () Change password (user only)

Newsletter

- () Subscribe to newsletter
- () No duplicate emails
- (c) Retrieve newsletter emails (admin only)
- () Unsubscribe from newsletter

Products

- () Schema update: stocks, categories, options
- () No duplicate product (via name)
- (c) Retrieve all products (admin only)
- () Retrieve single product (active only)
- (c) Unarchive Product (Admin only)
- (c) Create image for product (admin only)
- () Retrieve image for product
- (c) Delete image for product (admin only)
- (c) Add custom order option with value (admin only)
- (c) Delete custom order option (admin only)
- (c) Add categories to product (admin only)
- (c) Add only active categories to product (admin only)
- (c) Remove product from category (admin only)

Category

- (c) Add a category (admin only)
- (c) Add hot/featured products section (admin only)
- () retrieve all active categories (all users)
- (c) Retrieve all categories (admin only)
- () Retrieve active products in specific category
- (c) Retrieve all products in specific category (admin only)
- (c) Edit category name (admin only)
- (c) Archive a category (admin only)
- (c) Unarchive a category (admin only)
- (c) Remove a category (admin only)
- (c) Add product to category (admin only)
- (c) Can't delete category linked to products (admin only)

Courier

- (c) Create courier (admin only)
- (c) Retrieve couriers (admin only)
- (c) Deactivate courier (admin only)
- (c) Activate courier (admin only)

Orders

- () Schema update: comments(optional), courier
- () Can only order active products
- () Orders catch cart products
- () User's cart clears when order is processed
- () Discounts apply to orders (users only)
- () Calculate percentage-based discounts
- () Calculate fixed-amount-based discounts
- () Attach courier to order

Discounts

- (c) Create discounts (admin only)
- (c) Retrieve discounts (admin only)
- (c) Set discount to inactive (admin only)
- (c) Set discount to active (admin only)
