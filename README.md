# Library
## This is a webpage meant for book libraries which stores information of which book is taken by which student in a given school.
## This is how the webpage looks as of now:
![image](https://user-images.githubusercontent.com/82143161/188107672-9229bc6e-9c76-4a3b-943d-3ebb442cd0d9.png)
## Link to webpage: https://faizaan-nasir.github.io/Library/
## How to use this webpage:
- Initially no data is stored and thus the user must first enter all the data in all the fields including the student ID number and the name. 
- To submit the data to be stored, click 'Submit'.
- Once the following message appears, wait for 3 seconds until the page refreshes. msg- "Data Submitted Successfully"
- The user can enter datas of multiple students in the way mentioned above.
- In order for the data to be displayed, the user must only enter the student ID number and click 'Fetch'.
- If the user wished to clear the data, the user must click the 'Clear Data' button.
## Features of this project:
- The 'Date of Issue' is not a mandatory field, the programme figures out the current date and fills the field automatically.
- The data of each student is stored respectively with his student ID number. 
- If the student returns the book after the 'Date of Return' has been crossed, the programme recognizes this.
- The programme automatically calculates the amount to be paid as penalty if the 'Date of Return' has been crossed. 
- This webpage stores information locally on the user's machine only. The same data is not available anywhere else or on anyone else's machine. Even though I'm the author, I cannot see the data stored of this webpage by any other user. 
## Some points to note: 
- All fields except the 'Date of Issue' are mandatory.
- Enter all the dates in the format of dd/mm/yyyy (07/09/2022 instead of 7/9/22). This is necessary as otherwise the programme will fail to work correctly.
- This webpage is not based on a database and stores all the data on local cache. If you wish to use this webpage, clearing your cache on your browser will delete all the data.
- This webpage stores information locally on the user's machine only. The same data is not available anywhere else or on anyone else's machine. This means that you cannot access the same data if you wish to, on some other machine. (subject to changes on future developments)
## From a technical perspective:
- The design of this page is still being worked on.
- I have absolutely no clue on how to work on databases and thus am using windows local storage to store the data. 
- This is based on my school's library management system and may vary from place to place. 
