const Wifi = () => {
  return (
    <div className="main-content-list-item">
      <p>
        <a
          className="btn btn-outline-info"
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
      <div className="collapse" id="wifi">
        <div className="card card-body list-group">
          <p>Username: TheLuckas</p>
          <p>Password: CiccioPuppy2020</p>
        </div>
      </div>
    </div>
  );
};

export default Wifi;
