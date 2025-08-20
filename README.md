# Assignment 6 - Node.js Web Application

## Project Overview
This is a Node.js web application that serves static HTML pages. The application includes a server setup with routing capabilities and serves multiple HTML pages including home, about, contact, and 404 error pages.

## Screenshots
Here are some screenshots of the application:

### Terminal View
![Terminal View](./screenshots/Screenshot%202025-08-19%20185944.png)

### Home Page
![Home Page](./screenshots/Screenshot%202025-08-20%20124612.png)

### About Us Page
![About Us Page](./screenshots/Screenshot%202025-08-20%20124647.png)

### Contact Page
![Contact Page](./screenshots/Screenshot%202025-08-20%20124706.png)

### 404 Error Page
![404 Error Page](./screenshots/Screenshot%202025-08-20%20124720.png)

## Project Structure
```
├── Html-files/
│   ├── home.html          # Main landing page
│   ├── about.html         # About us page
│   ├── contact.html       # Contact information page
│   ├── 404.html          # Error page for 4
server/
│       ├── server.js      # Main server 
│       └── routes.js      # Route definitions
├── screenshots/           # Application screenshots
├── package.json          # Project configuration and dependencies
└── README.md            # Project documentation
```

## Features
- **Static File Serving**: Serves HTML, CSS, and JavaScript files
- **Multiple Routes**: Handles different URL paths
- **Error Handling**: Custom 404 error page
- **Responsive Design**: HTML pages are designed to be responsive
- **Node.js Framework**: Built using Node.js for robust web server functionality

## Technologies Used
- **Node.js**: JavaScript runtime environment
- **HTML5**: Markup language for web pages
- **CSS3**: Styling for web pages
- **JavaScript**: Client-side scripting

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Aniket78072/assingnment-6.git
   cd assingnment-6
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the server**:
   ```bash
   npm start
   ```

4. **Access the application**:
   Open your browser and navigate to `http://localhost:3000`

## Available Routes
- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- Any other route - 404 error page

## Server Details
- **Port**: 3000 (default)
- **Framework**: Node.js
- **Static Files**: Served from Html-files directory

## Author
Aniket78072
