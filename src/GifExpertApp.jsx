import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

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

          {
            categories.map(category=>(
              <GifGrid key={category} category={category} />
            ))
          }
    </>
  )
}
