import { Link } from "react-router-dom";

const LandingLayout = ({ children }) => {
  return (
    <>
      <div
        className="body d-flex justify-content-center align-items-center"
        style={{
          backgroundColor: "#B31312",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "12px",
        }}>
        <div
          className="container-md p-0 pb-5"
          style={{
            maxWidth: "390px",
            backgroundColor: "white",
            margin: "auto",
          }}>
          {children}
        </div>

        <div
          style={{
            position: "fixed",
            top: "100%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "390px",
            height: "120px",
            backgroundColor: "#EEE2DE",
            boxShadow: "0px -2px 5px rgba(0, 0, 0, 0.1)",
          }}>
          <div
            className="pt-3"
            style={{ display: "flex", justifyContent: "space-evenly" }}>
            <a href="#">
              <Icon icon="ep:menu" color="#b31312" width="30" />
            </a>
            <a href="#">
              <Icon icon="mdi:cart" color="#ea906c" width="30" />
            </a>
            <a href="#">
              <Icon
                icon="material-symbols:team-dashboard"
                color="#ea906c"
                width="30"
              />
            </a>
            <a href="#">
              <Icon icon="material-symbols:chat" color="#ea906c" width="30" />
            </a>
            <a href="#">
              <Icon icon="iconamoon:profile-fill" color="#ea906c" width="30" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingLayout;
