import "./hero.css";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./me.png" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          web developmer & copywriter 
        </h1>
        <p className="sub-title">
          I’m Ammar-Al-Tayyeb , a web developmer since 2022 
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation border">animation</div>
    </section>
  );
};

export default Hero;
