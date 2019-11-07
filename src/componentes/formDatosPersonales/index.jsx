import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Button from '@material-ui/core/Button';

import useStyles from './styles';

function FormDatosPersonales({ continuar }) {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Datos Personales</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Paper className={classes.root}>
          <TextField
            required
            fullWidth
            className={classes.formControl}
            id="standard-required"
            label="Nombres"
            margin="dense"
          />
          <TextField
            required
            fullWidth
            className={classes.formControl}
            id="standard-required"
            label="Apellidos"
            margin="dense"
          />
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Titulo Personal</FormLabel>
            <RadioGroup aria-label="tituloPersonal" name="tituloPersonal">
              <FormControlLabel value="Sr" control={<Radio />} label="Sr." />
              <FormControlLabel value="Sra" control={<Radio />} label="Sra." />
              <FormControlLabel
                value="Srta"
                control={<Radio />}
                label="Srta."
              />
            </RadioGroup>
          </FormControl>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Tipo de Documento
                </InputLabel>
                <Select
                  native
                  inputProps={{
                    name: 'docType',
                  }}
                >
                  <option value="CC">C.C</option>
                  <option value="NIT">NIT</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={9}>
              <TextField
                required
                fullWidth
                className={classes.formControl}
                id="standard-required"
                label="Número"
                margin="dense"
                type="number"
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel htmlFor="outlined-age-native-simple">
                  Código de País
                </InputLabel>
                <Select
                  native
                  inputProps={{
                    name: 'countryType',
                  }}
                >
                  <option value="57">+57</option>
                  <option value="54">+54</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={9}>
              <TextField
                required
                fullWidth
                className={classes.formControl}
                id="standard-required"
                label="Número"
                margin="dense"
                type="number"
              />
            </Grid>
          </Grid>

          <TextField
            required
            fullWidth
            className={classes.formControl}
            id="standard-required"
            type="email"
            label="Correo electronico"
            margin="dense"
          />

          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Continuar
          </Button>
        </Paper>
      </Container>
    </>
  );
}

FormDatosPersonales.propTypes = {
  continuar: PropTypes.func.isRequired,
};

export default FormDatosPersonales;
