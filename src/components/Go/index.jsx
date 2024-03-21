import "./go.css";

function Go(props) {
  const {switch1, switch2, switch3} = props
  return (
    <>
      {switch1 && switch2 && switch3 ? (
        <span className="go goLive">Go !</span>
      ) : (
        <span className="go noGo">No way !</span>
      )}
    </>
  );
}

export default Go;
