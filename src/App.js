import { useEffect, useState } from 'react';
import './App.css';
import Gender from './Componet/Gender/Gender';
import Searche from './Componet/Search/Search';
import axios from 'axios';
import SubCategory from './Componet/SubCategory/SubCategory';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [manCategory, setManCategory] = useState([])
  const [womanCategory, setWomanCategory] = useState([])
  const [manSubCategory, setManSubCategory] = useState([])
  const [womanSubCategory, setWomanSubCategory] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  // const [filterid, setFilterid] = useState("")
  useEffect(() => {
    axios.get('http://localhost:3000/man').then((response) => {
      setManCategory(response.data);
    }).catch(error => {
      // setError(error.message)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/woman').then((response) => {
      setWomanCategory(response.data);
    }).catch(error => {
      // setError(error.message)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/manSub_Category').then((response) => {
      setManSubCategory(response.data);
    }).catch(error => {
      // setError(error.message)
    })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:3000/womanSub_Category').then((response) => {
      setWomanSubCategory(response.data);
    }).catch(error => {
      // setError(error.message)
    })
  }, [])

  // useEffect(() => {
  //   setManSubCategory([])
  //   axios.get(`http://localhost:3000/man/${filterid}`).then((response) => {
  //     setManSubCategory(response.data)
  //   }).catch(error => {
  //     // setError(error.message)
  //   })

  // }, [filterid])

  // function filterID(id) {
  //   return setFilterid(id)
  // }

  function addManCategory(title, imgUrl) {
    axios.post("http://localhost:3000/man/", {
      title: title,
      imgUrl: imgUrl,
    })
      .then((response) => {
        setManCategory((manCategory) => [...manCategory, response.data])
      });
  }


  function addWomanCategory(title, imgUrl) {
    axios.post("http://localhost:3000/woman/", {
      title: title,
      imgUrl: imgUrl,
    })
      .then((response) => {
        setWomanCategory((womanCategory) => [...womanCategory, response.data])
      });
  }





  return (
    <div className="App">
      <Searche />
      <Gender addWomanCategory={addWomanCategory} womanCategory={womanCategory} manCategory={manCategory} addManCategory={addManCategory} />
      <SubCategory manSubCategory={manSubCategory} womanSubCategory={womanSubCategory} />

    </div>
  );
}

export default App;
