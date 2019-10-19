import React, {useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = (props) => {
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        const id = props.match.params.id
        axios
          .get(`https://chef-portfolio-buildweeks-be.herokuapp.com/api/posts/${id}`)
          .then(response => {
              setRecipe(response.data);
              console.log(setRecipe)
          })
          .catch(error =>{
              console.log('The data is not showing',error);
          })
    },[props.match.params.id]);
    
    const { chef_name, item_photo } = recipe;
    return(
        <div className = 'chef_list'>
            <div className = 'chefs'>
                <img 
                src= {item_photo}
                alt={chef_name}
                />
                <button>{chef_name}</button>
            </div>
        </div>
    )
}

export default RecipeList;