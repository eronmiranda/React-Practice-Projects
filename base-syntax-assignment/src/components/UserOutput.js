const UserOutput = (props) => {
  const style = {
    width: '30%',
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid #eee',
    boxShadow: '0 2px 3px #ccc',
    padding: '8px',
    margin: '16px auto'
  }
  return(
    <div style={style}>
      <p>{props.firstText}</p>
      <p>{props.userName}</p>
    </div>
  )
}

export default UserOutput;