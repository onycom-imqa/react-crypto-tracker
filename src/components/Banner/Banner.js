import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";
import {useIMQA} from "imqa-react-sdk";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const IMQARef = useIMQA(); // 삽입
  const classes = useStyles();

  return (
      <div ref={IMQARef}>
        <div className={classes.banner}>
          <Container className={classes.bannerContent}>
            <div className={classes.tagline}>
              <Typography
                  variant="h2"
                  style={{
                    fontWeight: "bold",
                    marginBottom: 15,
                    fontFamily: "Montserrat",
                  }}
              >
                Crypto Hunter
              </Typography>
              <Typography
                  variant="subtitle2"
                  style={{
                    color: "darkgrey",
                    textTransform: "capitalize",
                    fontFamily: "Montserrat",
                  }}
              >
                Get all the Info regarding your favorite Crypto Currency
              </Typography>
            </div>
            <Carousel />
          </Container>
        </div>
      </div>
  );
}

export default Banner;
