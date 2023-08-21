// 47d11ac2
// useEffect hook will be use here
import {useEffect , useState} from "react";
import './App.css';
import searchIcon from './search.svg';
import MovieCard from "./movieCard";

const API_URL= 'http://www.omdbapi.com?apikey=47d11ac2'
// we will use the api_url in side the componenet to gather the data of the movies
// we will fetch the data from apikey url  
const App = () => {

  const [searchTerm,setSearchTerm] = useState("");
  //default value of usestate which is an enpty array.
  const [movies, setMovies] = useState([]);

   // use the useEffect hook which excepts the call back function and an anti dependency array in at the 2nd if we only want to call it at the start.
  useEffect(() => {
    // now we can pass data directly into the set movies.
    searchMovies('Batman');
  },[]);

// creating async function to get the asyncronised data of movies 
// the movie is going to searched by it title (like margin call, spiderman ,,,etc..)
  const searchMovies = async (title) => {
// calling the function which will going to fetch the movies
// fetch(`${API_URL}&s=${title}`); this will call/fetch the api_url 
    const response=await fetch(`${API_URL}&s=${title}`);
    // now we have the get the respose 
    const data =await response.json();

    setMovies(data.Search);
  }

  return(
    <div className="app">
      <h1>MovieHub</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {/* fetching the data form omdb api */}
      {/* rendering the information  */}
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            // passing it as a props
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>


  );
}

export default App;   

// //creating a state with importing the usestate 
// import React from 'react';
// // hook function is add with stats
// import {useState , useEffect} from 'react';
// import './App.css';

// const App = () => {
//   const [counter, setCounter] =useState(0);
//   // react state can only be change only using it own set of function.
//   useEffect(() =>{
//     alert('Reload');
//   })

//   return (
//     <div className='App'>
//       {/* as we are setting the setcounter the data will change dinamically */}
//       {/* prevcount(a prameter)  */}
//       {/* introducing event onclick with call back function  */}
//       <button onClick={() => setCounter((prevCount) => prevCount -1 )}>-</button>
//       <h1>{counter}</h1>
//       <button onClick={() => setCounter((prevCount) => prevCount +1 )}>+</button>
//     </div>
//   );
// }

// export default App;

//component and props in react.................
// import './App.css';

// // making a costum component as person
// //every component has a builtin props component
// const Person =(props) => {
//   return(
//     <>
//     {/* we can refference that props object by directly using the (props.) */}
//     <h1>Name: {props.name}</h1>
//     <h2>Last name: {props.lastname}</h2>
//     <h2>hello</h2>
//     </>
//   )
// }

// const App = () => {
//   return (
//     <div className="App">
//       {/* here we are using the person component */}
//       {/* a component can be added many time as much as we want -- and it is one of the advantage of using costume component. */}
//       <Person name= { 'smile'} lastname={'singh'} />
//       {/* we can pass this prop inside the costume componenet */}
//       <Person name= { 'hella'} lastname={'singh'} />

//     </div>
//   );
// }

// export default App;


// import './App.css';

// const App = () => {
//   const name='smile';
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       {/* learning about react fragment<></> */}
//       {name ? (
//         <>
//         test
//         </>
//       ) : (
//         <>
//         <h1>test</h1>
//         <h2>there is no name</h2>
//         </>
//       )
    
//     }
//     </div>
//   );
// }

// export default App;



// import logo from './logo.svg';
// import './App.css';

// functional component are widly used component no more the class based component are used.
// function App() {
  //the code is written in jsx (javascript XML).
  //jsx allows to write HTML in react.
  // return (
    // the simple diff. b/w html and jsx is that you write class in html and in jsx you denote it as classname.
    // <div className="App">
      {/* <header className="App-header">
        {/* inside the {} we can put the any valid javascript expression */}
        {/* so dynamically assigning the image to the logo */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p> */}
          {/* Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        > */}
          {/* Learn React
        </a>
      </header> */}
    // </div>
  // );
// }

// export default App;
