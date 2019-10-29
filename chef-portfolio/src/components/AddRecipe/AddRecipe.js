import React, { useState } from 'react';
import { axiosAuthenticate } from '../axiosAuthenticate/axiosAuthenticate';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ChefHeader = styled.h1`
  margin: 30px auto 0;
  font-weight: 900;
  font-size: 2.6rem;
  width: 600px;
  letter-spacing: 0.4rem;
  color: #fa9600;
`;

const MasterColumn = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 90vh;
  max-width: 800px;
  width: auto;
  margin: 0 auto;
`;

const Column1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
  justify-content: space-around;

  li {
    list-style-type: none;
    margin: 0 5px 0 10px;

    input {
      width: 320px;
      height: 45px;
      padding-left: 10px;
      font-size: 1.3rem;
      border: solid 2px #b0b0b0;
    }
  }
`;

const Column2 = styled.div`
  padding-top: 10px;
  li {
    list-style-type: none;
    margin: 0 5px 0 10px;
    p {
      // margin: 0;
      padding: 0;
    }
    #ingredients {
      width: 425px;
      height: 225px;
      border: solid 2px #b0b0b0;
      font-size: 1.2rem;
    }
    #instructions {
      width: 425px;
      height: 360px;
      border: solid 2px #b0b0b0;
      margin-bottom: 5px;
      font-size: 1.2rem;
    }
  }
`;

const localChef = localStorage.getItem('username');
const localId = localStorage.getItem('id')

const AddRecipe = () => {
  const defaultRecipe = {
    id: localId,
    chef_name: localChef,
    recipe_title: '',
    item_photo: '',
    chef_location: '',
    item_ingredients: '',
    user_id: localId
  };

  const defaultLocalRecipe = {
    recipe_instructions: '',
    cuisine: ''
  };

  const [recipe, setRecipe] = useState(defaultRecipe);

  const [localRecipe, setLocalRecipe] = useState(defaultLocalRecipe);

  const handleLocalChange = (e) => {
    setLocalRecipe({ ...localRecipe, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    
    axiosAuthenticate()
    
      .post('/posts/', recipe)
      .then((res) => {
        
        setRecipe(defaultRecipe);
        localStorage.setItem('instructions', localRecipe.recipe_instructions);
        localStorage.setItem('cuisine', localRecipe.cuisine);
        setLocalRecipe(defaultLocalRecipe);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <ChefHeader>Chef {localChef}</ChefHeader>
      <form onSubmit={handleSubmit}>
        <MasterColumn>
          <Column1>
            <li>
              <p>Recipe</p>
              <input
                type='text'
                name='recipe_title'
                value={recipe.recipe_title}
                onChange={handleChange}
              />
            </li>
            <li>
              <p>Location</p>
              <input
                type='text'
                name='chef_location'
                value={recipe.chef_location}
                onChange={handleChange}
              />
            </li>

            <li>
              <p>Cuisine</p>
              <input
                type='text'
                name='cuisine'
                value={localRecipe.cuisine}
                onChange={handleLocalChange}
              />
            </li>

            <li>
              <p>Photo URL</p>
              <input
                type='url'
                name='item_photo'
                value={recipe.item_photo}
                onChange={handleChange}
              />
            </li>
          </Column1>
          <Column2>
            <li>
              <p>Ingredients</p>
              <textarea
                name='item_ingredients'
                id='ingredients'
                cols='30'
                rows='10'
                wrap='hard'
                value={recipe.item_ingredients}
                onChange={handleChange}></textarea>
            </li>
            <li>
              <p>Instructions</p>
              <textarea
                name='recipe_instructions'
                id='instructions'
                cols='30'
                rows='10'
                wrap='hard'
                value={localRecipe.recipe_instructions}
                onChange={handleLocalChange}></textarea>
            </li>

            <button type='submit'>Add Recipe</button>
          </Column2>
        </MasterColumn>
      </form>
    </>
  );
};

export default AddRecipe;

{
  /* <input
        type='text'
        name='id'
        value={recipe.id}
        onChange={handleChange}
        placeholder='ID'
      /> */
}
