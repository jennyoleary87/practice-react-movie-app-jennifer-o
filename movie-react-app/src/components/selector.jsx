import { useState } from 'react'

const Movies = {
    fantasy: ["Lord of the Rings", "The Princess Bride", "Harry Potter and the Prisoner of Azkaban"],
    action: ["Raiders of the Lost Ark", "The Ballad of Songbirds and Snakes", "Divergent"],
    adventure: ["Barbie 12 Dancing Princesses", "Barbie Diamond Castle", "Barbie Island Princess"]
}

function MovieSelector() {
    // use states to manage
    const [isLoading, setIsLoading] = useState(false);
    const [movies, setMovies] = useState([]);
    const [selectedGenre, setGenre] = useState("");
    const [error, setError] = useState("");

    //create function to handle changes
    const handleChange = (e) => {
        setGenre(e.target.value);
        setError("");
    };

    const fetch = () => {

        // empty select pops alert and error div
        if (!selectedGenre) {
            setError("Please select a genre before fetching movies");
            return;
        }

        // reset values
        setError("");
        setIsLoading(true);
        setMovies([]);

        setTimeout(() => {
            setMovies(Movies[selectedGenre]);
            setIsLoading(false);
        }, 1500);
    }

    return (
        <div id="all">
            <div>
                <h1>Movie Genre Selector</h1>
            </div>

            {/* dropdown menu to select a genre (e.g., Action, Comedy, Drama) */}
            <div id="genre-dropdown">
                <select id="genre-select" value={selectedGenre} onChange={handleChange}>
                    <option value="">select a genre</option>
                    <option value="fantasy">fantasy</option>
                    <option value="action">action</option>
                    <option value="adventure">adventure</option>
                </select>
            </div>

            <br /><br />

            {/* button to "Fetch Movies" for the selected genre */}
            <button onClick={fetch}>fetch {selectedGenre} movies</button>

            {/*display an error message if no genre is selected*/}
            {error && <p style={{ color: '#FF7F50' }}>{error}</p>}

            <br /> <br />

            {/* show a loading spinner while fetching data */}
            <div>
                {isLoading ? <div>
                    <p>Loading movies...</p>
                    <div id="loader"></div>
                </div> : (
                    // display a list of movies after "fetching."
                    movies.length > 0 && (
                        <div id="list">
                            {/* <p id="genre-intro">movies in {selectedGenre} genre:</p> 
                            ~ chose to do it in the button instead ~ */}
                            <ul>
                                {movies.map((movie, index) => (
                                    <li key={index}>{movie}</li>
                                ))}
                            </ul>
                        </div>
                    )
                )}
            </div>

        </div >
    );
}

export default MovieSelector;