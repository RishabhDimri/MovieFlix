<h1>
  <br>
  <img src="https://github.com/user-attachments/assets/fa892f19-2ba3-4cf7-ae5a-d9a23739e7a9" alt="image" width="100">
  <br>MovieFlix
  <br>
</h1>

A sleek React Native application designed to provide a Netflix-like experience, allowing users to browse, search, and view details of movies. The app uses the TVMaze API for fetching movie data and includes multiple screens for seamless navigation.

## Features

- **Splash Screen**: A visually appealing introductory screen with a theme-appropriate image.
- **Home Screen**:
  - Displays a list of movies fetched from the API endpoint: `https://api.tvmaze.com/search/shows?q=all`.
  - Shows each movie's thumbnail, title, and summary.
  - Clicking on a movie navigates to the **Details Screen**.
  - Includes a search bar that redirects to the **Search Screen**.
- **Search Screen**:
  - Search bar allows users to search for any movie.
  - Uses the API endpoint: `https://api.tvmaze.com/search/shows?q={search_term}`.
  - Displays search results similar to the Home Screen.
- **Details Screen**:
  - Shows comprehensive details of a selected movie, including image, title, summary, and other metadata.
- **Bottom Navigation**:
  - Allows users to switch between the Home and Search screens easily.

## App Preview

 # Splash Screen:-
<img width="375" height="667" alt="image" src="https://github.com/user-attachments/assets/312581df-15a6-47fc-a836-81c697a6705d"/>
 
 # Home Screen:- 
<img width="375" height="667" alt="image" src="https://github.com/user-attachments/assets/2e4798c6-c42d-4fd5-99a8-e534bddd40bf"/>

 # Search Screen:-
 <img width="375" height="667" alt="image" src="https://github.com/user-attachments/assets/f59e9a3a-31b2-4ac8-9c9a-060799392bfc"/>
 
 # DetailScreen:- 
 <img width="375" height="667" alt="image" src="https://github.com/user-attachments/assets/614db539-66a1-4b67-9f16-da850e3e3509"/>
  
  # DetailScreen:- 
<img width="375" height="667" alt="image" src="https://github.com/user-attachments/assets/bb1a6b86-bd0d-4cc8-a9e7-131e4ce982a6"/>

## Tech Stack

- **React Native**: Frontend framework for building cross-platform mobile apps.
- **API**: TVMaze API for movie data.
- **Navigation**: React Navigation for screen transitions and bottom navigation.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/RishabhDimri/MovieFlix.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-native-movie-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Run the app on an emulator or a physical device:
   - For iOS:
     ```bash
     npx react-native run-ios
     ```
   - For Android:
     ```bash
     npx react-native run-android
     ```

## API Endpoints

- **Get all movies**: `https://api.tvmaze.com/search/shows?q=all`
- **Search movies**: `https://api.tvmaze.com/search/shows?q={search_term}`

## Screens Overview

1. **Splash Screen**:
   - Displays a full-screen image representing the app's theme.

2. **Home Screen**:
   - Fetches and displays movies from the API.
   - Includes a search bar that redirects to the Search Screen.
   - Each movie card is clickable and navigates to the Details Screen.

3. **Search Screen**:
   - Includes a functional search bar for querying movies.
   - Displays results in the same format as the Home Screen.

4. **Details Screen**:
   - Displays detailed information about a selected movie, including an image, title, summary, and additional metadata.

## Folder Structure

```
MovieApp/
│
├── src/
│   ├── screens/
│   │   ├── SplashScreen.js
│   │   ├── HomeScreen.js
│   │   ├── SearchScreen.js
│   │   ├── DetailsScreen.js
│   ├── assets/
│   │   ├── home_24dp_E8EAED.png
│   │   ├── search_24dp_E8EAED.png
│   ├── navigation/
│   │   ├── MainStackNavigation.js 
│   │   ├── AppNavigator.js 
│   │   ├── BottomTabNavigator.js  
├── App.jsx 
└── package.json
```

## Dependencies

- **React Native**
- **React Navigation**
- **Axios** (for API calls)
- **TVMaze API**

## Future Enhancements

- Add user authentication.
- Allow users to save favorite movies.
- Implement offline mode with local storage.

