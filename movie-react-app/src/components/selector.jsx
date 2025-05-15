
function MovieSelector() {
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        // Simulate an API call
        setTimeout(() => {
            setMovie("Sunny, 75°F");
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <div>
            <div>
                {isLoading ? <p>Loading movies...</p> : <p>Top Movie: {movie}</p>}
            </div>
            <div id="genre-dropdown">
                <select>
                    <option value="select-fantasy">fantasy</option>
                    <option value="select-action">action</option>
                    <option value="select-sci-fi">sci-fi</option>
                </select>
            </div>
        </div>
    );
}

export default MovieSelector;