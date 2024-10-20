import { useState } from "react"

export default function AddFriendFrom({onAddNew}){
    
    const[name, setName] = useState('')

    function handleName(e){
        setName(e.target.value)
    }
      
    return (
        <form onSubmit={(e)=>{
            e.preventDefault()
            onAddNew(name)}}>
        <label htmlFor="name">Add Friend</label>
        <input type="text"
        onChange={(e)=>{
            e.preventDefault()
            handleName(e)}} />
            <button type="submit">Add Friend</button>
            </form>
    )
}