import styled from "styled-components";
import Dashboard from "./Dashboard";
import Login from "./login";
import { useState } from "react";

const Container = styled.div``;

export default function Main() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLogin = (status) => {
    setLoggedIn(status);
  };

  if (loggedIn) return <Dashboard />;

  return <Login logged={handleLogin} />;
}
