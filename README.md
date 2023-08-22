# React Movie Card Web Application



## Intrduction

The React Movie Card Web Application is a simple web application that allows users to search for movies and view detailed information about them using the OMDB API. This application provides a user-friendly interface for searching for movies by their title and displaying relevant details such as title, year, plot, and poster image.

## Features

- **Movie Search:** Users can search for movies by entering the movie title in the search bar.
- **Movie Details:** The application displays detailed information about the selected movie, including title, year, plot, and poster image.
- **Responsive Design:** The application is responsive and works on both desktop and mobile devices.

## Demo



## Installation

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/smile-1006/MovieCard.git
   ```

2. Change your working directory to the project folder:

   ```bash
   cd MovieCard
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Obtain an OMDB API key by visiting [OMDB API](http://www.omdbapi.com/apikey.aspx) and sign up for a free or paid account.

5. Create a `.env` file in the root directory of the project and add your OMDB API key as follows:

   ```env
   REACT_APP_OMDB_API_KEY=your-api-key-goes-here
   ```

6. Start the development server:

   ```bash
   npm start
   ```

7. Open your web browser and visit `http://localhost:3000` to access the application.

## Usage

1. Enter the name of the movie you want to search for in the search bar.

2. Press the "Search Icon" in the search bar.

3. The application will fetch and display the movie's details, including title, year, plot, and poster image.

## Technologies Used

- React
- OMDB API
- CSS for styling


## Contributing

If you'd like to contribute to this project, please follow these guidelines:

  1. Fork the repository.

  2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`

3. Make your changes and commit them: `git commit -m 'Add new feature'`

4. Push to your branch: `git push origin feature-name`

5. Create a pull request to the `main` branch of the original repository.


## Acknowledgments

- The React community for their valuable resources and contributions.
- The OMDB API for providing movie data.



