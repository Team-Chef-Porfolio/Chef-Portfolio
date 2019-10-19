import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './ChefPortfolio.css';
import {Link} from 'react-router-dom';
// import {Fromik, Form, Field} from 'formik';

export default function PortfolioList() {
    const [chef, setChef] = useState([]);

    useEffect(() =>{
        axios
        .get('https://chef-portfolio-buildweeks-be.herokuapp.com/api/posts/all/')
        .then(response => {
            setChef(response.data);
        })
        .catch(errors => {
            console.log('The data was not returned',errors)
        })
    }, []);
    console.log(chef)
    return(
    <div className='chef-container'>
        <h1>Portfolios</h1>
    <section className = 'chef-list grid-view'>
    {chef.slice(0,3).map(chef =>( 
        <div className = 'chefs' key={chef.id}>
            <Link className="chef-link" to={ `/portfolio/${chef.chef_name}/${chef.id}`}>
            <img
            className='chef-photo'
            src = {chef.item_photo}
            alt = {chef.chef_name}
            />

            <h2>{chef.chef_name}'s Recipes</h2> </Link>
        </div>
        ))}
    
    </section>
    </div> 
    )
}