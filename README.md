# Task Manager App

A simple and intuitive task management application built with React Native. This app allows users to create, view, update, and delete tasks, helping them stay organized and productive.

## Features

- Create new tasks with titles and descriptions
- Mark tasks as completed
- Delete tasks with a smooth fade-out animation
- Expand task items to view full descriptions
- View all tasks in a separate screen

## Setup Instructions

1. Ensure you have Node.js and npm (Node Package Manager) installed on your system.
2. Install the Expo CLI globally by running:
   ```
   npm install -g expo-cli
   ```
3. Clone this repository to your local machine:
   ```
   git clone https://github.com/yourusername/task-manager-app.git
   ```
4. Navigate to the project directory:
   ```
   cd task-manager-app
   ```
5. Install the project dependencies:
   ```
   npm install
   ```

## Running the App

1. Start the development server:
   ```
   expo start
   ```
2. This will open the Expo DevTools in your default web browser.
3. To run the app on your device:
   - Install the Expo Go app on your iOS or Android device.
   - Scan the QR code displayed in the Expo DevTools using your device's camera.
4. To run the app on an emulator:
   - For iOS (Mac only): Press `i` in the terminal or click "Run on iOS simulator" in the Expo DevTools.
   - For Android: Press `a` in the terminal or click "Run on Android device/emulator" in the Expo DevTools.

## Usage Instructions

- To add a new task, tap the "Add New Task" button at the bottom of the screen.
- Fill in the task title and description in the modal that appears, then tap "Add Task".
- To mark a task as completed, tap the square checkbox next to the task title.
- To view a task's full description, tap on the task item to expand it.
- To delete a task, tap the "X" button on the right side of the task item.
- To view all tasks, tap the "View All Tasks" button at the bottom of the task list.

## Troubleshooting

If you encounter any issues while setting up or running the app, try the following:

1. Ensure all dependencies are correctly installed by running `npm install` again.
2. Clear the npm cache: `npm cache clean --force`
3. Reset the Expo cache: `expo r -c`
4. If using an emulator, try closing and reopening it.

For any persistent problems, please open an issue in the GitHub repository.

## Contributing

We welcome contributions to improve the Task Manager App. Please feel free to submit pull requests or open issues to suggest improvements or report bugs.

## License

This project is licensed under the MIT License. See the LICENSE file for details.