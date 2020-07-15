After reading the specification document I began to define the requirements and how to present those requirements in the UI of the application.

Display a list of inspections that have been completed with the following filters restricting the inspections shown:
- those submitted within a date range
- those executed against a specific area 
- those of a specific inspection type
- those executed against areas within a division

Display the detail of a single inspection, including:
- Who executed the inspection
- When it was submitted
- The score for the inspection (the average of the questions scores)
- A list of the questions
- The answer for each question
- 

The notes below are what I used as the basis of developing the application and what functionality I deemed as vital for demo purposes

### UI to reflect requirements
Table component
- Dropdown filters
    - date range (extra func)
- Responsive considerations
- When clicked open modal to show questions and answers

Login
- Login form
    - Mock login functionality
    - Auth Context Provider around App
- Protected routes
- Logout button (possibly in header)

### Data from API assumptions
- Divisions
- Areas (could be hardcoded)
- Inspection types
- Users
- Completed inspections
    - Answers given
- Question sets
    - Answers

After defining the data types that I would need based on the specs I began writing code to generate mock data which consists of an array of objects with the following shape:
Inspection Object:
```
{
    "division_name": "division_1",
    "area_type_name": "floor",
    "inspection_type_name": "inspection_type_1",
    "username": "Orville Lind DDS",
    "score": 91,
    "id": 24,
    "inspectionDate": "2019-07-27T12:07:24.131Z",
    "answers": [
      {
        "question_id": 1,
        "answer": "answer 3"
      },
      {
        "question_id": 2,
        "answer": "answer 3"
      },
      {
        "question_id": 3,
        "answer": "answer 3"
      },
      {
        "question_id": 4,
        "answer": "answer 3"
      }
    ]
  }
  ```
  
  Question object:
  ```
  {
    "id": 1,
    "question": "Question 1",
    "answers": [
      "answer 1",
      "answer 2",
      "answer 3",
      "answer 4"
    ]
  }
  ```
  
  After initialising the mock data and json server I began developing the UI inside storybook with a focus on the Table component which I would use to present the inspection data and broke up the main pieces of UI functionality into three components:
  - Login Form
  - Filterable Table
  - Dropdown filters
  
Once the components are built in storybook I then implement them into their respective pages where they can be parsed data from the mock API calls.
  
  