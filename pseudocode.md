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

2. MenuItem
    **Appetizer**
    - Create an appetizer component that creates an appetizer based on the json file from the api call.
    - Uses a card that has an image, a description, and a price.
    - 3 Appetizers
    - Price will be given using a random number in a prop
    **Entree***
    - Create an entree component that creates an entree based on the json file from the api call.
    - Uses a card that has an image, a description, and a price
    - 9 Entrees
    - Price will be given using a random number in a prop
    **Desserts**
    - Create an entree component that creates an desserts based on the json file from the api call.
    - Uses a card that has an image, a description, and a price
    - 3 Desserts
    - Price will be given using a random number in a prop

### Functions/Methods

1. Return
    - Used by the app to show the menu. Contains a header with the name, address, and hours. Has sections for appetizers, entrees, and desserts.
    - Feeds a url, value, and image source as props to the menu item.
2. RandomInt
    - Takes the value props and generates a random price for each menu item.
3. CallApi
    - Takes the url props provided by the app and makes the api call to get the item.
    - On response sets the state in the MenuItem constructor.
4. Render
    - Uses the random int method to generate a random price for the item. Takes the source prop to put an image in the card.
    - Takes info from state to populate the item title and item description.
    
### Example

START  

INIT()  

CREATE App
CREATE MenuItem  
  
componentDidMount() =>  
    apiCall() =>  
        this.setState() =>  
            data: response  
  
render() =>  
    card =>  
        this.props.src = Item Image  
        this.state.data[0].name = Item Title  
        this.state.data[0].description = Item Description
        randomInt(this.props.value) = Item price  
  
App return() =>  
    Header  
    Appetizers  
        MenuItem  
        MenuItem  
        MenuItem  
    Entrees  
        MenuItem  
        MenuItem  
        MenuItem  
        MenuItem  
        MenuItem  
        MenuItem  
        MenuItem  
        MenuItem  
        MenuItem  
    Desserts  
        MenuItem  
        MenuItem  
        MenuItem  