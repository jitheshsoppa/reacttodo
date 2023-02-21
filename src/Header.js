import Button from "./Button";
const Header = ({onClick}) => {
    
  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <Button color='green' text='Add' onClick={onClick}/>
    </div>
  );
}

export default Header;
