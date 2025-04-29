import sofa1 from "../../assets/sofa1.jpg";
import sofa2 from "../../assets/sofa2.jpg";
import sofa3 from "../../assets/sofa3.jpg";
import sofa4 from "../../assets/sofa4.jpg";

const SofaBed = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          class="btn btn-outline-info"
          data-toggle="collapse"
          href="#sofabed"
          role="button"
          aria-expanded="false"
          aria-controls="sofabed"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🛏️ Sofa to bed
        </a>
      </p>
      <div class="collapse" id="sofabed">
        <div class="card card-body list-group" style={{ padding: 20 }}>
          <p>
            The sofa can be easily converted into a bed. You will find the bed
            sheets, pillows and blanket in the sofa storage space.
          </p>
          <img src={sofa1} alt="sofa1" className="sofa-img" />
          <br />
          <p>1. Lift and pull the seat</p>
          <p>
            <small>
              Grab the front of the seat base and lift slightly, then pull it
              forward — it will slide out smoothly.
            </small>
          </p>
          <img src={sofa2} alt="sofa2" className="sofa-img" />
          <img src={sofa3} alt="sofa3" className="sofa-img" />
          <br />
          <p>2. Lower the backrest</p>
          <img src={sofa4} alt="sofa4" className="sofa-img" />
        </div>
      </div>
    </div>
  );
};

export default SofaBed;
