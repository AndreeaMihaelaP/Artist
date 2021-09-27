import React from "react";
import "../styles.css";

const Home = () => {
  return (
    <div className="home">
      {/* <h3>Home</h3> */}
      <div>
        <p style={{ padding: "100px" }}>Home</p>
        <p style={{ padding: "100px", fontSize: "40px", color: "whitesmoke" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          faucibus urna ac tellus sollicitudin, ut tincidunt elit mattis.
          Integer sed dignissim eros. Etiam nec tellus vitae lorem pellentesque
          ullamcorper at vel eros.
        </p>
        {/* <p style={{ padding: "100px" }}>Home</p>
        <p style={{ padding: "100px" }}>Home</p>
        <p style={{ padding: "100px" }}>Home</p>
        <p style={{ padding: "100px" }}>Home</p> */}
      </div>
    </div>
  );
};
export default Home;
