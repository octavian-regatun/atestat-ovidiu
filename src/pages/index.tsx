import { Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/IndexPage.module.css";
import Nukeproof from "../images/nukeproof.jpg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" className={styles.container}>
        <Image src={Nukeproof} width="800" height="300" alt="image" />
        <Typography variant="body1">
          &emsp;O bicicletă poate fi definită în general ca fiind un vehicul
          rutier cu două roți așezate în linie una în spatele celeilalte, puse
          în mișcare prin intermediul a două pedale acționate cu picioarele. Se
          estimează că mersul pe bicicletă este de trei ori mai eficient din
          punct de vedere energetic decât mersul pe jos, iar viteza este de trei
          - patru ori mai mare.
          <br />
          <br />
          &emsp;Fiind inventate în Europa secolului 19, bicicletele sunt acum în
          număr de peste un miliard, asigurând în multe regiuni mijlocul
          principal de transport. Ele sunt de asemenea foarte populare ca mod de
          recreație, și au fost adaptate pentru folosință în multe alte domenii
          ale activității umane cum ar fi cel al jucăriilor, fitness, aplicații
          militare, servicii de curierat și sportul numit ciclism.
          <br />
          <br />
          &emsp;Forma și configurația de bază a cadrului, roților, pedalelor,
          șezutului și a ghidonului au suferit doar mici schimbări din 1885,
          când a fost construit primul model cu lanț, cu toate că multe detalii
          importante au fost îmbunătățite, în special odată cu apariția
          materialelor moderne de fabricație și a proiectării asistate de
          calculator. Acestea au permis răspândirea modelelor speciale pentru
          cei ce practică un anume tip de ciclism.
          <br />
          <br />
          &emsp;Bicicleta a influențat istoria în mod considerabil, atât în
          domeniul cultural, cât și în cel industrial. În anii de început,
          construcția bicicletelor s-a inspirat din tehnologiile deja existente,
          dar în ultima vreme bicicleta a contribuit la rândul ei la dezvoltarea
          tehnologiilor, atât în vechile domenii, cât și în altele noi.
          <br />
          <br />
          &emsp;Germania face un pas important în dezvoltarea transportului
          verde, intenționând să construiască prima autostradă pentru biciclete
          de pe teritoriul său. De curând, a fost deschis publicului primul
          tronson al șoselei, măsurând 5 kilometri. În momentul în care va fi
          finalizată, autostrada va avea o lungime de 100 de kilometri.
          <br />
          <br />
          <b>&emsp;Cerințe legale</b>
          <br />
          <br />
          &emsp;Din punct de vedere legal, după cum s-a stabilt la Convenția de
          la Viena privind traficul rutier din 1968, bicicleta este considerată
          ca fiind un vehicul, iar cel ce o conduce este șofer. Codurile rutiere
          din multe țări reflectă aceste definiții, impunând ca bicicletele să
          satisfacă anumite cerințe legale, în unele cazuri incluzând chiar
          obținerea unui permis pentru conducerea bicicletei, pentru a putea fi
          folosită pe drumuri publice. De asemenea, în multe zone este o
          infracțiune conducerea unei biciclete care nu e în condiție suficient
          de bună. În majoritatea locurilor, bicicletele trebuie sa aibă lumini
          (faruri si stopuri) funcționale daca sunt folosite după lăsarea
          întunericului. Deoarece o bicicletă aflată în mișcare nu face foarte
          mult zgomot, în multe țări, bicicletele trebuie sa aiba claxoane
          pentru a putea avertiza pietonii și pe alți bicicliști de apropierea
          lor.
          <br />
          <br />
          &emsp;În România, conducătorii bicicletelor nu au nevoie de permis de
          conducere, dar Codul Rutier include și obligații pentru ei.
        </Typography>
      </Container>
    </>
  );
};

export default Home;
