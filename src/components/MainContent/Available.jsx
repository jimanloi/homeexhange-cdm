const Available = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          className="btn btn-info"
          data-toggle="collapse"
          href="#available"
          role="button"
          aria-expanded="false"
          aria-controls="available"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🪮 What’s Available
        </a>
      </p>
      <div className="collapse" id="available">
        <div className="card card-body list-group">
          <h5>
            We’ve tried to make the apartment as comfortable and practical as
            possible. These are available:
          </h5>
          <ul>
            <li className="list-group-item">🛏 Clean bed linens</li>
            <li className="list-group-item">🧴 Shower gel & shampoo</li>
            <li className="list-group-item">💨 Hairdryer</li>
            <li className="list-group-item">🧼 Clean towels</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Available;
