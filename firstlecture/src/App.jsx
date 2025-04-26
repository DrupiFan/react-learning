import { useState } from 'react';
import "./App.css";
import Card from './Card';

const users = [
  {
    username: "Saba",
    img: "https://i.pinimg.com/736x/be/a3/49/bea3491915571d34a026753f4a872000.jpg",

  },
  {
    username: "Anri",
    img: "https://i1.sndcdn.com/avatars-000339084123-nag0p1-t1080x1080.jpg",
  },
  {
    username: "Steve",
    img: "https://i.ytimg.com/vi/RjslriMh3wU/sddefault.jpg?v=63bd6a3e"
  },
  {
    username: "The Rock",
    img: "https://variety.com/wp-content/uploads/2024/01/Dwayne-Johnson_credHuyDoan-e1705977711715.jpg?w=1000&h=667&crop=1"
  },
]
function App() {

  return (
    <>
      {users.map((user, i) => (
          <Card
            key = {i}
            username = {user.username}
            img = {user.img}
          />
        ))}
    </>
  );
}

export default App;
