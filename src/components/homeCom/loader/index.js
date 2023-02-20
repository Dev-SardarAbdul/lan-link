import styled from "styled-components";
// import bgImg from "../../../assets/images/bgimg.png";
import { motion } from "framer-motion";
import logo from "../../../assets/images/newlogo.png";
import ReactLoading from "react-loading";

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  /* touch-action: none; */
  overflow: hidden;

  width: 100vw;
  height: 100vh;

  z-index: 99999 !important;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* background-color: ${(props) => props.theme.body}; */
  color: ${(props) => props.theme.text};

  svg {
    width: 10vw;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;

    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }

  @media (max-width: 48em) {
    svg {
      width: 20vw;
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontlg};
  }

  h5 {
    color: white;
    font-size: 50px;
    text-transform: uppercase;
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    margin-top: 0.5rem;
  }
`;

const textVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const MainLoader = () => {
  return (
    <Container
      initial={{
        y: 0,
        opacity: 1,
      }}
      exit={{
        y: "100%",
        opacity: 0,
      }}
      transition={{
        duration: 2,
      }}
    >
      <Text variants={textVariants} initial="hidden" animate="visible">
        <img src={logo} style={{ height: "250px" }} />
        <ReactLoading type="cylon" color="rgb(0, 147, 221)" />
      </Text>
    </Container>
  );
};

export default MainLoader;
