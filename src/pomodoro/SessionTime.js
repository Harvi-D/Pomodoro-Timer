import React from "react";
import {secondsToDuration, minutesToDuration} from "../utils/duration";

function SessionTime({typeOfSession, timeInSession, timeLeft}) {
    
    const label = typeOfSession === 'focus' ? 'Focusing' : 'On Break';
    const sessionDuration = `${minutesToDuration(timeLeft)}`
    const countDown = secondsToDuration(timeLeft * 60 - timeInSession)


return (
    <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {label} for {sessionDuration} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {countDown} remaining
            </p>
          </div>
    </div>
);
}

export default SessionTime;