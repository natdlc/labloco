Welcome! This is the frontend code for Zuitt's E-commerce capstone. Listed below are all the features built (and in progress if any).

FRONT-END-SPECIFIC

- (c) Logout
- (c) 404 page
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
- (w) Retrieve all products (admin only)
- () Add categories to product (admin only)
- () Add only active categories to product (admin only)
- () Add custom order option with value (admin only)
- () Delete custom order option (admin only)

Orders
- () Retrieve all orders (Admin only)

Categories
- () Remove from category (admin only)
- () Add a category (admin only)
- () Add hot/featured products section (admin only)
- () Retrieve all categories (admin only)
- () Edit category name (admin only)
- () Archive a category (admin only)
- () Remove a category (admin only)
- () Add product to category (admin only)
- () Can't delete category linked to products (admin only)

Newsletters
- () Retrieve newsletter emails (admin only)

Couriers
- () Create courier (admin only)
- () Retrieve couriers (admin only)
- () Deactivate courier (admin only)

Discounts
- () Create discounts (admin only)
- () Retrieve discounts (admin only)
- () Set discount to inactive (admin only)

MINIMUM

- (c) User registration
- (c) User authentication
- () Create Product (Admin only)
- () Retrieve all active products
- () Retrieve single product
- () Update Product information (Admin only)
- () Archive Product (Admin only)
- () Non-admin User checkout (Create Order)

STRETCH

- (w) Set user as admin (Admin only)
- () Retrieve authenticated user’s orders
- () Retrieve all orders (Admin only)

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
- () Retrieve newsletter emails (admin only)
- () Unsubscribe from newsletter

Products

- () Schema update: stocks, categories, options
- () No duplicate product (via name)
- () Retrieve all products (admin only)
- () Retrieve single product (active only)
- () Create image for product (admin only)
- () Retrieve image for product
- () Delete image for product (admin only)
- () Add custom order option with value (admin only)
- () Delete custom order option (admin only)
- () Add categories to product (admin only)
- () Add only active categories to product (admin only)
- () Remove from category (admin only)

Category

- () retrieve all active categories (all users)
- () Add a category (admin only)
- () Add hot/featured products section (admin only)
- () Retrieve all categories (admin only)
- () Edit category name (admin only)
- () Archive a category (admin only)
- () Remove a category (admin only)
- () Add product to category (admin only)
- () Can't delete category linked to products (admin only)

Courier

- () Create courier (admin only)
- () Retrieve couriers (admin only)
- () Deactivate courier (admin only)

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

- () Create discounts (admin only)
- () Retrieve discounts (admin only)
- () Set discount to inactive (admin only)
