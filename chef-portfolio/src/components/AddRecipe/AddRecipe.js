import React, { useState } from 'react';
import { axiosAuthenticate } from '../axiosAuthenticate/axiosAuthenticate';
import styled from 'styled-components';

const RecipeContainer = styled.div`
  border: blue solid 3px;
  width: 800px;
  height: 100vh;
  margin: 0 auto;
`;

const localChef = localStorage.getItem('username');

const AddRecipe = () => {
  const defaultRecipe = {
    id: '',
    chef_name: localChef,
    recipe_title: '',
    item_photo: '',
    chef_location: '',
    item_ingredients: '',
    user_id: ''
    
  };

const defaultLocalRecipe = {
  recipe_instructions: '',
  cuisine: ''
}

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
        console.log(res);
        setRecipe(defaultRecipe);
        localStorage.setItem('instructions', localRecipe.recipe_instructions);
        localStorage.setItem('cuisine', localRecipe.cuisine);
        setLocalRecipe(defaultLocalRecipe);
      })
      .catch((err) => console.log(err));
  };

  return (
    <RecipeContainer>
      <h1>{localChef}</h1>
      <form onSubmit={handleSubmit}>
        {/* <input
          type='text'
          name='chef_name'
          value={recipe.chef_name}
          onChange={handleChange}
          placeholder="Chef's Name"
        /> */}

        <input
          type='text'
          name='recipe_title'
          value={recipe.recipe_title}
          onChange={handleChange}
          placeholder='Recipe Title'
        />

        <input
          type='url'
          name='item_photo'
          value={recipe.item_photo}
          onChange={handleChange}
          placeholder='Photo URL'
        />

        <input
          type='text'
          name='item_ingredients'
          value={recipe.item_ingredients}
          onChange={handleChange}
          placeholder='Recipe Ingredients'
        />

        <input
          type='text'
          name='cuisine'
          value={localRecipe.cuisine}
          onChange={handleLocalChange}
          placeholder='Cuisine'
        />

<input
          type='text'
          name='chef_location'
          value={recipe.chef_location}
          onChange={handleChange}
          placeholder='Location'
        />

        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          wrap='hard'
          name='recipe_instructions'
          value={localRecipe.recipe_instructions}
          onChange={handleLocalChange}
          placeholder='Recipe Instructions'></textarea>

        <input
          type='text'
          name='id'
          value={recipe.id}
          onChange={handleChange}
          placeholder='User ID'
        />

        <button type='submit'>Add Recipe</button>
      </form>
    </RecipeContainer>
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
