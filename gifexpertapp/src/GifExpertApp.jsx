import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Kiss', 'Iron Maiden'])

 

  return (
    <>
      <h1>GifExpertApp</h1>
      
      <AddCategory setCategories={setCategories}/>

      <ul>
        {
          categories.map( category => {
            return <li key={category} > { category } </li>
          } )
        }
      </ul>

    </>

  )
}
