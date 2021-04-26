import React,{useState}from 'react';
import index from './index';

const api={
  Key:"712cb6c444e9bc92578cd7f5340895ff",
  base:"https://api.openweathermap.org/data/2.5/"
};

function App() {

  const[query,setQuery]=useState('');
  const[weather,setWeather]=useState({});

  const search=evt=>{
    if(evt.key==='Enter'){
      fetch(`${api.base}weather?q=${query}&units=metrics&APPID=${api.key}`)
          .then(res=>res.json())
          .then(result=> {
              setWeather(result);
              setQuery('');
              console.log(result);
          });
    }
  };

  const dateBuilder=(d)=>{
    let months=["january","february","march","april","may","june","july","august","september","october","november","december"];
    let days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  };

  return (
    <div className="App">
      <main>
        <div className="search-box">
        <input type="text" className="search-bar" placeholder="Search..."  onChange={e=>setQuery(e.target.value)}
        value={query}
        onKeyPress={search}
        />
        </div>
          <div className="location-box">
            <div className="location">New york city,US</div>
            <div className="date">{dateBuilder(new Date())}></div>
          </div>
        <div className="weather-box">
          <div className="temp">
            15°c
          </div>
          <div className="weather">Sunny</div>
        </div>
      </main>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
