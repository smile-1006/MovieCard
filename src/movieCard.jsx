// when ever we prefered react component we tends to use jsx extention.
import React from 'react';
//excessing the props 
const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
return (
<div className="movie" key={imdbID}>
    <div>
    <p>{Year}</p>
    </div>

    <div>
    <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
    </div>

    <div>
    <span>{Type}</span>
    <h3>{Title}</h3>
    </div>
</div>
);
} 

export default MovieCard;