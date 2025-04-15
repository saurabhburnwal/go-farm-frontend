import styled from "styled-components";
import Dashboard from "./Dashboard";
import Login from "./login";
import { useEffect, useState } from "react";

const Container = styled.div``;

export default function Main() {
  const [loggedIn, setLoggedIn] = useState(true);
  const handleLogin = (status) => {
    setLoggedIn(status);
  };
  useEffect(() => {
    const user = localStorage.getItem("goFarmUser");
    if (user) {
      const userData = JSON.parse(user);
      if (userData.token) {
        setLoggedIn(true);
      }
    }else {
      setLoggedIn(false);
    }
  }
  , []);

  if (loggedIn) return <Dashboard />;

  return <Login logged={handleLogin} />;
}
