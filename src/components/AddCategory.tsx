import { Dispatch, SetStateAction, useState,useRef } from "react"

interface Props {
  onNewCategory : Function
}


export const AddCategory : React.FC<Props> = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState("")
    const firstRef = useRef(null);

    const onInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(event.target.value)
        //console.log(inputValue)
       
        
    }
    const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const newInputValue = inputValue.trim()
        if (newInputValue.length <=1) return;

        //setCategories(categories => [inputValue, ...categories])
        onNewCategory(newInputValue); 
        setInputValue('');   
    }   

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          ref={firstRef}
          id="first_name"
          type="text"
          placeholder="Buscar gif"
          value={inputValue}
          onChange={onInputChange}
          name="category"
        />
      </form>
    </>
  );
}



