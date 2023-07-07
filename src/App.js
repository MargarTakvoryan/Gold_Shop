import { useEffect, useState } from 'react';
import './App.css';
import Gender from './Componet/Gender/Gender';
import Searche from './Componet/Search/Search';
import axios from 'axios';
import SubCategory from './Componet/SubCategory/SubCategory';
import { useSearchParams } from 'react-router-dom';
import Product from './Componet/Product/Product';


function App() {
  const [manCategory, setManCategory] = useState([])
  const [womanCategory, setWomanCategory] = useState([])
  const [manSubCategory, setManSubCategory] = useState([])
  const [womanSubCategory, setWomanSubCategory] = useState([])
  const [product, setProduct] = useState([])

  const [searchParams] = useSearchParams()
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

  function addManCategory(title, imgUrl) {
    axios.post("http://localhost:3000/man/", {
      title: title,
      imgUrl: imgUrl,
    })
      .then((response) => {
        setManCategory((manCategory) => [...manCategory, response.data])
      })
      .catch((err) => {
        console.log(err.massage);
      })
  }


  function addManSubCategory(name, type) {
    axios.post("http://localhost:3000/manSub_Category/", {
      name: name,
      type: type,
    })
      .then((response) => {
        setManSubCategory((manSubCategory) => [...manSubCategory, response.data])
      });
  }
  function addWomanSubCategory(name, type) {
    axios.post("http://localhost:3000/womanSub_Category/", {
      name: name,
      type: type,
    })
      .then((response) => {
        setWomanSubCategory((womanSubCategory) => [...womanSubCategory, response.data])
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
  // Product Resopnse
  useEffect(() => {
    axios.get('http://localhost:3000/product').then((response) => {
      setProduct(response.data);
    }).catch(error => {
      // setError(error.message)
    })
  }, [])

  function addProduct(porductImgUrl, name, price, genderType, subCategoryType) {
    axios.post("http://localhost:3000/product/", {
      porductImgUrl: porductImgUrl,
      name: name,
      price: price,
      genderType: genderType,
      subCategoryType: subCategoryType
    })
      .then((response) => {
        setProduct((product) => [...product, response.data])
      });
  }

  // Delete 

  function deleteManCategory(id) {
    axios.delete(`http://localhost:3000/man/${id}`)
      .then((response) => {
         setManCategory(manCategory.filter((category) => {
            return category.id !== id
          }))
      });
  }
  // function deleteManSubCategory(id) {
  //   axios.delete(`http://localhost:3000/man/${id}`)
  //     .then((response) => {
  //       manSubCategory(manSubCategory.filter((category) => {
  //           return category.id !== id
  //         }))
  //     });
  // }



  return (
    <div className="App">
      <Searche />
      <Gender deleteManCategory={deleteManCategory} addProduct={addProduct} addWomanCategory={addWomanCategory} womanSubCategory={womanSubCategory} manSubCategory={manSubCategory} womanCategory={womanCategory} manCategory={manCategory} addManCategory={addManCategory} />
      {searchParams.get('category') && <SubCategory manSubCategory={manSubCategory} womanSubCategory={womanSubCategory} addManSubCategory={addManSubCategory} addWomanSubCategory={addWomanSubCategory} />}
      {searchParams.get("category") && searchParams.get("subCategory") && <Product product={product} />}
      {searchParams.get("search") && <Product product={product} />}

    </div>
  );
}

export default App;
