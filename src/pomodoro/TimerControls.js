import React from "react";
import { minutesToDuration } from "../utils/duration";

function TimerControls({timerControlsHandler, time, sessionType, disabled}) {


    return (
        <div className="row">   
        {/*FocusTime*/}
         <div className="col">
           <div className="input-group input-group-lg mb-2">
             <span className="input-group-text" data-testid="duration-focus">
               Focus Duration: {minutesToDuration(time[0])}
             </span>
             <div className="input-group-append">
               <button
                 type="button"
                 className="btn btn-secondary"
                 data-testid={`decrease-${sessionType[0]}`}
                 onClick={() => timerControlsHandler('minus', sessionType[0])}
                 disabled={disabled}

               >
                 <span className="oi oi-minus" />
               </button>
               <button
                 type="button"
                 className="btn btn-secondary"
                 data-testid={`increase-${sessionType[0]}`}
                 onClick={() => timerControlsHandler('plus', sessionType[0])}
                 disabled={disabled}
               >
                 <span className="oi oi-plus" />
               </button>
             </div>
           </div>
        </div> 
 
         {/*Break Time*/}
         <div className="col">
           <div className="float-right">
             <div className="input-group input-group-lg mb-2">
               <span className="input-group-text" data-testid="duration-break">
                 Break Duration: {minutesToDuration(time[1])}
               </span>
               <div className="input-group-append">
                 <button
                   type="button"
                   className="btn btn-secondary"
                   data-testid={`decrease-${sessionType[1]}`}
                   onClick={() => timerControlsHandler('minus', sessionType[1])}
                   disabled={disabled}
                 >
                   <span className="oi oi-minus" />
                 </button>
                 <button
                   type="button"
                   className="btn btn-secondary"
                   data-testid={`increase-${sessionType[1]}`}
                   onClick={() => timerControlsHandler('plus', sessionType[1])}
                   disabled={disabled}
                 >
                   <span className="oi oi-plus" />
                 </button>
               </div>
             </div>
           </div>
         </div>
       </div>
    )
}

export default TimerControls;
