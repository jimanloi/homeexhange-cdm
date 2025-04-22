const Arrival = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          class="btn btn-info"
          data-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{ padding: "10px", width: "400px" }}
        >
          🧳 Arrival info
        </a>
      </p>
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
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
