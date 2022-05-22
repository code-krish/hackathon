import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

function AdminPannel() {
    const [item, setitem] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [itemId,setItemId] = useState("");
   
    let navigate = useNavigate()
    
  
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
  
    let handleEdit = async (id) => {
      try {
        let productData = await axios.get(`http://localhost:3001/product/update/${id}`,
        {
            headers : {
             Authorization : window.localStorage.getItem("myapptoken")
            }
          });
        console.log(productData.data);
        
        formik.setValues({
          name: productData.data.name,
         
          category : productData.data.category,
          image : productData.data.image,
          description : productData.data.description
        });
        setIsEdit(true);
        setItemId(productData.data._id);
       
        
      } catch (error) {
        alert(error)
      }
    }
  
     let handleDelete = async (id) => {
      try {
        await axios.delete(`http://localhost:3001/product/delete/${id}`,{
            headers : {
             Authorization : window.localStorage.getItem("myapptoken")
            }
          });
        fetchData()
  
  
      } catch (error) {
        alert("Something Went Wrong");
      }
    }
    
  
    const formik = useFormik({
      initialValues: {
        name: "",
        regular : 0,
        medium : 0,
        large : 0,
        category : "",
        image : "",
        description : ""
      },
  
      onSubmit: async (values, { resetForm }) => {
        try {
         if (isEdit){
           
            let response = await axios.put(`http://localhost:3001/product/update/${itemId}`, values, {
                headers : {
                 Authorization : window.localStorage.getItem("myapptoken")
                }
              });
            console.log(response.data)
            fetchData();
            alert(response.data.message);
            setIsEdit(false);
            resetForm()
          } else {
            await axios.post("http://localhost:3001/product/create", values, {
                headers : {
                 Authorization : window.localStorage.getItem("myapptoken")
                }
              });
            alert("Product added successfully");
            fetchData();
            resetForm()
          }
        } catch (error) {
          alert("Something Went Wrong")
        }
      },
    });
  
    let handlelogout = () => {
        window.localStorage.removeItem("myapptoken");
        navigate("/users/adminlogin")
    }
  
   
  
  
  
    return (
      <>
      <Navbar state2 = {true} logout = {handlelogout}/>
       <div className="container">
        <div className="row">
          <div className='col-lg-12'>
             
          </div>
            <div className="col-lg-6">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </div>
              
              <div className="form-group">
                <label>Regular</label>
                <input
                  id="regular"
                  name="regular"
                  type="number"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.regular}
                />
              </div>

              <div className="form-group">
                <label>Medium</label>
                <input
                  id="medium"
                  name="medium"
                  type="number"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.medium}
                />
              </div>

              <div className="form-group">
                <label>Large</label>
                <input
                  id="large"
                  name="large"
                  type="number"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.large}
                />
              </div>

              <div className="form-group">
                <label>Category</label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.category}
                />
              </div>

              <div className="form-group">
                <label>Image</label>
                <input
                  id="image"
                  name="image"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.image}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  id="description"
                  name="description"
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  value={formik.values.description}
                />
              </div>

              <div className="form-group">
                <input
                  type={"submit"}
                  className="btn btn-primary btn-sm ml-3"
                ></input>
              </div>
              </form>
            </div>
          
          <div className="col-lg-12">
          <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  
                  <th scope="col">Category</th>
                  <th scope="col">Image</th>
                  <th scope="col">Description</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  item.map((item) => {
                    return <tr>
                    <th scope="row">#</th>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.image}</td>
                    <td>{item.description}</td>
                   
                    <td>
                      <button className="btn btn-warning btn-sm" onClick={() => handleEdit(item._id)}>Edit</button>
                      <button className="btn btn-danger btn-sm mt-2" onClick={() => handleDelete(item._id)}>Delete</button>
                    </td>
                  </tr>
                  })
                }
              
               
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
     
    );
}

export default AdminPannel;