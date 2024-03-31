export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Satwik</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Software Engineering Intern| Coding Dreams into Reality
                </p>
        </div>
        <a href="https://drive.google.com/file/d/184WLwrojZMn7P0PcdSoxjNBAqeSCKfCj/view?usp=sharing" target="_blank">
        <div className="btn btn-primary"> Download Resume</div>

        </a>
      </div>
      <div className="hero--section--img">
        <img src="./img/my-phto.png" alt="Hero Section" />
      </div>
    </section>
  );
}
