## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

## Deployed App

The application is deployed in vercel.
Open [https://multistep-form-validation.vercel.app/] to view the application.

## How the application works

### Personal Information
-This is the first page you see when you open the application.\
-Fill in all the 3 required fields and proceed to the next page by click the 'Next' button.\
-You will not be able to move to the next page if there are any errors in entering any information.\
-If you see an error message below an input field, make changes accordingly.\
-The Name mus contain minimum 3 characters and the email must be a valid one.\
-When everything is in order, you will be able to proceed to the second page by clicking on the 'Next' Button.

### Address Inforation
-This is the second page of the application where you need to enter information into four fields.\
-The Street Address must contain atleast 5 characters, the city name must contain atleast 3 characters and the zip code must be a valid format(6 digits).\
-You must select the State from a drop down menu option.\
-Since this is a test application, the drop down menu will only consist of 5 states, choose any one.\
-When everything is in order, you wil be able to proceed to the third page by clicking on the 'Next' Button.

### Account Setup
-This is the third page of the application where you need to enter information into 3 fields.\
-The username must contain atleast 3 characters and the password must contain atleast 6 characters.\
-The confirm password field must be equal to the password.\
-When everything is in order, you will be able to submit the form by clicking 'Submit' button.

### Submit Button
-The third page of the form contains a submit button.\
-If you click it and your input doesn't have any errors, then the form will be submitted and a page will open which shows you all the details you entered.

### Note:
-The second page (Address Information) and the third page (Account Setup) contains a previous button which allows us to go to the previous page.
But remember, that if you go to the previous page without saving your information, you will need to fill in the fields again when you come back to that page.\
-How to save the information? Easy! If you click on the 'Next' Button and your input doesn't have any validation errors, then your information will be saved and 
you will be taken to the next page. Then you can go back to the previous page as much as you want and your enterted information won't change as long as you don't
manually change it.\
-Follow the error messages if you enter an invalid input.
