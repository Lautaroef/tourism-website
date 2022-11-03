import { FastMenuStyled, Header, Main } from "../components/about/styledComponents";
import sunrise from "../images/atardecer.jpeg";

function About() {
  return (
    <>
      <Header img={sunrise}>Who we are</Header>
      <Main className="lg:max-w-5xl mx-auto px-4 mt-6">
        <FastMenuStyled />
        <p>
          About the company on the other hand, we denounce with righteous indignation and
          dislike men who are so beguiled and demoralized by the charms of pleasure of the
          moment, so blinded by desire. <br />
          <br />
          The digital and the cognitive revolutions are affecting how companies connect with
          users and employees. Companies are simultaneously looking to boost their consumer
          experiences and to transform themselves internally. Barlan is a pure play on the
          digital and cognitive space. We leverage the latest technologies and methodologies to
          help organizations transform in every aspect. We want to transform the world, one
          step at a time. <br />
          <br />
          We thrive by transforming organizations for a digital and cognitive future, and we
          dream to transform our industry with world-class opportunities for talent around the
          globe. <br />
        </p>
      </Main>
    </>
  );
}

export default About;
