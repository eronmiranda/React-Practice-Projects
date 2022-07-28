const UserInput = (props) => {
  return(
    <div>
      <input type="text" onChange={props.onChange} value={props.userName}></input>
    </div>
  )
}

export default UserInput;