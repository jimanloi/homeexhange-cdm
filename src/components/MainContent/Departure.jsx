const Departure = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          class="btn btn-info"
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
      <div class="collapse" id="departure">
        <div class="card card-body list-group">
          <ul>
            <h4>✅ Before you leave, we kindly ask you to:</h4>
            <li class="list-group-item">
              🛏 Remove all bed sheets and place them on the bed{" "}
            </li>
            <li class="list-group-item">
              🚪 Close all windows and the patio door
            </li>
            <li class="list-group-item">
              🍽 Clean any dishes you used and return everything to its place
            </li>
            <li class="list-group-item">
              🔐 Lock the apartment door with the key
            </li>
            <li class="list-group-item">
              🗝 Return the key to the locker box (details to be confirmed)
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Departure;
