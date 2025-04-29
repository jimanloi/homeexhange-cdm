import trashCalendar from "../../assets/trash-calendar.jpg";

const Trash = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          class="btn btn-outline-info"
          data-toggle="collapse"
          href="#trash"
          role="button"
          aria-expanded="false"
          aria-controls="trash"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🗑 Trash & Recycling
        </a>
      </p>
      <div class="collapse" id="trash">
        <div class="card card-body list-group">
          <h5>
            In Brussels, we sort our waste into different colored bags. The bins
            are a bit hidden in the apartment. Here’s a quick guide:
          </h5>
          <ul>
            <li class="list-group-item">
              <strong>⬜ White bag </strong>{" "}
              <small>bottom cupboard on the left side of the oven</small> →
              General household waste (everything that can’t be recycled)
            </li>
            <li class="list-group-item">
              <strong>🟦 Blue bag </strong> <small>next to white bag</small>→
              Plastic bottles, cans, and drink cartons (PMC)
            </li>
            <li class="list-group-item">
              <strong>🟧 Orange bag </strong> <small>below kitchen sink</small>→
              Food scraps and organic waste (peelings, coffee grounds, etc.)
            </li>
            <li class="list-group-item">
              <strong>🟨 Yellow bag </strong>{" "}
              <small>cupboard on the right side of the toilet</small>→ Clean and
              dry paper/cardboard
            </li>
          </ul>
          <p>
            🗓 If you’re staying during a pickup day, feel free to leave the bag
            near the building front door during the indicated time:
          </p>
          <img
            src={trashCalendar}
            alt="trashCalendar"
            style={{
              margin: "0 1.5rem",
              maxWidth: "800px",
              alignSelf: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Trash;
