import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import Trailer from "./Trailer";

const MovieExplain = ({ item, videoId }) => {
  return (
    <div>
      <Container>
        <div className="detail-bg-container">
          <img
            className="detail-bg"
            src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
          />
        </div>
        <Row>
          <Col className="movieContent">
            <img
              className="detail-img"
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
            />
          </Col>
          <Col className="explainBadge">
            {item.genres?.map((item) => (
              <Badge
                className="detailBadge"
                bg="light"
                text="dark"
                key={item.id}
              >
                {item.name}
              </Badge>
            ))}

            <h1 className="explainTitle">{item.title}</h1>
            <p>{item.tagline}</p>
            <div className="explainInfo">
              <span className="star">⭐ {item.vote_average}</span>
              <span>👥 {item.popularity} </span>
              <span className={item.adult ? "r-rated" : "g-rated"}>
                {item.adult ? "🔺 R-rated" : "✔️ G-rated"}
              </span>
            </div>

            <div className="detail-overview">{item.overview}</div>
            <div>
              <Trailer item={videoId} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieExplain;
