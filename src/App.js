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
  const [valuePrice,setValuePrice] = useState([])
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
      .then(() => {
        setManCategory(manCategory.filter((category) => {
          return category.id !== id
        }))
      });
  }

  function deleteWomanCategory(id) {
    axios.delete(`http://localhost:3000/woman/${id}`)
      .then(() => {
        setWomanCategory(womanCategory.filter((category) => {
          return category.id !== id
        }))
      });
  }

  function deleteProdcut(id) {
    axios.delete(`http://localhost:3000/product/${id}`)
      .then(() => {
        setProduct(product.filter((category) => {
          return category.id !== id
        }))
      });
  }

  function deleteManSubCategory(id) {
    axios.delete(`http://localhost:3000/manSub_Category/${id}`)
      .then(() => {
        setManSubCategory(manSubCategory.filter((category) => {
          return category.id !== id
        }))
      });
  }

  function deleteWomanSubCategory(id) {
    axios.delete(`http://localhost:3000/womanSub_Category/${id}`)
      .then(() => {
        setWomanSubCategory(womanSubCategory.filter((category) => {
          return category.id !== id
        }))
      });
  }


  // Edit

  function editManCategory(id, editManCategory) {

    // console.log(id,editManCategory);
    axios.put(`http://localhost:3000/man/${id}`, editManCategory)

      .then((response) => {
        setManCategory(manCategory.map((category) => {
          if (category.id === response.data.id) {
            return response.data
          } else {
            return category
          }
        }))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function editManSubCategory(id, editManSubCategory) {
    axios.put(`http://localhost:3000/manSub_Category/${id}`, editManSubCategory)

      .then((response) => {
        setManSubCategory(manSubCategory.map((category) => {
          if (category.id === response.data.id) {
            return response.data
          } else {
            return category
          }
        }))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function editProduct(id, editProduct) {
    axios.put(`http://localhost:3000/product/${id}`, editProduct)
      .then((response) => {
        setProduct(product.map((category) => {
          if (category.id === response.data.id) {
            return response.data
          } else {
            return category
          }
        }))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function filterPriceFunc(filterPrice){
    return  setValuePrice(filterPrice)
  } 
  

  return (
    <div className="App">
      <Searche />
      <Gender filterPriceFunc={filterPriceFunc} editManCategory={editManCategory} deleteWomanCategory={deleteWomanCategory} deleteManCategory={deleteManCategory} addProduct={addProduct} addWomanCategory={addWomanCategory} womanSubCategory={womanSubCategory} manSubCategory={manSubCategory} womanCategory={womanCategory} manCategory={manCategory} addManCategory={addManCategory} />
      {searchParams.get('category') && <SubCategory editManSubCategory={editManSubCategory} deleteWomanSubCategory={deleteWomanSubCategory} deleteManSubCategory={deleteManSubCategory} manSubCategory={manSubCategory} womanSubCategory={womanSubCategory} addManSubCategory={addManSubCategory} addWomanSubCategory={addWomanSubCategory} />}
      {searchParams.get("category") && searchParams.get("subCategory") && <Product valuePrice={valuePrice} editProduct={editProduct} deleteProdcut={deleteProdcut} product={product} />}
      {searchParams.get("search") && <Product valuePrice={valuePrice} editProduct={editProduct} product={product} />}
      {/* {!!searchParams.get("category") && !!searchParams.get("subCategory")  ? undefined : <Product product={product} />} */}

    </div>
  );
}

export default App;
