import './UserInput.css';
const UserInput = (props) => {
  return(
    <div>
      <input type="text" 
             onChange={props.onChange} 
             value={props.userName} 
             className="UserInput" />
    </div>
  )
}

export default UserInput;