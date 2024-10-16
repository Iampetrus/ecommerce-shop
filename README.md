# This is a React JS, Tailwind CSS and Fake Store API call, Ecommerce Website.
```
Gallery of products to choose and view, see, add or delete in your shopping bag, and view in checkout prior to pay.
```
```
src
├── index.js  
│   └── (Renders) 
│       └── App.js
│           ├── (Includes)
│           │    ├── Header.js  ──────────┐
│           │    │      └── (Uses CartContext) 
│           │    │          └── (Accesses itemAmount)
│           │    ├── Footer.js
│           │    ├── Home.js  ────────────┐
│           │    │      ├── (Uses Product) 
│           │    │      │    └── (Links to ProductDetails) 
│           │    │      └── (Uses ProductContext)
│           │    ├── ProductDetails.js
│           │    │      ├── (Fetches Product Data)
│           │    │      ├── (Uses CartContext) 
│           │    │      │    └── (Calls addToCart)
│           │    │      └── (Accesses product)
│           │    └── Checkout.js
│           │           └── (Uses CartContext) 
│           │               └── (Accesses cart)
│           │               
│           └── (Contains) 
│               └── components
│                   ├── CartItem.js  ──────┐
│                   │    └── (Uses CartContext) 
│                   │        └── (Calls removeFromCart)
│                   ├── Hero.js
│                   └── Product.js  ───────┘
│
└── contexts
    ├── ProductContext.js
    │   ├── (Creates) 
    │   │    ├── products state
    │   │    └── (Fetches products)
    │   └── (Provides) 
    │       └── products data to components
    │
    ├── CartContext.js
    │   ├── (Creates) 
    │   │    ├── cart state
    │   │    ├── itemAmount state
    │   │    └── total state
    │   └── (Provides) 
    │       ├── addToCart
    │       ├── removeFromCart
    │       ├── clearCart
    │       └── other cart-related functions
    │
    └── SidebarContext.js
        ├── (Creates) 
        │    └── sidebar open/close state
        └── (Provides) 
            └── isOpen and setIsOpen to components
```
```
DESCRIPTION:
    src: The main folder of the application containing all the files.
        index.js: The entry point of the application that renders the main component.
        App.js: The main component that organizes the application and defines the routes.
        Home.js: The homepage that presents other components.
        components: A folder that includes all reusable components:
            Header.js: Header component.
            Footer.js: Footer component.
            Hero.js: Hero section component.
            Product.js: Component for displaying individual products.
            ProductDetails.js: Component for showing product details.
            CartItem.js: Component for displaying items in the cart.
            Sidebar.js: Component for the sidebar functionality.
        contexts: A folder that contains state management with contexts:
            CartContext.js: Context for managing the shopping cart.
            ProductContext.js: Context for managing the list of products.
            SidebarContext.js: Context for managing the sidebar state.
```
```
RELATIONSHIP  BETWEEN FILES:
- Context Providers:
The contexts (CartContext, ProductContext, and SidebarContext) are established at the root level in index.js.
This allows all components to access the shared state they provide.
- Component Communication:
Components like Header, Sidebar, and CartItem access the CartContext to retrieve and modify cart-related data.
Product and ProductDetails components use ProductContext to get the list of products and details about individual products.
- State Management:
When a user interacts with the UI (like adding items to the cart), the respective context provider updates the state.
This triggers a re-render of all components that depend on that state, ensuring the UI is always up-to-date.
- Routing:
App.js sets up the routing between different components, such as navigating from the home page to product details.
This navigation is managed with react-router-dom, ensuring a smooth user experience.
```
```
SUMMARY
This project structure provides a clear separation of concerns, where contexts manage state and components handle presentation.
Each file plays a distinct role, ensuring the application is modular and easy to maintain.
Using context providers helps in avoiding prop drilling and makes the application scalable as more features are added.
```
