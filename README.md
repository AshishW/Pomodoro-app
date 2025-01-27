![Project Thumbnail](images/project_thumbnail.png)

## About the Project

This Pomodoro Timer is a simple web application built using HTML, CSS, and JavaScript. The app helps users manage their time effectively by breaking work into intervals, traditionally 25 minutes in length, separated by short breaks.

### Features

- **Timer Functionality**: The timer counts down from 25 minutes and alerts the user when the session is over.
- **Mood Sounds**: Users can choose from different ambient sounds (light rain, campfire, sea waves) to play in the background while working.
- **Dynamic Backgrounds**: The background changes dynamically based on the selected mood sound.

### How to Use

1. **Start the Timer**: Press the "Start" button to begin the countdown.
2. **Select Mood Sound**: Click on one of the mood buttons to play a background sound and change the background gradient.
3. **Work and Relax**: Focus on your task until the timer rings, then take a short break before starting the next session.

### How It Works

- **HTML Structure**: The HTML file defines the structure of the app, including the timer display, start button, and mood control buttons. Data attributes (`data-sound`) are used to store the paths to the sound files for each mood button.

- **JavaScript Functionality**: The JavaScript file handles the timer logic and user interactions:
    - The `appTimer` function starts the countdown from 25 minutes, updating the display every second and playing a bell sound when the session ends.
    - The `moodPlayerHandler` function changes the background gradient and plays the selected ambient sound when a mood button is clicked. It uses the `data-sound` attribute to get the correct sound file.
