import "./content.css";
import On from "../On";
import Off from "../Off";
import Go from "../Go";
import Reset from "../Reset";

function Content(props) {
  const { switch1, setSwitch1, switch2, setSwitch2, switch3, setSwitch3 } =
    props;
  const tab = [
    {
      switch: switch1,
      setSwitch: setSwitch1,
    },
    {
      switch: switch2,
      setSwitch: setSwitch2,
    },
    {
      switch: switch3,
      setSwitch: setSwitch3,
    },
  ];
  return (
    <>
      <main className="container">
        <Reset props={props} />
        <div className="buttons">
          {tab.map((arg, index) => {
            return (
                <div key={index} className="each-switch">
                  <On  switch={arg.switch} setSwitch={arg.setSwitch} />
                  <Off switch={arg.switch} setSwitch={arg.setSwitch} />
                </div>
            );
          })}
        </div>
        <Go switch1={switch1} switch2={switch2} switch3={switch3} />
      </main>
    </>
  );
}

export default Content;
