import React from "react";
import { Pane } from "evergreen-ui";
import { Link } from "react-router-dom";
import { Button } from "../../../styles/Button.styles";

export default function Title() {
  return (
    <Pane>
      <Link to={{ pathname: "/" }} style={{ textDecoration: "none" }}>
        <img src="/name.svg" height="90px" width="auto" />
      </Link>
    </Pane>
  );
}
