import Meta from "components/Meta";
import styled from "styled-components";
import PageHeading from "../components/PageHeading";
const AboutStyles = styled.div`
  .main_text {
    padding: var(--paddingLayout);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .statement {
    background: ${(props) => props.theme.background};
    flex: 1 1 350px; //Stretching:
    /* flex: 0 1 350px; //No stretching: */
    margin: 1rem;
    padding: 0 2rem;
    border-radius: var(--borderRadius);
    p {
      font-size: 1.7rem;
    }
    h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 610px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
`;

const headerContent = {
  title: "About Us",
  text: "BlueCIT is a professional, experienced, innovative software development and internet security fırm, that provides high-quality services, strategic solutions, technical consulting, and data protection to businesses and organizations.",
};
const About = () => {
  return (
    <>
      <Meta name='About Us' path='/about' />
      <AboutStyles>
        <PageHeading title={headerContent.title} text={headerContent.text} />
        <div className='main_text'>
          <div className='statement'>
            <h1>Our Mission </h1>
            <p>
              To position our company on the front line of the software
              development and cybersecurity sector in the horn of Africa.
              Enhance our client’s capabilities to operate their businesses in a
              safeguarded and fraud-free environment by providing sophisticated
              systems, applications, and professional consulting services with
              inflexible integrity.
            </p>
          </div>
          <div className='statement'>
            <h1>Our Vision </h1>

            <p>
              To be a potential partner, customer-oriented, and innovative
              world-class software development and internet security company. To
              assist businesses and organizations elevate their data and
              security awareness by equipping them with the latest technology
              and strategic solutions.
            </p>
          </div>
        </div>
      </AboutStyles>
    </>
  );
};

export default About;
