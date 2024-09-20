import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({});
  const { gameId } = useParams();

  const getAndSetAllDetails = async () => {
    const response = await fetch(`http://localhost:8000/games/${gameId}`, {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("rater_token")).token
        }`,
      },
    });
    const games = await response.json();
    setGameDetails(games);
  };

  useEffect(() => {
    getAndSetAllDetails();
  }, []);

  return (
    <>
      <h1>{gameDetails.title}</h1>
      <h3>Designed By: {gameDetails.designer}</h3>
      <h3>Year Released: {gameDetails.release_year}</h3>
      <h3>Number of Players: {gameDetails.players_number}</h3>
      <h3>Estimated Time of Play: {gameDetails.play_time} Minutes</h3>
      <h3>Age Recommendation: {gameDetails.min_age}+ years</h3>
      <h3>
        Categories: {gameDetails.categories?.map((cat) => cat.name).join(", ")}
      </h3>
    </>
  );
};
