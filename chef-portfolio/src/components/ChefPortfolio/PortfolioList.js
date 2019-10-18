import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
    <section className = 'chef-list grid-view'>
    {chef.map(chef =>( 
        <div className = 'chefs' key={chef.id}>
            <img
            className='chef-photo'
            src = {chef.item_photo}
            alt = {chef.chef_name}
            />
            <h2>{chef.chef_name}'s Recipes</h2>
        </div>
        ))}
    
    </section> 
    )
}