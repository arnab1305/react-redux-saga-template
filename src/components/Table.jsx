import React, { useEffect, useState, useReducer } from "react";
import "./Table.scss";

const userReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_USER":
      return payload;
      break;
    default:
      return state;
  }
};
const INITIAL_STATE = [];

const Table = () => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (response) {
        const json = await response.json();
        dispatch({ type: "FETCH_USER", payload: json });
      }
    } catch (error) {
      return error;
    }
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
