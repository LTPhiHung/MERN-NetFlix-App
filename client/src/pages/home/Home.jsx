import React from 'react'
import "./home.scss";
import Navbar from '../../component/navbar/Navbar';
import Featured from '../../component/featured/Featured';
import List from '../../component/list/List';
import { useEffect, useState } from 'react'
import axios from "axios"

const Home = ({type}) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);


  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, 
          {
            headers: {
              token : 
                "token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmVjYTRjZGEwNWIwMjEwNWJkOGJiYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzYwMTcwOCwiZXhwIjoxNjk4MDMzNzA4fQ.qEClZnW03t6W0Pekh95LeDqB28eqQjzMOS0Cx7cVE0A"
            },
          }
        );
        // console.log(res);
        setLists(res.data);
      } catch(err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
        <Navbar />
        <Featured type={type} />
        {lists.map((list, index) => (
          <List list={list} key={index}/>          
        ))}
    </div>
  )
}

export default Home
