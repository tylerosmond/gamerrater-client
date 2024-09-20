import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const GameList = () => {
  const [allGames, setAllGames] = useState([]);

  const getAndSetAllGames = async () => {
    const response = await fetch(`http://localhost:8000/games`, {
      headers: {
        Authorization: `Token ${
          JSON.parse(localStorage.getItem("rater_token")).token
        }`,
      },
    });
    const games = await response.json();
    setAllGames(games);
  };

  useEffect(() => {
    getAndSetAllGames();
  }, []);

  const displayGames = () => {
    if (allGames && allGames.length) {
      return allGames.map((game) => (
        <div key={game.id}>
          <Link to={`/gamedetails/${game.id}`}>{game.title}</Link>
        </div>
      ));
    }
  };

  return (
    <>
      <h1>Game List</h1>
      <button className="button rounded-md bg-blue-700 text-blue-100 p-2 mt-4">
        Register New Game
      </button>
      {displayGames()}
    </>
  );
};
