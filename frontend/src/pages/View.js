import React, {useState, useEffect} from 'react';
import {useParams,Link} from 'react-router-dom';
import axios from 'axios';
import './View.css';

const View = () => {
    const [user, setuser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3200/api/getuser/${id}`)
        .then((response) => setuser( ...response.data ))
    }, [id])
  return (
    <div>
    <div style={{marginTop: "150px"}}>
        <div className='card'>
            <div className='card-header'>
                <p>User Contact Details</p>
            </div>
            <div className='container'>
                <strong>ID: </strong>
                <span>{id}</span>
                <br />
                <br />
                <strong>Name: </strong>
                <span>{user.name}</span>
                <br />
                <br />
                <strong>Email: </strong>
                <span>{user.email}</span>
                <br />
                <br />
                <strong>Contact: </strong>
                <span>{user.contact}</span>
                <br />
                <br />
                <Link to='/'>
                    <button className='btn btn-edit'>Go back</button>
                </Link>
            </div>
        </div>
    </div>
    </div>
  )
}
 
export default View