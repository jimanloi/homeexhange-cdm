import HomeExchangeLogo from "../assets/home-exchange.svg";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#f3f3f3",
        padding: "15px 30px",
        borderTop: "1px solid #ddd",
        fontSize: "0.85rem",
        color: "#444",
        marginTop: "2rem",
      }}
    >
      <a
        href="https://www.homeexchange.com/holiday-home/2828049"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
      >
        <img
          src={HomeExchangeLogo}
          alt="HomeExchange"
          style={{ height: "24px", marginRight: "8px" }}
        />
      </a>

      <p style={{ margin: 0, textAlign: "right" }}>
        Thanks for staying with us 💛
        <br />
        This manual is for your personal use only — please don’t share it.
      </p>
    </footer>
  );
};

export default Footer;
