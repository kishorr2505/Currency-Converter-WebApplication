#Currency Converter Web Application
This is a simple currency converter web application that allows users to convert an amount from one currency to another using real-time exchange rates. The application uses the ExchangeRate-API to fetch the latest exchange rates.

###Features
Select currencies from a dropdown list with country flags.
Input the amount to convert.
Display the converted amount in the target currency.
Handles errors and displays messages when the exchange rate cannot be fetched.
Installation
Clone the repository:

###bash
Copy code
git clone https://github.com/your-username/currency-converter.git
cd currency-converter
Open the index.html file in your web browser:
Simply double-click the index.html file or open it in your browser of choice.

###Usage
Select the currencies:

Use the dropdown menus to select the currencies you want to convert from and to.
The application will display the flags of the selected countries.
Input the amount:

Enter the amount you want to convert in the input field.
Convert:

Click the "Convert" button to fetch the exchange rate and display the converted amount.
Code Overview
HTML
The HTML structure includes dropdowns for currency selection, an input field for the amount, and a button to trigger the conversion.

JavaScript
Variables
dropdown: Select elements for currency selection.
btn: The "Convert" button.
fromCurr and toCurr: The dropdown elements for the "from" and "to" currencies.
msg: Element to display messages or results.
Functions
updateFlag(element): Updates the flag displayed next to the dropdown based on the selected currency.
updateExchangeRate(): Fetches the exchange rate from the API and calculates the converted amount.
Event Listeners
Dropdown change event: Updates the flags when a different currency is selected.
Button click event: Triggers the conversion process when the button is clicked.
###API
The application uses the ExchangeRate-API to fetch the latest exchange rates.
API:https://v6.exchangerate-api.com/v6/357f27dc68c1c2052b681f7a/pair
