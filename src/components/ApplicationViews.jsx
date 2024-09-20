import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Authorized } from "./Authorized";
import { Login } from "../pages/Login.jsx";

import { Register } from "../pages/Register.jsx";
import { GameList } from "../pages/GameList.jsx";
import { NewGameForm } from "../pages/NewGameForm.jsx";
import { MyGames } from "../pages/MyGames.jsx";
import { Home } from "../pages/Home.jsx";
import { GameDetails } from "../pages/GameDetails.jsx";

export const ApplicationViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/" element={<Home />} />
          <Route path="/allgames" element={<GameList />} />
          <Route path="/addgame" element={<NewGameForm />} />
          <Route path="/mygames" element={<MyGames />} />
          <Route path="/gamedetails/:gameId" element={<GameDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
