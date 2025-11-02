import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import SideNavbar from "./UI/SideNavbar";
import HeroCard from "./UI/HeroCard";
import ContinueReadingCard from "./UI/ContinueReadingCard";
import ComicsSection from "./UI/ComicsSection";

const Dashboard = () => {
  const [showProfile, setShowProfile] = useState(false);

  const comics = [
    { img: "flash.png", title: "The Flash, Vol.1", author: "Joshua Williamson" },
    { img: "titans.png", title: "Titans Vol.2", author: "Andrew Robinson" },
    { img: "harley.png", title: "Harley Quinn, Vol.1", author: "Jimmy Palmiotti" },
    { img: "suicidesquad.png", title: "Suicide Squad #8", author: "Tom Taylor" },
  ];

  return (
    <section className="dashboard-bg">
      <div className="dashboard-container">
        <div className="row mx-0 h-100 flex-column flex-md-row">
          <SideNavbar />
          <div className="col-12 col-md-9 bg-dark p-4 position-relative">
            {/* Top Bar */}
            <div className="row align-items-center mb-4">
              <div className="col-12 col-md-10">
                <input
                  type="search"
                  className="form-control bg-dark border border-1 text-white"
                  placeholder="Search..."
                />
              </div>
              <div className="col-12 col-md-2 d-flex justify-content-md-end align-items-center">
                <FaBell size={20} className="me-3" />
                <img
                  src="Ellipse1.png"
                  alt="profile"
                  className="profile-img rounded-circle"
                  onClick={() => setShowProfile(!showProfile)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            {showProfile && (
              <div
                className="profile-overlay d-flex justify-content-end align-items-start"
                onClick={() => setShowProfile(false)}
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.5)",
                  zIndex: 10,
                }}
              >
                <div
                  className="profile-card text-white rounded p-3 pb-5 bg-secondary"
                  onClick={(e) => e.stopPropagation()}
                  style={{ width: "200px", marginTop: "70px", marginRight: "20px" }}
                >
                  <h6 className="mb-2">Kalpana Patidar</h6>
                  <p className="mb-1">
                    Status: <span className="text-success fw-bold">Active</span>
                  </p>
                </div>
              </div>
            )}

            <div className="row mx-0 mb-4 align-items-center">
              <div className="col-12 col-md-8 mb-3 mb-md-0">
                <HeroCard
                  heroImage="image5.png"
                  name="Frank Miller"
                  title="Batman:The Dark Knight"
                  buttonText="Read Now"
                />
              </div>
              <div className="col-12 col-md-4">
                <ContinueReadingCard
                  baseImage="continuereading.png"
                  title="Batman: The Dark Knight"
                  progress={39}
                />
              </div>
            </div>

            <ComicsSection comics={comics} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
