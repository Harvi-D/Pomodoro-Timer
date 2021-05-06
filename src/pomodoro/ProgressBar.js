import React from "react";

function ProgressBar({timeInSession, timeLeft}) {
    const percentComplete = (timeInSession / (timeLeft * 60)) * 100
    return(
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={percentComplete} 
                style={{ width: `${percentComplete}%` }} 
              />
            </div>
          </div>
        </div>
    );
}

export default ProgressBar;