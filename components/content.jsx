import { AppContext } from "@/context/app";
import "@/styles/content.css";
import React, { useContext } from "react";
import Footer from "@/components/footer";

export default function Content({ children }) {
  const { width } = useContext(AppContext);
  return (
    <div
      className={`scrollable scrollY next-844n9s ${
        width < 768 ? "mobile" : ""
      }`}
    >
      <div>
        <div className="content-wrapper next-vlgd3s">
          {" "}
          <div className="page-content" id="main-content">
            {" "}
            <div
              className={`parent next-1p5gbm2 ${width < 893 ? "mobile" : ""}`}
            >
              <div className="ctainer no-height next-1p5gbm2">
                <div className="sizer next-1p5gbm2"></div>
              </div>{" "}
              <div className="ctainer next-1p5gbm2">
                <div className="layout-spacing variant-normal next-l4ghjo">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
