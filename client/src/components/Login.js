import React,{useRef} from "react";
import '../styles/login.css';
import {  Button,  TextField,  Grid,  Paper,  AppBar,  Typography,Toolbar,
  Link,} from "@material-ui/core";
  import { v4 as uuidv4} from 'uuid';
export default function Login({onIdSubmit}) {
 const idRef=useRef()
 function handleSubmit(e){
     e.preventDefault();
     onIdSubmit(idRef.current.value)
 }
 function createnewId(){
     onIdSubmit(uuidv4());
 }
    return (
      <div>
        <AppBar position="static" alignitems="center" color="primary">
          <Toolbar>
            <Grid container justify="center" wrap="wrap">
              <Grid item>
                <Typography variant="h6">Whatsapp</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                </Grid>
                <Grid item>
                  <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="text"
                          placeholder="ID"
                          fullWidth
                          name="username"
                          variant="outlined"
                          ref={idRef}
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Login
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="secondary"
                          onClick={createnewId}
                          className="button-block">
                          Create new ID
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    Forgot Password?
                  </Link>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }


