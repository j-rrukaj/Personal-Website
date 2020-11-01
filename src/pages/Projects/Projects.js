import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardItem from "./CardItem"
import Entry from "./Entry"


const useStyles = makeStyles((theme) => ({
  img: {
    minHeight: "100vh",
    backgroundImage: `url(${process.env.PUBLIC_URL + "/images/cloudsmountain.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    color: "#FFFFFF"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));


export default function Projects() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>

        <div className={classes.img}>


        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Projects
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              View My Projects!
            </Typography>
          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="lg">
        
          {/* End hero unit */}

          <Grid container spacing={4}>
            {CardItem.map((projectItem) => (

              <Entry
            key={projectItem.key}
            title={projectItem.title}
            image={projectItem.image}
            description={projectItem.description}
            />

            ))}
          </Grid>
        </Container>
        </div>
      </main>

    </React.Fragment>
  );
}