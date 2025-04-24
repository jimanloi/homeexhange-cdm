import Arrival from "./Arrival";
import Departure from "./Departure";
import Available from "./Available";
import Kitchen from "./Kitchen";
import Trash from "./Trash";
import Wifi from "./Wifi";

const MainContent = () => {
  return (
    <>
      <Arrival />
      <Departure />
      <Available />
      <Kitchen />
      <Trash />
      <Wifi />
    </>
  );
};

export default MainContent;
