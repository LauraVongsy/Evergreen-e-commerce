import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  fetch("http://localhost:5000/api/auth/signup", {
    Method: "POST",
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    Body: body,
    Cache: "default",
  });
};
