import Arrival from "./Arrival";
import Departure from "./Departure";
import Available from "./Available";
import Kitchen from "./Kitchen";
import Trash from "./Trash";
import Wifi from "./Wifi";
import SofaBed from "./SofaBed";
import Heating from "./Heating";
import SmokeDetecter from "./SmokeDetector";
import Transport from "./Transport";
import Recommendation from "./Recommendation";

const MainContent = () => {
  return (
    <>
      <Arrival />
      <Departure />
      <Transport />
      <Available />
      <Kitchen />
      <Trash />
      <SmokeDetecter />
      <Wifi />
      <Heating />
      <SofaBed />
      <Recommendation />
    </>
  );
};

export default MainContent;
