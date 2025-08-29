# Criminal Record Database

A simple web-based system for managing and viewing criminal records. This project provides HTML interfaces for interacting with data about crimes, criminals, officers, and cases, along with SQL scripts for database setup and data management.

## Features

- **Admin Dashboard:** Centralized control panel for managing the database.
- **Case Management:** Add, view, and update case records.
- **Crime Records:** Track and manage crime details.
- **Criminal Profiles:** Maintain information about individuals involved in crimes.
- **Officer Directory:** Manage officer assignments and details.

## Project Structure

| File/Folder                | Description                                 |
|----------------------------|---------------------------------------------|
| `index.html`               | Home page                                   |
| `admin.html`               | Admin dashboard                             |
| `cases.html`               | Manage and view cases                       |
| `crimes.html`              | Manage and view crimes                      |
| `criminals.html`           | Manage and view criminals                   |
| `officers.html`            | Manage and view officers                    |
| `creat crimes.txt`         | SQL script to create crimes table           |
| `creat criminals.txt`      | SQL script to create criminals table        |
| `creat officers.txt`       | SQL script to create officers table         |
| `insert crimes.txt`        | SQL script to insert crime records          |
| `insert criminals.txt`     | SQL script to insert criminal records       |
| `insert officers.txt`      | SQL script to insert officer records        |
| `view crimes.txt`          | SQL script to view crime records            |
| `view officers.txt`        | SQL script to view officer records          |

## Getting Started

1. **Database Setup:**  
    - Open your SQL client (such as MySQL Workbench, pgAdmin, or the command line).
    - Run the `creat crimes.txt`, `creat criminals.txt`, and `creat officers.txt` scripts to create the required tables.

2. **Insert Sample Data:**  
    - Execute the `insert crimes.txt`, `insert criminals.txt`, and `insert officers.txt` scripts to populate the tables with sample records.

3. **View Data:**  
    - Use the `view crimes.txt` and `view officers.txt` scripts to query and display data from the database.

4. **Web Interface:**  
    - Open `index.html` in your web browser to access the home page.
    - Navigate to `admin.html`, `cases.html`, `crimes.html`, `criminals.html`, or `officers.html` for specific management tasks.

5. **Supabase Integration:**  
    - To connect the project to Supabase (a hosted Postgres backend), add your Supabase project URL and API key to your application's configuration file or environment variables.
      - **Supabase URL:** Your project’s unique API endpoint (e.g., `https://your-project.supabase.co`)
      - **Supabase Key:** Your project's API key (found in the Supabase dashboard under Project Settings > API > anon/public key)
    - Ensure you never commit your API keys or sensitive credentials to public repositories.
    - Update your frontend code to use the Supabase client library for database operations if you wish to use Supabase as your backend.

**Note:**  
If you use a different SQL database, adjust the scripts as needed for compatibility.

Ensure these credentials are kept secure and not exposed in public repositories.

## Requirements

- A web browser (for HTML files)
- SQL database (compatible with provided scripts)

## Author

- android-013

