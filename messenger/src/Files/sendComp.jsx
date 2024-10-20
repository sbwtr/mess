import { useState } from "react"
import FriendBelt from "./friendBelt"
import SendMess from "./send"
import AddFriendFrom from "./addFriendForm"
import AddButton from "./addButton"
 
function uuid(){
    return Math.random().toFixed(5).slice(2)
}

export default function MainBody(){
    const [history, setHistory] = useState({})
    const [isAdd, setIsAdd] = useState(false)
    const [frKEY, setfrKEY] = useState(0)

    function handleSetfrKEY(value){
        setfrKEY(value)
    }

    function handleIsAdd(){
        setIsAdd(!isAdd)
    }

    function handleAddHistory(name){
        setfrKEY(name)
        setHistory({
            ...history,
            [name]:{id:uuid(), name:name, message:[]}
        })
    }
    function handleUpdateHistory(value){
        const histobj = history[frKEY]
        
        const nexthist = {
            ...histobj,
            message:[...histobj.message, value]
        }

        setHistory({
            ...history,
            [frKEY]:nexthist
        })       

    }

    return (
        <>
        <section className="headTop">
            <FriendBelt data={history} onSelectedHandler={handleSetfrKEY}/> 
            <AddButton onAddNewFriend={handleIsAdd}/>
            {isAdd && <AddFriendFrom onAddNew={handleAddHistory}/>}
        </section>
        
        <section className="add-history">
        
            {Object.keys(history).length !== 0 && 
            history[frKEY].message.map((dt,i)=>
                <div  key={i}>
                    <p className="insert">
                        {dt}
                    </p>
                </div>
            )

            }
      
        </section>
        
        <section className="footer">
            {Object.keys(history).length !== 0 &&
            <SendMess onSendText={handleUpdateHistory}/>}
        </section>
        </>
    )
}