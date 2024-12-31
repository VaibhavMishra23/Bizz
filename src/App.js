import React, { useState ,useEffect} from 'react';
import './App.css';
import Card from './components/Card';



function App() {
  const[search,setSearch]=useState("india");
  const[newsdata,setNewsdata]=useState(null);
  const API_KEY="05dc36255d254b3085e66a855ac5cf6b";
  const getData = async()=>{
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const data =  await response.json();
    setNewsdata(data.articles);
  }
  useEffect(() => {
    getData();  
  }, [search]);
  function handleinput(e){
    setSearch(e.target.value);
  }
  function handleButton(e){
    setSearch(e.target.name);
  }
  return (
    <div id='block'>
      <nav>
        <div>
          <h1>Bizz</h1>
        </div>
        <div>
          <input type='text' placeholder='search topic'onChange={handleinput}></input>
          <button onClick={getData}>search</button>
        </div>
      </nav>
      <div className='cateBtn'>
      <button name='sports'onClick={handleButton}>Sports</button>
      <button name='politics'onClick={handleButton}>Politics</button>
      <button name='science'onClick={handleButton}>Science</button>
      <button name='entertainment'onClick={handleButton}>Entertainment</button>
      <button name='health'onClick={handleButton}>Health</button>
      </div>
      <div>
      {newsdata ? <Card data={newsdata} /> : <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;