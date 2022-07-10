import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Main from "../Main/Main";
import Header from "../Header/Header";
import HeaderButton from "../HeaderButton/HeaderButton";
import SavedNews from "../SavedNews/SavedNews";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function App() {
  const [loggedIn, setLoggedIn] = React.useState(true);
  const [mainTheme, setMainTheme] = React.useState(false);
  const location = useLocation();
  React.useEffect(() => {
    location.pathname === "/" ? setMainTheme(true) : setMainTheme(false);
  }, [location.pathname]);
  return (
    <div className={`app ${mainTheme && "app__background"}`}>
      <Header theme={mainTheme}>
        <Navigation loggedIn={loggedIn} theme={mainTheme}>
          <HeaderButton loggedIn={loggedIn} theme={mainTheme}/>
        </Navigation>
      </Header>
      <Routes>
        <Route index path="/" element={<Main loggedIn={loggedIn} />} />
        <Route path="/saved-news" element={<SavedNews />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
