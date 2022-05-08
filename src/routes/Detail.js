import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "../movie.module.css";

function Detail() {
    const { id } = useParams();
    const [Movie, setMovie] = useState(null);
    const [Loading, setLoading] = useState(true);
    const getMovie = async () => {
        const json = await (
            await fetch( `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);
        
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(getMovie, []);


    return (
        <div>
            {Loading  ? <h1>Loading</h1> :
                <div>
                    <h1 className={style.title}> {Movie.title}</h1>
                    <img src={Movie.medium_cover_image} alt={Movie.title}/>
                    <ul>
                        {Movie.genres.map(g => <li key={g} className={style.genres}>{g}</li>)}
                    </ul>
                </div>
            }
        </div>
    );
}
export default Detail;