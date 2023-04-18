import { useState, useEffect } from "react";
import MovieComponent from "../components/movieComponent"
import style from "../movie.module.css";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=download_count');
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);

    }
    useEffect(getMovies, []);
    console.log(movies);
    /*    useEffect(() => {
            fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=download_count')
                .then((response) => response.json())
                .then((json) => {
                    console.log(json);
                    setMovies(json.data.movies);
                    setLoading(false);
                });
    
        });*/

    return (
        <div>
            {loading ? <h1>Loading.ddd...</h1> :
                <div>
                    <div className={style.main_top}>Welcome Movie World~</div>
                    {movies.map((value) => OnlySummaryHave(value)
                        
                    )}
                </div>
            }
        </div>
    );
}

function OnlySummaryHave (value) {
    if (value.summary !== "") {
        return (
            <MovieComponent
                id={value.id}
                key={value.id}
                title={value.title}
                medium_cover_image={value.medium_cover_image}
                summary={value.summary.substring(0,100)+"..."}
                genres={value.genres}
            />
        );
    }
}

export default Home;