import Friend from "./friend"

export default function FriendBelt({data, onSelectedHandler}){
    return (
        <>
        <div className="belt">
            {Object.values(data).map(dt=>
                <Friend key={dt.id}
                friend={dt}
                onSelected={onSelectedHandler}/>
            )}

        </div>
       
        </>
    )
}