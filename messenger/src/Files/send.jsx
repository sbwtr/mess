import { useState } from "react"

export default function SendMess({onSendText}){
    const [value, setValue] = useState('')

    function handleInputText(e){
        setValue(e.target.value)
    }

    return (
        <>
        <form 
        style={{marginBottom:"32px"}}
        onSubmit={(e)=>{
            e.preventDefault()
            onSendText(value)}}>
            <textarea name="write" id="write"
            onChange={e=>{
                e.preventDefault()
                handleInputText(e)}}></textarea>
            <button type="submit">Send</button>
        </form>
        </>
    )
}