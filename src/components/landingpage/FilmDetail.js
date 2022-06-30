import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";
import axios from 'axios';
import { Container, Row, Col, Card, Button, Table } from 'react-bootstrap';



const FilmDetail = () => {
	const params = useParams();
	const [film, setFilm] = useState({});
	const [genres, setGenres] = useState([]);


	const apiKey = "a2b1c544bd354bf6b85c6fd8afe4479d";
	const baseUrl = "https://api.themoviedb.org/3"
	const baseUrlImage = "https://image.tmdb.org/t/p/w500";

	useEffect(() => {
		axios.get(`${baseUrl}/movie/${params.id}`, {
			params : {
				api_key : apiKey
			}
		}).then((response) => {
			setFilm(response.data);
			setGenres(response.data.genres)
		})


	}, []);

	console.log(film)
	return (
		<>
			<Container>
				<Row className="mt-4">
					<Col md={4} className="">
						<img className="w-100" src={`${baseUrlImage}${film.poster_path}`} alt={`{film.original_title}`} />
					</Col>
					<Col md={7} className="">
						<Table className="text-center mb-5 mt-5">
						  <tbody>
						    <tr>
						      <th>Title</th>
						      <td>:</td>
						      <td>{film.original_title}</td>
						    </tr>
						    <tr>
						      <th>Popularity</th>
						      <td>:</td>
						      <td>{film.popularity}</td>
						    </tr>
						    <tr>
						      <th>Release Date</th>
						      <td>:</td>
						      <td>{film.release_date}</td>
						    </tr>
						    <tr>
						      <th>Status</th>
						      <td>:</td>
						      <td>{film.status}</td>
						    </tr>
						    <tr>
						      <th>Genre</th>
						      <td>:</td>
						      <td>{genres.map((genre) => {
						      	return <>{genre.name}, </>;
						      })}</td>
						    </tr>
						  </tbody>
						</Table>
						<p>Description :</p>
						<p>{film.overview}</p>
					</Col>
				</Row>
			</Container>
		</>
	);

}

export default FilmDetail;