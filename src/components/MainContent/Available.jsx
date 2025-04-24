const Available = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          class="btn btn-info"
          data-toggle="collapse"
          href="#available"
          role="button"
          aria-expanded="false"
          aria-controls="available"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🪮 What’s Available for You
        </a>
      </p>
      <div class="collapse" id="available">
        <div class="card card-body list-group">
          <h5>
            We’ve tried to make the apartment as comfortable and practical as
            possible — these are available:
          </h5>
          <ul>
            <li class="list-group-item">
              🛏 Clean bed linens (already made upon arrival, except for the sofa
              bed)
            </li>
            <li class="list-group-item">🧴 Shower gel & shampoo</li>
            <li class="list-group-item">🧼 Two clean towels</li>
            <li class="list-group-item">💨 Hairdryer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Available;
