const Kitchen = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          className="btn btn-outline-info"
          data-toggle="collapse"
          href="#kitchen"
          role="button"
          aria-expanded="false"
          aria-controls="kitchen"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          👨🏼‍🍳 Kitchen Essentials
        </a>
      </p>
      <div className="collapse" id="kitchen">
        <div className="card card-body list-group">
          <h5>
            The kitchen is well-equipped with all the basics to cook, reheat, or
            just enjoy a coffee. Feel free to use:
          </h5>
          <ul>
            <li className="list-group-item">☕ French press coffee maker</li>
            <li className="list-group-item">💧 Electric kettle</li>
            <li className="list-group-item">🍞 Toaster</li>
            <li className="list-group-item">🍽 Microwave</li>
            <li className="list-group-item">🔥 Oven</li>
            <li className="list-group-item">🧼 Dishwasher</li>
            <li className="list-group-item">
              🍳 A selection of pots, pans, utensils, dishes, glasses, and
              cutlery
            </li>
            <li className="list-group-item">
              🧂 You’ll also find a few basic condiments and cooking essentials
              (salt, pepper, oil, etc.).
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Kitchen;
