import React, { useEffect, useState } from "react";
import BelgianFlag from "../assets/belgian-flag.svg";
import Atomium from "../assets/atomium.svg";
import BrusselsSprouts from "../assets/brussels-sprouts.svg";
import _ from "lodash";

const icons = [BelgianFlag, Atomium, BrusselsSprouts];

const WelcomeAnimation = ({ showModalOnly = false }) => {
  const [visibleIcons, setVisibleIcons] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModalOnly) {
      setShowModal(true);
      return;
    }

    // Animate each icon every 600ms
    icons.forEach((icon, index) => {
      setTimeout(() => {
        setVisibleIcons((prevIcon) => {
          const res = _.uniq([...prevIcon, icon]);
          return res;
        });
      }, index * 600);
    });

    // Show modal after all icons are visible (600ms * 3 icons = 1800ms)
    const modalTimer = setTimeout(() => {
      setShowModal(true);
    }, icons.length * 600 + 300);

    return () => clearTimeout(modalTimer);
  }, [showModalOnly]);

  return (
    <>
      {!showModalOnly && visibleIcons.length > 0 && !showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-white d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
        >
          <div className="d-flex flex-row align-items-center gap-3">
            {visibleIcons.map((icon, i) => (
              <img
                key={i}
                src={icon}
                alt={`icon-${i}`}
                className="svg-icon mb-3"
                style={{
                  margin: "10px",
                  transition: "opacity 0.5s",
                  opacity: 1,
                }}
              />
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{
            backgroundColor: "hsla(250, 100.00%, 90.00%, 0.98)",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "fit-content",
            height: "fit-content",
            borderRadius: "20px",
            zIndex: 1050,
            padding: "30px",
            margin: "20px",
            display: "inline-block",
          }}
        >
          <h2>Welcome to our home!</h2>
          <img
            src="/src/assets/manloi-julien.jpg"
            alt="us"
            style={{
              objectFit: "cover",
              width: "150px",
              height: "150px",
              borderRadius: "75px",
            }}
          />
          <div className="modal-body" style={{ padding: "10px 40px" }}>
            <p>
              We’re very happy to share our place with you and truly hope you
              enjoy the apartment as much as we do. To help you settle in and
              feel right at home, we’ve put together this little manual — you’ll
              find everything you need right here!
            </p>
            <p>
              <small>Manloi & Julien</small>
            </p>
            <button
              type="button"
              class="btn-close pull-right"
              aria-label="Close"
              onClick={() => setShowModal(false)}
              style={{
                backgroundColor: "transparent",
                border: "1px solid transparent",
              }}
            >
              <i class="bi bi-x-circle"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WelcomeAnimation;
