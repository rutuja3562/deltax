import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./style.css";
export const Home = () => {
  const [data, setData] = useState([]);
  const [fetchdata, setFetchdata] = useState([]);
  useEffect(() => {
    getData();
    fetchData();
  }, []);
  const getData = async () => {
    const res = await fetch("http://localhost:5000/songs");
    const d = await res.json();
    console.log(d);
    setData(d);
  };

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/artist");
    const d = await res.json();
    console.log(d);
    setFetchdata(d.artist);
  };
  console.log(fetchdata)
  return (
    <div className='home'>
      <div style={{display:"flex",justifyContent:"space-between",margin:"auto",width:"80%",marginBottom:"10px"}}>
        <h4>Top 10 Songs</h4>
        <button style={{padding:"0px 20px 0px 20px"}}>Add Song</button>
      </div>
      <div className='home-one'>
        <table>
          <thead>
            <tr style={{ height: "40px", background: "grey" }}>
              <td>Atwork</td>
              <td>Song</td>
              <td>Date of release</td>
              <td>Artist</td>
              <td>Rate</td>
            </tr>
          </thead>
          {data.map((e) => {
            return (
              <tbody>
                <tr style={{ height: "80px" }}>
                  <img src={e.cover} alt='' />
                  <td>{e.songname}</td>
                  <td>{e.DOR}</td>
                  <td>{e.firstName}</td>
                  <td>{4}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
      <div className='home-two'>
        <h4 className="h4"> Top 10 Artist</h4>
        <table>
          <thead>
            <tr style={{ height: "40px", background: "grey" }}>
              <td>Name</td>
              <td>DOB</td>
              <td>Songs</td>
            </tr>
          </thead>
          {fetchdata.map((e) => {
            return (
              <tbody>
                <tr style={{ height: "80px" }}>
                  <td>{e.name}</td>
                  <td>{e.DOB}</td>
                  <td>{e.bio}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
};
