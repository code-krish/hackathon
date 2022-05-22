import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import PizzaCard from '../components/PizzaCard/PizzaCard';
import '../PizzaData'
import pizzas from '../PizzaData';

function Home() {
    const [item, setitem] = useState([]);
    async function  fetchData() {
        try {
         let products =  await axios.get("http://localhost:3001/product/get",{
           headers : {
            Authorization : window.localStorage.getItem("myapptoken")
           }
         });
          setitem(products.data);
          console.log(products.data)
         
        } catch (error) {
          alert("error")
        }
      }

      useEffect(() => {
        fetchData()
       }, [])

  return (
      <>
      <Navbar state1 = {true} />
       <div className="row">
        {
            pizzas.map((item) => {
                return <div className="col-md-4">
                    <div>
                        <PizzaCard pizza = {item}/>
                    </div>
                </div>
            })
        }
    </div>
      </>
   
  )
}

export default Home