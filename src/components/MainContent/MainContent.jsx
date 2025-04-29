import Arrival from "./Arrival";
import Departure from "./Departure";
import Available from "./Available";
import Kitchen from "./Kitchen";
import Trash from "./Trash";
import Wifi from "./Wifi";
import SofaBed from "./SofaBed";
import Heating from "./Heating";
import SmokeDetecter from "./SmokeDetector";

const MainContent = () => {
  return (
    <>
      <Arrival />
      <Departure />
      <Available />
      <Kitchen />
      <Trash />
      <SmokeDetecter />
      <Wifi />
      <Heating />
      <SofaBed />
    </>
  );
};

export default MainContent;
