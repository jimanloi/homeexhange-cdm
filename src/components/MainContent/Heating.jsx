import heatingDevice from "../../assets/heating.jpg";

const Heating = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          class="btn btn-outline-info"
          data-toggle="collapse"
          href="#heating"
          role="button"
          aria-expanded="false"
          aria-controls="heating"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🔥Heating
        </a>
      </p>
      <div class="collapse" id="heating">
        <div class="card card-body list-group" style={{ padding: 20 }}>
          <p>
            The apartment is equipped with a central heating system. You’ll find
            the thermostat (see picture below) in the living room.
          </p>
          <p>
            The default setting is <strong>auto</strong>, which adjusts the
            temperature according to the time of day.
          </p>
          <img src={heatingDevice} alt="heatingDevice" />
        </div>
      </div>
    </div>
  );
};

export default Heating;
