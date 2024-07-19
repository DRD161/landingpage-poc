const About = ({ header, text }) => {
  return (
    <section className="about">
      <h2 className="about-header">{header}</h2>
      <p className="about-text">{text}</p>
    </section>
  );
};
export default About;
