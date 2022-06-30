import {useState, useEffect} from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";

const TopRated = () => {

	const [topRatedFilms, setTopRatedFilms] = useState([]);

	const apiKey = "a2b1c544bd354bf6b85c6fd8afe4479d";
	const baseUrl = "https://api.themoviedb.org/3"
	const baseUrlImage = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		axios.get(`${baseUrl}/movie/top_rated`, {
			params : {
				api_key : apiKey
			}
		}).then((response) => {
			setTopRatedFilms(response.data.results)
		})
	}, []);

	return (
		<>
			<Container>
				<Row className="mt-3">
				<h2>Top Rated</h2>
				{topRatedFilms.map((item, i) => {
					return (
						<Col className="mt-5 col-md-4" key={i}>
							<Card style={{ width: '18rem' }}>
							  <Card.Img variant="top" src={`${baseUrlImage}${item.poster_path}`} />
							  <Card.Body>
							    <Card.Title>{item.title}</Card.Title>
							    <Card.Text>
							    </Card.Text>
							    <Button><Link to={`/film/${item.id}`} className="text-decoration-none text-white">Detail</Link></Button>
							  </Card.Body>
							</Card>
						</Col>
					)
				})}
					
				</Row>
			</Container>
		</>
	

	);
}

export default TopRated;