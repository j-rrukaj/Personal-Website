import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CardItem from "./CardItem"
import Entry from "./Entry"


const useStyles = makeStyles((theme) => ({
  backgroundImg: {
      minHeight: "100vh",
      backgroundImage: `url(${process.env.PUBLIC_URL + "/images/test3.png"})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
  },
  heroContent: {
    padding: theme.spacing(12, 0, 6),
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
    
        <div className={classes.backgroundImg}>

        <div className={classes.heroContent}>
          <Container maxWidth="sm">
          <Typography className={classes.title} variant="h2" align="center"  gutterBottom>
          Projects
        </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              View My Projects!
            </Typography>
          </Container>
        </div>
        
        <Container className={classes.cardGrid} maxWidth="lg">

          <Grid container spacing={4}>

          
            {CardItem.map((projectItem) => (

              <Entry
            key={projectItem.id}
            title={projectItem.title}
            image={projectItem.image}
            description={projectItem.description}
            link={projectItem.link}
            />

            ))}
          </Grid>
        </Container>
    

    </div>
    
  );
}