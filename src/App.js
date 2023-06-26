import { useEffect, useState } from 'react';
import './App.css';
import Gender from './Componet/Gender/Gender';
import Searche from './Componet/Search/Search';
import axios from 'axios';
import SubCategory from './Componet/SubCategory/SubCategory';

function App() {
  const [manCategory, setManCategory] = useState([])
  const [manSubCategory, setManSubCategory] = useState([])
  const [filterid, setFilterid] = useState("")
  useEffect(() => {
    axios.get('http://localhost:3000/man').then((response) => {
      setManCategory(response.data);
    }).catch(error => {
      // setErro  r(error.message)
    })
  }, [])

  useEffect(() => {
    setManSubCategory([])
    axios.get(`http://localhost:3000/man/${filterid}`).then((response) => {
      setManSubCategory(response.data)
    }).catch(error => {
      // setError(error.message)
    })

  }, [filterid])

  function filterID(id) {
    return setFilterid(id)
  }

  function addGenderCategory(title, imgUrl) {
    axios.post("http://localhost:3000/man/", {
      title: title,
      imgUrl: imgUrl,
      sub_Category: []
    })
      .then((response) => {
        setManCategory((manCategory) => [...manCategory, response.data])
      });
  }

  return (
    <div className="App">
      <Searche />
      <Gender manCategory={manCategory} addGenderCategory={addGenderCategory} filterID={filterID} />
      <SubCategory manSubCategory={manSubCategory}/>

    </div>
  );
}

export default App;
