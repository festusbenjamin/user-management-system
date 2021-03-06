import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';
import './AddEdit.css';
import { toast } from 'react-toastify';

const initialState ={
    name: '',
    email: '',
    contact: ''
}

const AddEdit = () => {
    const [state, setstate] = useState(initialState);

    const {name, email, contact} = state;

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name || !email || !contact) {
            toast.error("Fill all the required fields")
        }else{
            if(!id){
                axios.post("http://localhost:3200/api/post", {
                name,
                email,
                contact
            }).then(() => {
                setstate({name: "", email: "", contact: ""});
            }).catch((err) => toast.error(err.response.data));
            toast.success("Contact added successfully");
            }else{
                axios.put(`http://localhost:3200/api/update/${id}`, {
                name,
                email,
                contact
            }).then(() => {
                setstate({name: "", email: "", contact: ""});
            }).catch((err) => toast.error(err.response.data));
            toast.success("Contact updated successfully");
            }
            
            setTimeout(() => navigate('/'), 500);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setstate({ ...state, [name]: value })
    };

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3200/api/getuser/${id}`)
        .then((response) => setstate( ...response.data ))
    }, [id])

  return (
    <div style={{marginTop: "100px"}}>
          <form style={{
              margin: "auto",
              padding: "15px",
              maxWidth: "400px",
              alignContent: "center"
          }}
          onSubmit={handleSubmit}
          >
          <label htmlFor='name'>Name</label>
          <input 
          type="text" 
          id="name" 
          name="name" 
          placeholder='Your Name ...' 
          value={name || ""} 
          onChange={handleInputChange} 
          />
          <label htmlFor='email'>Email</label>
          <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder='Your Email ...' 
          value={email || ""} 
          onChange={handleInputChange} 
          />
          <label htmlFor='contact'>Contact</label>
          <input 
          type="number" 
          id="contact" 
          name="contact" 
          placeholder='Your contact No. ...' 
          value={contact || ""} 
          onChange={handleInputChange} 
          />
          <input type='submit' value={id ? "Update" : "Save"} />
          <Link to='/' >
              <input type='button' value='Go Back' />
          </Link>
          </form>
    </div>
  )
}

export default AddEdit
