import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({start,end,duration}) => {

  return (
    <CountUp  start={start} end={end} duration={duration} decimals={0}>
    {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start}>
            <span className="text-white font-black text-5xl" ref={countUpRef} />
        </VisibilitySensor>
    )}
 </CountUp>

 
  );
};

export default Counter;