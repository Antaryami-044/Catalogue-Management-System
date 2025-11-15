Totle - Topic Search (Frontend Intern Coding Challenge)

Hello! This project is my submission for the Round 1 coding challenge for the Frontend Developer Intern position at Totle.

The task was to build a React component that simulates Totle's topic browsing UI. The component needed to display a list of topic cards and let users filter this list in real-time with a search input.

Features

Dynamic Search: Filters the topic list in real-time as the user types. The search ignores case.

Responsive Topic Cards: Displays the filtered topics in a clean, responsive grid.

Clean UI: A simple, modern design with gradient backgrounds and text effects.

Graceful Handling: If no topics match the search, a clear "No topics found" message appears in the center.

Tech Stack

React: Used to build the component-based UI.

Vite: For a fast, modern development environment.

CSS: A single index.css file for all styling

My Step-by-Step Workflow & Setup

Here is the process I followed to build the project and how you can run it locally.

1. How to Run This Project

Clone the repository:

# Replace this URL with your own repository's link
git clone [https://github.com/your-username/totle-topic-search.git]


Navigate into the project directory:

cd intern-task


Install dependencies:

npm install


Run the application:

# This will start the development server, usually at http://localhost:5173
npm start


2. My Development Process & Code Structure

I followed a standard Vite and React folder structure to keep the code organized and maintainable.

src/components/TopicSearch.jsx: This is the main part of the application. It holds the searchTerm state and manages the filtering logic.

src/data/topics.js: This file simply exports the in-memory array of topic data, as required by the problem statement.

src/index.css: This single CSS file contains all the styling for the app, including the gradients, topic card layout, and responsive grid.

src/App.jsx: This is the main app component that renders TopicSearch in the center of the page.

3. Key Code Decisions

I aimed to meet the requirements and write efficient, clean code.

Performance (useMemo): To improve efficiency, I used the useMemo hook inside TopicSearch.jsx. This ensures that the topic list is only re-filtered when the searchTerm changes, not during every render. For a large list, this is a key performance boost.

Readability (Component Composition): I separated TopicCard into its own small, presentational component. This makes the main TopicSearch.jsx file cleaner and easier to read, as its focus is on state and logic rather than rendering each card's details.

Submission Links

As requested in the submission guidelines, here are the links to my GitHub repository and a 2-minute video walkthrough.

My GitHub Repository:
[PASTE YOUR GITHUB REPOSITORY LINK HERE]

My 2-Minute Code Walkthrough:
[PASTE YOUR LOOM/YOUTUBE VIDEO LINK HERE]