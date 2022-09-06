import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Wicked', 'Waitress']);
  const onAddCategory = (category) => {
    if(categories.includes(category)) return;
    setCategories(categories=>[category, ...categories]);
  }

  return (
    <>
        <h1>GiffExpertApp</h1>

        <AddCategory
          onAddCategory={onAddCategory}
        />

        <ol>
          {
            categories.map(category=>{
              return(
                <li
                  key={category}
                >{ category }</li>
              )
            })
          }
        </ol>
    </>
  )
}
