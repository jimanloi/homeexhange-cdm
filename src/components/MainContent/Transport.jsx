const Transport = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          className="btn btn-info"
          data-toggle="collapse"
          href="#transport"
          role="button"
          aria-expanded="false"
          aria-controls="transport"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🚉 Transport
        </a>
      </p>
      <div className="collapse" id="transport">
        <div className="card card-body list-group">
          <p>
            The apartment is very well located, close to many transport options.
          </p>
          <ul className="transport-list">
            <li>🚶🏽 1-min walk to the closest metro station Porte de Namur</li>
            <li>
              🚶🏽 13-min walk to Brussels Central Station (note: uphill walk the
              other way)
            </li>
            <li>🚶🏽 11-min walk to Brussels Luxembourg Station</li>
            <li>🚶🏽 18-min walk to the Grand-Place</li>
            <li>🚇 6-min metro to Brussels South (Midi) Station</li>
          </ul>
          <br />
          <ul className="transport-list">
            <p>
              <strong>
                From/To Brussels International Airport (Zaventem) ✈️
              </strong>
            </p>
            <li>
              🚅 <strong>(Best option)</strong> Direct train runs every 30mins
              between Brussels Luxembourg and Brussels Airport. It takes about
              20mins and costs € 11.20.{" "}
              <a href="https://www.belgiantrain.be/en" target="_blank">
                more info
              </a>
            </li>
            <li>
              🚌 Bus No. 12 stops at Trône (5-minute walk) and runs every 5 to
              20 minutes. The fare is €2.30 for a city-to-airport trip and €7.90
              airport-to-city. Contactless payment is available on the bus, and
              the journey takes about 50 minutes.{" "}
              <a
                href="https://www.stib-mivb.be/travel/other-mobility-solutions/airport-line"
                target="_blank"
              >
                more info
              </a>
            </li>
          </ul>
          <ul className="transport-list">
            <p>
              <strong>
                From/To Brussels South Charleroi Airport (Charleroi) ✈️
              </strong>
            </p>
            <li>
              🚐 You can take a shuttle bus to and from Brussels South Midi
              Station or book a Door2Gate shared taxi in advance for convenient
              transport to any location in Brussels. The journey takes about an
              hour.{" "}
              <a href="https://www.flibco.com/en" target="_blank">
                more info
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Transport;
