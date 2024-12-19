import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifSearchApp = () => {

    const [categories, setCategories] = useState(['Angel Beats']);  

    const onAddCategory = (value) => {

        if (categories.includes(value)) return;
        setCategories([value, ...categories]);
    }
    
    return (
        <>
    <h1>Getting GIFs</h1>

    <AddCategory onNewCategory = {onAddCategory}/>

    {categories.map(category => (
        <GifGrid 
            key = {category} 
            category = {category} 
        />)
    )}
          
    </>
  )
}                                                   

