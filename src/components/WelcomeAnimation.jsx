import React, { useEffect, useState } from "react";
import BelgianFlag from "../assets/belgian-flag.svg";
import Atomium from "../assets/atomium.svg";
import BrusselsSprouts from "../assets/brussels-sprouts.svg";
import ManloiJulien from "../assets/manloi-julien.jpg";
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
            backgroundColor: "rgba(253, 249, 242, 0.96)",
            color: "rgb(2, 58, 58)",
            border: "2px solid rgb(46, 100, 114)",
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "fit-content",
            overflowY: "auto",
            width: "90vw",
            maxWidth: "600px",
            padding: "1.5rem",
            borderRadius: "20px",
            zIndex: 1050,
            boxSizing: "border-box",
          }}
        >
          <h3>🇬🇧 Welcome to our home!</h3>
          <h3>🇫🇷 Bienvenue chez nous!</h3>
          <img
            src={ManloiJulien}
            alt="us"
            style={{
              objectFit: "cover",
              width: "5rem",
              height: "5rem",
              borderRadius: "2.5rem",
            }}
          />
          <div className="modal-body" style={{ padding: "10px 40px" }}>
            <p>
              🇬🇧 We’re very happy to share our place with you and hope you enjoy
              your stay as much as we enjoy living here. This guide includes
              everything you need to feel at home.
            </p>
            <p>
              🇫🇷 Nous sommes ravis de vous accueillir dans notre petit cocon.
              Nous vous souhaitons un excellent séjour à Bruxelles ! Vous
              trouverez ici toutes les informations utiles pour profiter
              pleinement de l’appartement et vous sentir comme chez vous.
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
