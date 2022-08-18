import { useState } from "react"
import {AddCategory, GifGrid} from "./components/index"



const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Rick and Morty'])

  const onAddCategory = (newCategory:string) => {
    console.log(newCategory)
    const categoriesLowerCase = categories.map(category=>category.toLowerCase())
    const newCategoryLowerCase = newCategory.toLowerCase()
    if (categoriesLowerCase.includes(newCategoryLowerCase))return;
    setCategories([newCategory,...categories])
    //setCategories(cat => [...categories,'Valorant'])
  }

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory onNewCategory={(value: string) => onAddCategory(value)} />
      
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
     
    </>
  );
}

export default GifExpertApp