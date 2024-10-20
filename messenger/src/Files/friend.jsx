export default function Friend({friend,onSelected}){
    return (
        <>
        <div className="friend"
        onClick = {()=>onSelected(friend.name)}>
            <p>{friend.name}</p>
        </div>
        </>
    )
}