# React Restaurant

User wants to see a menu for a new restaurant. Using an API dynamically render a menu for the user.

### Requirements
1. Generate the restuarant name, address, and hours.
2. Use an Api call.
3. Generate a dynmaic restuarant menu using the following.
    - Choose a specific menu type to display (breakfast, lunch, or dinner)
    - Dynamically render at least 15 menu items.
    - Dynamically generate a unique price for each item.
    - The menu section should display as its own organism.
    - Each menu item should be a molecule.
4. Manage the react component state.

### Data Structures

##### Components
1. Menu/App
    - Render the Restaurant name, location, and hours in a header.
    - Render sections for appetizers, entrees, and desserts.
    - Uses the apptizer, entree, and dessert commponents to render them on the menu.

2. Appetizer
    - Create an appetizer component that creates an appetizer based on the json file from the api call.
    - Uses a card that has an image, a description, and a price.
    - 4 Appetizers
    - Price will be given using a random number in a prop

3. Entree
    - Create an entree component that creates an entree based on the json file from the api call.
    - Uses a card that has an image, a description, and a price
    - 8 Entrees
    - Price will be given using a random number in a prop

4. Desserts
    - Create an entree component that creates an desserts based on the json file from the api call.
    - Uses a card that has an image, a description, and a price
    - 3 Desserts
    - Price will be given using a random number in a prop
















appetizer api call "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/4/4"
entree api call "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/5/8"
dessert api call "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/7/3"