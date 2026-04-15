# Project Management Form using JSONPowerDB

---

## Table of Contents

1. Description
2. Benefits of using JSONPowerDB
3. Scope of Functionalities
4. Examples of Use
5. Getting Started
6. Release History
7. Project Status
8. Sources
9. Author

---

## Description

This project is a web-based Project Management Form built using HTML, CSS, JavaScript, and JSONPowerDB (JPDB). It allows users to manage project records efficiently by performing Create and Update operations with real-time database interaction.

The form uses Project ID as the primary key to determine whether a record should be created or updated. Based on user input, the application dynamically enables or disables form controls and performs validation before interacting with the database.

---

## Benefits of using JSONPowerDB

* Simple and lightweight NoSQL database
* Fast performance due to in-memory data storage
* Schema-free structure using JSON format
* Easy integration with frontend applications
* No need for complex backend setup
* Built-in REST API support for CRUD operations
* Reduces development time significantly

---

## Scope of Functionalities

* Add new project records
* Retrieve existing project data using primary key
* Update existing records using record number (rec_no)
* Reset form to initial state
* Validate user input before submission
* Dynamic UI behavior based on database response

---

## Examples of Use

1. Enter a new Project ID

   * System enables Save option
   * User fills details and saves data

2. Enter an existing Project ID

   * System fetches and displays data
   * User updates information and submits changes

3. Reset button clears all inputs and restores initial state


---

### Run the Application

* Open the project in VS Code
* Run using Live Server
* Or open index.html in a browser

---

## Release History

* v1.0
  Initial release of Project Management Form with JSONPowerDB integration
  Features include Save, Update, Reset, and primary key-based record handling

---

## Project Status

The project is complete and functional as per the given requirements. Further improvements such as UI enhancements and deployment can be added.

---

## Sources

* JSONPowerDB Documentation
* Login2Xplore Resources
* Bootstrap Documentation

---

## Author

Gopala Joshi
