const Kitchen = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          class="btn btn-outline-info"
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
      <div class="collapse" id="kitchen">
        <div class="card card-body list-group">
          <h5>
            The kitchen is well-equipped with all the basics to cook, reheat, or
            just enjoy a coffee. Feel free to use:
          </h5>
          <ul>
            <li class="list-group-item">☕ French press coffee maker</li>
            <li class="list-group-item">💧 Electric kettle</li>
            <li class="list-group-item">🍞 Toaster</li>
            <li class="list-group-item">🍽 Microwave</li>
            <li class="list-group-item">🔥 Oven</li>
            <li class="list-group-item">🧼 Dishwasher</li>
            <li class="list-group-item">
              🍳 A selection of pots, pans, utensils, dishes, glasses, and
              cutlery
            </li>
            <li class="list-group-item">
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
