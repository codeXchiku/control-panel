import DroneHud from "react-drone-hud";

const Gyro = () => {
  return (
    <>
      <DroneHud
        width={500} //width in px, best if >= 500
        height={400} //height in px, best if >= 400
        pitch={10} //degrees
        roll={-10} //degrees, -ve -> left bank
        heading={120} //degrees, optional
        airspeed={10} //left-side number, optional
        airspeedTickSize={5} //increments to use for vertical gauge, optional
        altitude={200} //right-side number, optional
        altitudeTickSize={10} //optional
      />
    </>
  );
};

export default Gyro;
