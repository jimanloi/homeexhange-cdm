const Arrival = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          className="btn btn-info"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🧳 Arrival info
        </a>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          We’ll be in touch with you before your arrival to coordinate how
          you’ll get the keys and access the apartment. Please make sure to be
          reachable in the days leading up to your arrival so we can ensure
          everything goes smoothly.
        </div>
      </div>
    </div>
  );
};

export default Arrival;
