import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// key 값은 react에 map 필요로하는 것이므로 그 부분에 사용한다.
function MovieComponent({ id, title, medium_cover_image, summary, genres }) {
    return (
        <div>
            <h2><Link to={"/detail/"+id}>{title}</Link></h2>
            <img src={medium_cover_image} alt={title}/>
            <p>{summary}</p>
            <ul>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
        </div>
    );
}

MovieComponent.propTypes = {
    title: PropTypes.string.isRequired,
    mediem_cover_image: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired
}
export default MovieComponent;