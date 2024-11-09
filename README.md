![Screenshot 1](./app/src/assets/Screenshots/desktop-edit-feedback.png)
![Screenshot 2](./app/src/assets/Screenshots/desktop-feedback-detail.png)
![Screenshot 3](./app/src/assets/Screenshots/desktop-roadmap.png)
![Screenshot 3](./app/src/assets/Screenshots/desktop-suggestions.png)


# Product Feedback App

This is a **Product Feedback App** built using **ReactJS** and **Context API**. The app allows users to submit feedback on a product, view others' feedback, and upvote/downvote items. It’s designed to provide an interactive and user-friendly interface for managing feedback.

## Features

- **Feedback Submission**: Users can submit feedback on a product, including a title, description,status and category.
- **Category Selection**: Feedback is categorized (e.g., UI, UX, Features) to help organize the feedback.
- **Upvoting/Downvoting**: Users can upvote or downvote feedback submitted by others to indicate which feedback is most important or valuable.
- **Commenting**: Users can leave comments on the feedback submitted by others as well reply to others comments, encouraging interaction and discussion.
- **Sorting Options**: Users can sort feedback based on the number of comments (most or least) and upvotes (most or least), making it easier to find relevant feedback.
- **Roadmap Dashboard**: The app includes a dedicated roadmap dashboard with three sections:
  - **Planned**: Features that are in the planning stage.
  - **In Progress**: Features currently being developed.
  - **Live**: Features that have been implemented and are available to users.
  
  Users can track the status of features and update them as they move from "Planned" to "In Progress" to "Live."
  
- **Interactive Dashboard**: Users can interact with the roadmap by upvoting, downvoting, and commenting on features in any of the roadmap sections.
- **Multiple Views**: Uses **React Router** for navigating between different views, such as the main feedback list, feedback details, and feedback submission forms , and the roadmap dashboard.

## Technologies Used

- **ReactJS**: For building the user interface using components.
- **Context API**: For state management, allowing global state to be shared across components without the need for prop drilling.
- **React Router**: For handling navigation between pages, such as viewing feedback details and submitting new feedback.
- **HTML**: For the basic structure of the app.
- **CSS**: For styling the app, creating a visually appealing and organized user interface.


## How to Run the Project

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/product-feedback-app.git
   cd app
   npm install
   npm start


### Future Enhancements

- **Mobile Responsiveness**: The current application is not optimized for mobile devices. Future updates will include fully responsive layouts to ensure usability across all screen sizes.
- **Backend Integration**: Plans to connect the app with a backend server or API for persistent storage of feedback and user data.
- **User Authentication**: Introduce a login system, allowing users to manage feedback they have submitted.
