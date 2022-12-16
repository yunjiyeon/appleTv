import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../redux/action/movieAction";
import ClipLoader from "react-spinners/ClipLoader";
import MovieExplain from "../components/MovieExplain";
import Footer from "../components/Footer";

const MovieDetail = () => {
	const { id } = useParams();
	const { detailMovies, loading, trailerVideo } = useSelector(
		(state) => state.movie,
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(movieAction.getDetailMovies(id));
		window.scrollTo(0, 0); //화면 제일 위로 올라간 상태로 열리게
	}, []);

	if (loading) {
		return (
			<div className="loader-container">
        <ClipLoader color='white' loading={loading}size={150}/>
			</div>
		);
	}
	return (
		<div>
			{console.log("detailMovies는?", detailMovies)}
			<MovieExplain item={detailMovies} videoId={trailerVideo} />
			<br />
			<br />
			<h1>영화 리뷰들 넣을곳!!</h1>
			<Footer />
		</div>
	);
};

export default MovieDetail;
