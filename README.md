# Project Management Form (JSONPowerDB)

A responsive web-based Project Management Form built using HTML, CSS, JavaScript, and JSONPowerDB (JPDB).
This application allows users to create, view, and update project records with real-time database interaction.

---

## Features

* Primary Key Handling (Project ID)

  * Checks if record exists
  * Enables Save or Update accordingly

* Save New Project
  Stores data in JSONPowerDB

* Update Existing Project
  Fetches and updates records using record number (rec_no)

* Reset Functionality
  Clears form and resets state

* Dynamic Form Behavior
  Fields are enabled or disabled based on logic

* Validation
  Prevents submission of empty fields

---

## Tech Stack

* Frontend: HTML, CSS, JavaScript
* Database: JSONPowerDB (JPDB)
* Library: jpdb-commons.js
* UI Framework: Bootstrap

---

## Database Details

| Property      | Value         |
| ------------- | ------------- |
| Database Name | COLLEGE-DB    |
| Relation Name | PROJECT-TABLE |
| Primary Key   | Project-ID    |

---

## Input Fields

* Project ID (Primary Key)
* Project Name
* Assigned To
* Assignment Date
* Deadline

---

## How It Works

1. Enter Project ID
2. The system checks the database

   * If not found: enables Save
   * If found: fetches data and enables Update
3. Perform Save or Update
4. Reset returns the form to its initial state

### Run the Project

* Open the project in VS Code
* Use Live Server
* Or open index.html in a browser

---

## Important Notes

* Run using Live Server instead of file protocol
* Ensure a valid JPDB connection token
* Database and relation are created automatically on first save

---

## Learning Outcomes

* Working with AJAX and API integration
* Understanding NoSQL databases (JSONPowerDB)
* Implementing CRUD operations
* Managing dynamic UI state

---

## Author

Gopala Joshi
