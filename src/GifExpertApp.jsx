import { useState } from "react"

import { AddCategory, GifGrid } from './components'

/* import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid"; */


export const GifExpertApp = () => {

    const [catgories, setCategories] = useState([ 'Flavio', 'Roman' ]);

    const onAddCategory = ( newCategory ) =>{
        
        if( catgories.includes(newCategory) ) return;

        setCategories([ newCategory, ...catgories ]);
    }

  return (
    <>
        <h1>GiftExpertApp</h1>

        <AddCategory 
            /* setCategories={ setCategories } */ 
            onNewCategory={ (event) => onAddCategory(event) }
        />


        { catgories.map( (category) =>(
            <GifGrid 
                key={category} 
                category={ category }
            />
        ))}
    </>
  )
}
