import brusselsIllustration from "../assets/brussels-illustration.jpg";

const Intro = () => {
  return (
    <div className="intro-section">
      <img
        src={brusselsIllustration}
        alt="brussels"
        style={{ marginTop: "10px", maxWidth: "40vw" }}
      />
      <h2>Welcome to our home in Brussels!</h2>
      <div className="home-rules">
        <ul>
          <h3>🏡A few important things:</h3>
        </ul>
        <li>
          <strong>Security first. Please lock up! 🔐</strong> Our apartment is
          located on the ground floor, we kindly ask you to always lock the
          doors <u>(both the building door and the apartment door)</u> with the
          key <i className="bi bi-key-fill"></i> and make sure windows are
          closed when you leave the apartment.
        </li>
        <br />
        <li>
          <strong>Shoe-free home 🦶</strong> To help us keep the space clean and
          cozy, this is a no-shoes household. Please leave your shoes on the
          rack just outside the door. Feel free to bring along your favorite
          slippers or comfy socks!
        </li>
        <br />
        <li>
          <strong>A Gentle Reminder 💛</strong> We really appreciate your care
          and consideration for our home. Please try to use water and
          electricity mindfully, and treat the equipment and amenities with
          kindness — just like you would in your own place. We’ve stocked the
          essentials for your stay, and we trust that you’ll enjoy them
          respectfully.
        </li>
      </div>
    </div>
  );
};

export default Intro;
