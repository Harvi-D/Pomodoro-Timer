import React, { useState } from "react";
import useInterval from "../utils/useInterval";
import TimerControls from "./TimerControls";
import PlayPauseStop from "./PlayPauseStop";
import TimeDisplay from "./TimeDisplay";




function Pomodoro() {

  const initialState = {
    play: false,
    pause: true,
    typeOfSession: 'focus',
    timeInSession: 0,
    focus: 25,
    break: 5,
  };

  const ranges = {
    focus: [5, 60],
    break: [1, 15],
  }
  // The current session - null where there is no session running
  const [session, setSession] = useState(initialState);

  // ToDo: Allow the user to adjust the focus and break duration.
  function timerControlsHandler(plusOrMinus, sessionType) {
    const initialTime = session[sessionType];
    const range = ranges[sessionType];
    const increment = sessionType === 'focus' ? 5 : 1;
    const adjustedTime = plusOrMinus === 'plus' ? Math.min(initialTime + increment, range[1])
      : Math.max(initialTime - increment, range[0]);
    setSession((session) => ({
      ...session,
      [sessionType]: adjustedTime,
    }));
  }


function timer() {
  const {typeOfSession, timeInSession} = session;
  const timeRemaining = session[typeOfSession] * 60 - timeInSession;
  setSession((session) => ({
    ...session,
    timeInSession: session.timeInSession + 1
  }));

}

function nextSession() {
  new Audio('https://bigsoundbank.com/UPLOAD/mp3/1830.mp3').play();
  const switchSession = session.typeOfSession === 'focus' ? 'break' : 'focus';
  setSession((session) => ({
    ...session,
    typeOfSession: switchSession,
    timeInSession: 0,
  }));
}


  function playPauseHandler() {
    if (!session.pause) {
      const { typeOfSession } = session;
    }
    setSession((session) => ({
      ...session,
      pause: !session.pause,
      play: true,
    }));
  }

  function stopHandler() {
    setSession((session) => ({
      ...initialState
    }));
  }


  function endSession() {
    return session.timeInSession === session[session.typeOfSession] * 60;
  }
  /**
   * Custom hook that invokes the callback function every second
   *
   * NOTE: You will not need to make changes to the callback function
   */
  useInterval(() => {
    if (endSession()) nextSession();
    else timer();
  },
    session.pause ? null : 1000
  );
  

  return (
    <div className="pomodoro">


      <TimerControls 
      timerControlsHandler={timerControlsHandler}
      disabled={session.play}
      sessionType={['focus', 'break']}
      time={[session.focus, session.break]}
      />

      <PlayPauseStop 
      pause={session.pause}
      play={session.play}
      stopHandler={stopHandler}
      playPauseHandler={playPauseHandler}
      />

      <TimeDisplay 
      typeOfSession={session.typeOfSession}
      play={session.play}
      pause={session.pause}
      sessionTimes={[session.focus, session.break]}
      timeInSession={session.timeInSession}
      />


      


      
        {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
        
        


    </div>
  );
}

export default Pomodoro;
