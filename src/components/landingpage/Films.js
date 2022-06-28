import axios from "axios";
import {useState, useEffect} from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';



const Films = () => {
	const [movies, setMovies] = useState([]);

	const apiKey = "a2b1c544bd354bf6b85c6fd8afe4479d";
	const baseUrl = "https://api.themoviedb.org/3"
	const baseUrlImage = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
			params : {
				api_key : process.env.REACT_APP_TMDB_KEY,
			}
		}).then((response) => {
			setMovies(response.data.results)
		})


	}, [])
	
	return (
		<div>
			<Container>
				<Row className="mt-3">
				{movies.map((movie, i) => {
					return (
						<>
						<Col className="mt-5 col-md-4" key={i}>
							<Card style={{ width: '18rem' }}>
							  <Card.Img variant="top" src={`${baseUrlImage}${movie.poster_path}`} />
							  <Card.Body>
							    <Card.Title>{movie.original_title}</Card.Title>
							    <Card.Text>
									{movie.overview}
							    </Card.Text>
							  </Card.Body>
							</Card>
						</Col>
						</>
					)
				})}
					
				</Row>
			</Container>
		</div>
	)
}


export default Films;