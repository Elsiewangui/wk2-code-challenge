This code shows a basic shopping list application in HTML and JavaScript.

HTML STRUCTURE.   
   1.Add Item Section: Contains an input field (#item) and buttons (Add Item and Clear Items).
   
   2.List Section: Displays added items within an unordered list (#item-List).
   
   3.Mark Purchased Button: Marks all list items as purchased when clicked.
 

JAVASCRIPT STRUCTURE.
  
   1.DOMContentLoaded Event: Ensures that the JavaScript executes only after the HTML content is fully loaded.
   
   2.addItem Function: Creates a new list item (li) with the text from the input field and appends it to the #item-List.
   
The Event Listeners used are :

1.Add Item: Listens for clicks on the "Add Item" button, adds the item to the list if the input is not empty, and clears the input field afterward.

2.Mark Purchased: Marks all list items as purchased by adding a purchased class which is a blue violet background color to each item .

3.Clear Items: Clears all items from the list when the "Clear Items" button is clicked.

  hosted url:https://elsiewangui.github.io/wk2-code-challenge/
