import React from "react"
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Brain = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;
  background-image: url(./image.png);
  margin-left: 10%;
  margin-top: 1%;
  width: 110px;
  height: 50px;
  left: 188px;
  top: 177px;
`;