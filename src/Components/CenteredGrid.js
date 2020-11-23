import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

import symmetricEncryptionImage from '../images/data-encryption.jpg';
import asymmetricEncryptionImage from '../images/encryption.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    margin: '2%',
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea
              component={Link}
              to={'/symmetricEncryption'}
              className={"height:300"}>
              <CardMedia
                component="img"
                alt="Symmetric Encryption Image"
                height="250"
                image={symmetricEncryptionImage}
                title="Symmetric Encryption Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Simetrično kriptiranje/dekriptiranje
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                component={Link}
                to={'/symmetricEncryption'}
                size="small"
                color="primary">
                Otvori
        </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <CardActionArea
              component={Link}
              to={'/asymmetricEncryption'}
              className={"height:300"}>
              <CardMedia
                component="img"
                alt="Asymmetric Encryption Image"
                height="250"
                image={asymmetricEncryptionImage}
                title="Asymmetric Encryption Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Asimetrično kriptiranje/dekriptiranje
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                component={Link}
                to={'/asymmetricEncryption'}
                size="small"
                color="primary">
                Otvori
        </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
