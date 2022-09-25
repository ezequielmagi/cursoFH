import { useState } from "react"

export const AddCategory = ( {setCategories} ) => {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = ( e ) => {
    e.preventDefault()
    setCategories(cat=>[...cat, inputValue])
    setInputValue('')
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ handleChange }
      />
    </form>
  )
}
