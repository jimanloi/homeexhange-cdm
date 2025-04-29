const SmokeDetecter = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          class="btn btn-outline-info"
          data-toggle="collapse"
          href="#smoke"
          role="button"
          aria-expanded="false"
          aria-controls="smoke"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🚨 Smoke Detector
        </a>
      </p>
      <div class="collapse" id="smoke">
        <div class="card card-body list-group">
          <p>
            There’s a smoke detector in the hallway outside the bedroom and
            bathroom. Sometimes, after a hot shower, the steam can trigger it.
            If that happens, no worries — just close the bathroom door and it
            should stop shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmokeDetecter;
