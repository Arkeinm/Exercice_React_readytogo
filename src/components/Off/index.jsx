import "./off.css";

function Off(props) {
  const handleClick = () => {
    props.setSwitch(false);
  };
  return (
    <>
      {!props.switch ? (
        <span onClick={handleClick} className="offClicked">
          OFF
        </span>
      ) : (
        <span onClick={handleClick} className="offNoClicked">
          OFF
        </span>
      )}
    </>
  );
}

export default Off;
