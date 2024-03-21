import "./reset.css";

function Reset(props) {
  const { switch1, setSwitch1, switch2, setSwitch2, switch3, setSwitch3 } =
    props.props;
  const handleClick = () => {
    setSwitch1(false);
    setSwitch2(false);
    setSwitch3(false);
  };
  return (
    <>
      {!switch1 && !switch2 && !switch3 ? (
        <h2 className="red reset" onClick={handleClick}>
          Reset
        </h2>
      ) : (
        <h2 className="green reset" onClick={handleClick}>
          Reset
        </h2>
      )}
    </>
  );
}

export default Reset;
