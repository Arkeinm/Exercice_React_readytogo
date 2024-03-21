import "./on.css";

const On = (props) => {
  const handleClick = () => {
    props.setSwitch(true)
  };
  return (
    <>
      {props.switch ? (
        <span onClick={handleClick} className="onClicked">
          ON
        </span>
      ) : (
        <span onClick={handleClick} className="onNoClicked">
          ON
        </span>
      )}
    </>
  );
}

export default On;
