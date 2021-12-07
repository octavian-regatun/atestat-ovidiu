import { Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/IndexPage.module.css";
import Istoric from "../images/istoric.jpg";
import Image from "next/image";

const IstoricPage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" className={styles.container}>
        <Image src={Istoric} width="500" height="400" alt="image" />
        <Typography variant="body1">
          &emsp;Strămoșul bicicletei a fost creat de către baronul german Karl
          Drais, care a inventat și și-a patentat mășina de alergat în anul
          1817. Așadar, în acel an a avut loc prima plimbare cu bicicleta
          din orașul său natal, Mannheim, până în suburbia Rheinau.
          <br />
          <br />
          &emsp;Ea a fost perfecționată continuu în mai multe state, aspectul de
          astăzi fiindu-i dat în 1845 de un alt inventator german, Milius, iar
          denumirea de francezi -velociped (din latină: veiox, rapid și pex,
          picior). Primele biciclete erau din lemn. Din a doua jumătate a
          secolului, ele se vor produce din fier și cu roți de
          cauciuc.finalizată, autostrada va avea o lungime de 100 de
          kilometri.
        </Typography>
      </Container>
    </>
  );
};

export default IstoricPage;
