export default function AddButton({onAddNewFriend}){
    return (
        <>
        <div 
        onClick={onAddNewFriend}
        className="add-friend">
        <p>+</p>
        </div>
        </>
    )
}