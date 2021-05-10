import axios from "axios";
import { useState, useEffect } from "react";
import './App.css';
import Cards from './Components/Cards/Cards';
import Header from './Components/Layout/Header';
import Search from "./Components/Layout/Search";

function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="App">
      <Header />
      <Search getQueryItem={(searchQuery) => setQuery(searchQuery)} />
      <Cards isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
