const Departure = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          className="btn btn-info"
          data-toggle="collapse"
          href="#departure"
          role="button"
          aria-expanded="false"
          aria-controls="departure"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          👋 Departure Checklist
        </a>
      </p>
      <div className="collapse" id="departure">
        <div className="card card-body list-group">
          <ul>
            <h4>✅ Before you leave, we kindly ask you to:</h4>
            <li className="list-group-item">
              🛏 Remove all bed sheets and place them in one of the laundry bags
              in the bathroom{" "}
            </li>
            <li className="list-group-item">
              🚪 Close all windows and the patio door
            </li>
            <li className="list-group-item">
              🍽 Clean any dishes you used and return everything to its place
            </li>
            <li className="list-group-item">
              🧹 Clean surfaces and vacuum the floor (wireless vacuum cleaner
              available)
            </li>
            <li className="list-group-item">
              🔐 Lock the apartment door with the key
            </li>
            <li className="list-group-item">
              🗝 Return the key to the locker box (details to be confirmed)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Departure;
