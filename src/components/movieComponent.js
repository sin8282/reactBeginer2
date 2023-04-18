import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "../movie.module.css";

// key ���� react�� map �ʿ���ϴ� ���̹Ƿ� �� �κп� ����Ѵ�.
function MovieComponent({ id, title, medium_cover_image, summary, genres }) {
    return (
        <div className={style.main}>
            <img src={medium_cover_image} alt={title}/>
            <div className={style.main_story}>
                <h2><Link to={"/detail/" + id}>{title}</Link></h2>
                <p>{summary}</p>
                <ul>
                    {genres.map(g => <li key={g}>{g}</li>)}
                </ul>
            </div>
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