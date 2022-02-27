import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link href="/">
            <Button color="inherit" className={styles.button}>
              <Typography variant="h5" component="div">
                Home
              </Typography>
            </Button>
          </Link>

          <div className={styles.pages}>
            <Link href="istoric">
              <Button color="inherit" className={styles.button}>
                Istoric
              </Button>
            </Link>
            <Link href="componente">
              <Button color="inherit" className={styles.button}>
                Componente
              </Button>
            </Link>
            <Link href="clasificare">
              <Button color="inherit" className={styles.button}>
                Clasificare
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
