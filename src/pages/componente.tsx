import { Container, Typography } from "@mui/material";
import type { NextPage } from "next";
import * as React from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/IndexPage.module.css";
import Nukeproof from "../images/nukeproof.jpg";
import Cadru from "../images/cadru.jpg";
import Frane from "../images/frane.jpg";
import Furca from "../images/furca.jpg";
import Jante from "../images/jante.jpg";
import Pedale from "../images/pedale.jpg";
import Pinioane from "../images/pinioane.jpg";
import Sa from "../images/sa.jpg";
import Schimbator from "../images/schimbator.jpg";
import Image from "next/image";

const ComponentePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" className={styles.container}>
        <Image src={Cadru} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;<b>Cadrul</b>
          <br />
          <br />
          &emsp;Aproape toate bicicletele moderne au cadrul în formă de romb,
          format din două triunghiuri: unul în față și celălalt în spate.
          Materialele folosite trebuie să fie rezistente și ușoare. Începând cu
          anul 1930 s-au folosit aliaje din fier (oțel), mai apoi prin anii 1980
          au devenit comune cadrele din aliaje de aluminiu (duraluminiu 6061),
          iar în prezent sunt disponibile cadre mai scumpe din titan sau din
          materiale plastice armate cu fibre de carbon.
          <br />
          <br />
        </Typography>
        <Typography variant="body1">
          &emsp;<b>Ghidonul</b>
          <br />
          <br />
          &emsp;Ghidonul bicicletei poate fi din oțel (modelele mai ieftine),
          din aliaje de aluminiu sau din plastic armat cu fibre de carbon. Din
          punctul de vedere al formei, ghidoanele pot fi drepte (flatbar) sau
          curbate (riserbar). Mărci de ghidoane: Truvativ, FSA, Point.
          <br />
          <br />
        </Typography>

        <Image src={Furca} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;<b>Furca</b>
          <br />
          <br />
          &emsp;Este subansamblul care se fixează, printr-o articulație, de
          cadrul bicicletei. În interiorul furcii se fixează roata din față a
          bicicletei. Există două categorii mari de furci: cu amortizor și fără
          amortizor. Furcile cu amortizor se folosesc la bicicletele care
          circulă pe teren accidentat (de exemplu la bicicletele tip MTB -
          Mountain-Bike). Amortizorul furcii poate fi reglabil sau nereglabil.
          Mărci de furci: Rock Shox, Fox, Marzocchi, Magura, Manitou, Suntour,
          Zoom (oarecum în ordinea calității, de la cea mai bună marcă la cea
          mai slabă). Fox Racing Shox sunt primul nume în lume la furci. Sunt
          foarte ușoare și performante. Apoi ar veni RockShox , Marzocchi,
          Manitou, Magura - nu neapărat în ordinea performanței.
          <br />
          <br />
        </Typography>

        <Image src={Jante} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;<b>Rotile</b>
          <br />
          <br />
          &emsp;La bicicletele pentru adulți, roțile au de obicei diametrul de
          26" (un inch = 25,4 milimetri). Alte diametre frecvent întâlnite la
          roțile de bicicletă sunt 24", 27'5", 28" si 29". Componentele unei
          roți de bicicletă sunt butucul, spițele, janta ("cercul", în limbajul
          neoficial al bike-rilor), anvelopa ("guma") și camera. Roțile de
          bicicletă au de obicei 24, 32 sau 36 de spițe. Câteva mărci de butuci:
          Mavic, DT-Swiss, Author, Shimano, Novatec, Altrix. Câteva mărci de
          jante: Mavic, Shimano, Rigida, Campagnolo, Mach 1, Vuelta, Alexrisms,
          Sunrims, Beretta, Remerx, Roval.
          <br />
          <br />
        </Typography>

        <Image src={Pedale} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;<b>Pedalele</b>
          <br />
          <br />
          &emsp;O parte importantă in circulația bicicletei care pune in mișcare
          roțile bicicletei. Piciorul omului acționează cu o anumita forță
          asupra pedalelor și ele la rândul lor acționeaza asupra roților si
          alte părți ale bicicletei
          <br />
          <br />
        </Typography>
        <Typography variant="body1">
          &emsp;<b>Lantul</b>
          <br />
          <br />
          &emsp;Servește la transmiterea mișcării de la pedale la roata din
          spate. În partea din față, lanțul este antrenat de foaia de antrenare,
          iar în partea din spate, lanțul antrenează un pinion fixat pe butucul
          roții din spate.
          <br />
          <br />
        </Typography>

        <Image src={Pinioane} width="300" height="600" alt="image" />
        <Typography variant="body1">
          &emsp;<b>Pinioanele</b>
          <br />
          <br /> &emsp;Pentru transmiterea mișcării de la pedale la roata din
          spate, o componentă foarte importantă este pinionul sau setul de
          pinioane. Pinionul sau setul de pinioane se montează pe butucul roții
          din spate. Dacă bicicleta are mai multe pinioane, acestea pot fi patru
          sau cinci (la bicicletele mai vechi), șase, șapte, opt sau nouă la
          majoritatea bicicletelor moderne, dar pot ajunge până la un număr de
          zece sau unsprezece la bicicletele de viteză (cursiere). Din punctul
          de vedere al modului de fixare, pinioanele pot fi pe filet (model mai
          vechi, dar încă folosit la bicicletele ieftine) sau pe casetă (modelul
          mai nou). Pinioanele cele mai des întâlnite au între 13 și 28 de
          dinți. Mărci de pinioane: SRAM, Shimano, Campagnolo, Miche.
          <br />
          <br />
        </Typography>

        <Image src={Schimbator} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;<b>Schimbatoarele</b>
          <br />
          <br />
          &emsp;Ajută la schimbarea vitezelor pentru pedalarea mai ușoară sau
          mai rapidă, în funcție de preferințe sau de teren. Se mai numesc
          deraioare (derailleur). Există schimbătoare pentru pinioane și
          schimbătoare pentru foi. Mărci de schimbătoare: Shimano, SRAM,
          Campagnolo.
          <br />
          <br />
        </Typography>

        <Image src={Frane} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;<b>Franele</b>
          <br />
          <br />
          &emsp;Servesc la reducerea vitezei de deplasare și la oprirea
          bicicletei. Din punct de vedere constructiv, frânele sunt de mai multe
          tipuri: frâne tip clește ("frâne în V"), frâne pe disc, care pot fi
          mecanice sau hidraulice, frână de picior. Bicicletele pot avea frâne
          pe disc pe cele două roți, sau pot avea pe o roată frâna tip V, iar pe
          cealaltă roată - frână disc. Din punctul de vedere al sistemului de
          acționare, frânele pe disc pot fi mecanice sau hidraulice. Sau pot să
          aibă frână în V pe față și frână de picior pe spate. La probele de
          Cross Country (XC), la BMX și în oraș se pot folosi frâne V. La
          FreeRide (FR), Downhill (DH), All Mountain (AM) și 4X se folosesc
          frâne pe disc hidraulice. La FR, DH și 4X frânele au discuri mari
          (203/180mm), iar etrierele au câte 4 pistoane (în loc de două ca la
          frânele de XC). Mărci de frâne: Magura, Shimano, Alhonga, Tektro,
          Logan, Promax, Hayes, Avid.
          <br />
          <br />
        </Typography>

        <Image src={Sa} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;<b>Saua</b>
          <br />
          <br /> &emsp;Este "scaunul" bicicletei. La unele biciclete destinate
          competițiilor sportive, cum ar fi cele de "trial", șaua poate lipsi.
          Mărci de șa: Selle San Marco, Altrix, Point. Există șei special
          concepute pentru femei sau pentru bărbați, care oferă un confort
          sporit ciclistului/ciclistei.
          <br />
          <br />
        </Typography>
        <Typography variant="body1">
          &emsp;<b>Accesorii</b>
          <br />
          <br />
          &emsp;Principalele accesorii sunt ciclocomputerul și sistemul de
          iluminare. Unele biciclete au atașat un motor electric fiind biciclete
          electrice.
        </Typography>
      </Container>
    </>
  );
};

export default ComponentePage;
