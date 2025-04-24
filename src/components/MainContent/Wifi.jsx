const Wifi = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          class="btn btn-outline-info"
          data-toggle="collapse"
          href="#wifi"
          role="button"
          aria-expanded="false"
          aria-controls="wifi"
          style={{ padding: "10px", maxWidth: "85vw", minWidth: "50vw" }}
        >
          🛜 Wi-Fi
        </a>
      </p>
      <div class="collapse" id="wifi">
        <div class="card card-body list-group">
          <p>Username: TheLuckas</p>
          <p>Password: CiccioPuppy2020</p>
        </div>
      </div>
    </div>
  );
};

export default Wifi;
