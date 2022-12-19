import React from "react";

const Banner = ({ movie }) => {
	console.log("movie가 Banner들어왔나?", movie);
	return (
		<div
			className="banner"
			style={{
				backgroundImage: `url(https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${movie.backdrop_path})`,
			}}
		>
			<div className="bannerInfo">
				<h1>{movie.title}</h1>
				<p className="movieInfo">{movie.overview}</p>
        <button>지금 보러가기</button>
        <p className="appInfo"><img src="../appleicon.png" alt="" />앱에서 시청 가능</p>
			</div>
		</div>
	);
};

export default Banner;
