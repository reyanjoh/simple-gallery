
import './App.css';
import useFetch from './util/useFetch';


function App() {

  const url = `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}`;

  
  const {data , isLoading, err} = useFetch(url);

  // console.log(data);
  
  return (
    <div className="App">
      {err && <div>{err}</div>}
      {isLoading && <div>Loading . . .</div>}
      {data && data.map((data)=>{
          return(<img alt={data.alt_description} key={data.id} src={data.urls.small}/>)
      })}
    </div>
  );
}

export default App;
