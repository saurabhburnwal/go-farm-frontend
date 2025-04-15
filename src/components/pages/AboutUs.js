import styled from "styled-components";
import Header from "../Header";
import WithBackground from "../WithBackground";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  gap: 30px;
  height: 100vh;
  overflow: hidden;
  position: relative;

  @media (max-width: 900px) {
    height: auto;
  }
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 900;
`;

const Section = styled.div`
  margin-top: 50px;
`;

const SubHeading = styled.div`
  font-size: 35px;
  font-weight: 900;
  text-align: center;
`;

const Content = styled.div`
  font-size: 21px;
  text-align: center;
  margin-top: 30px;
`;

export default function AboutUs() {
  return (
    <Header>
      <WithBackground>
        <Container>
          <br />
          <Title>About the Project</Title>
          <Content>
            GoFarm is a web-based platform designed to support farmers by using
            machine learning and real-time data to enhance decision-making and
            boost productivity. It addresses key agricultural challenges such as
            unpredictable production costs, limited access to government schemes,
            and inefficient resource use. By offering crop cost forecasting,
            personalized recommendations, and live policy updates through an
            intuitive dashboard, GoFarm empowers farmers to make informed
            choices, improve sustainability, and increase profitability.
          </Content>
          <br />
          <Section>
            <SubHeading>Our Mission</SubHeading>
            <Content>
              “Our mission is to create a digital platform that empowers farmers
              with actionable insights through advanced technologies. By
              leveraging data analytics, we aim to promote sustainable
              agricultural practices, enhance productivity, and minimize
              environmental impact.”
            </Content>
          </Section>
          <Section>
            <SubHeading>What We Do</SubHeading>
            <Content>
              “We provide tools for precise crop prediction, cost analysis, and
              resource management. Our platform connects stakeholders in the
              agricultural ecosystem, fostering collaboration and innovation to
              achieve a sustainable future for farming.”
            </Content>
          </Section>
        </Container>
      </WithBackground>
    </Header>
  );
}
