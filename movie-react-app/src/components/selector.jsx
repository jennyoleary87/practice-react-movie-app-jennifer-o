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
    const [genre, setGenre] = useState("");
    const [error, setError] = useState("");

    // empty select pops alert and error div

    //create funcs to handle changes
    // Handle genre selection change

    // useEffect(() => {
    //     // Simulate an API call
    //     setTimeout(() => {
    //         setMovie("Jurassic Park, Action");
    //         setIsLoading(false);
    //     }, 2000);
    // }, []);

    return (
        <div>
            <div>
                <h2>Movie Genre Selector</h2>

            </div>
            <div id="genre-dropdown">
                <select id="genre-select"
                    value={genre}>
                    <option value="select-fantasy">fantasy</option>
                    <option value="select-action">action</option>
                    <option value="select-sci-fi">sci-fi</option>
                </select>
            </div>
            <button className="fetch-button">Fetch Movies</button>
            <div>
                {isLoading ? (<Spinner />) : (<ul>
                    {movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>)}
            </div>
        </div >
    );
}

export default MovieSelector;