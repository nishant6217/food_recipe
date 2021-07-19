import React, { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Axios from "axios";

function App() {
  const [search, setSearch] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const APP_ID = "5bcef93d";
  const APP_KEY = "191ed0c54ade65c59320c44d9beb5598";
  useEffect(() => {
    getRecepies();
  }, []);
  const getRecepies = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    console.log(res.data);
    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSearch(e.target.value);
  };
  const onSearchClick = () => {
    getRecepies();
  };
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
      <div className="container">
        <Recipe recipes={recipes} />
      </div>
    </div>
  );
}

export default App;
