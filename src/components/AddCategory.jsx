import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = ( event ) =>{
        event.preventDefault();
        console.log("event form", event);

        if( inputValue.trim().length < 1 ){
            return;
        }

       /*  setCategories( categories => [ inputValue, ...categories ] ); */

        onNewCategory( inputValue.trim() );

        //reset
        setInputValue('');
    } 

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input 
            type="text"
            placeholder="Buscar gifs"
            value={ inputValue }
            onChange={ (event) => onInputChange(event) }
        />
    </form>
  )
}
