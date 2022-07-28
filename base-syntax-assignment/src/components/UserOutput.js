const UserOutput = (props) => {
  const style = {
    fontColor: "red",
    font: "inherit"
  };
  return(
    <div className={style}>
      <p>{props.firstText}</p>
      <p>{props.userName}</p>
    </div>
  )
}

export default UserOutput;