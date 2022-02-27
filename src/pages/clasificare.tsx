import { Container, Paper, Typography } from "@mui/material";
import { NextPage } from "next";
import styles from "../styles/IndexPage.module.css";

import Navbar from "../components/Navbar";
import BMX from "../images/bmx.png";
import MTB from "../images/mtb.png";
import RoadBike from "../images/roadBike.png";
import TouringBike from "../images/touringBike.png";
import TrackBike from "../images/trackBike.png";
import Image from "next/image";

const ClasificarePage: NextPage = () => {
  return (
    <>
      <Navbar />
      <Container maxWidth="md" className={styles.container}>
        <Typography variant="h2" className={styles.title} align="center">
          Road Bike
        </Typography>
        <Image src={RoadBike} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;Road bike-urile sunt deseori deosebite de celelalte modele prind
          ghidonul cu mânere în formă de curbă, însă existe şi exemplare cu
          mânerele ce au o formă obişnuită. Tipul ghidonului folosit te ajută să
          menţii corpul într-o poziţie aerodinamică pentru a atinge viteze
          maxime alături de bicicleta ta. Datorită cadrului uşor bicicleta este
          perfectă pentru folosirea de zi cu zi, curse sau mari tururi cicliste.
          <br />
          <br />
          &emsp;Anvelopele mari şi subţiri îţi permit să pedalezi la o viteză
          destul de mare fără a depune o cantitate colosală de energie şi forţă.
          Dacă ai nevoie de o bicicletă ce îţi va permite să foloseşti cât mai
          raţional posibil forţa muşchilor tăi, să experimentezi cu poziţionarea
          mâinilor şi a corpului în timpul pedalării, cea mai bună variantă
          posibilă este road bike-ul.
        </Typography>
        <Typography variant="h2" className={styles.title} align="center">
          Mountain Bike
        </Typography>
        <Image src={MTB} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;Mountain bike-urile sunt dotate cu sisteme de frânare şi
          amortizare excelente pentru a minimiza riscurile la care se supune
          ciclistul în timpul trecerii traseelor de munte. Aceste biciclete sunt
          proiectate pentru a fi folosite în cele mai extreme condiţii, de aceea
          materialele care sunt folosite la construirea lor sunt de cea mai
          înaltă calitate.
          <br />
          <br />
          &emsp;De obicei aceste sunt echipate cu anvelope de 24 sau 29 de inch
          ce ajută la trecerea diferitor obstacole cum ar fi pietrele,
          rădăcinile sau noroiul, iar sistemul performant de amortizare absoarbe
          şocurile produse de drumul avariat pe care sunt folosite. O mare parte
          a deţinătorilor de mountain bike-uri le folosesc în oraş sau drumuri
          puţin avariate datorită confortului sporit asigurat de aceleaşi
          anvelope sau amortizoare.
        </Typography>
        <Typography variant="h2" className={styles.title} align="center">
          Touring Bike
        </Typography>
        <Image src={TouringBike} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;Aceste biciclete sunt, în principiu, road bike-uri, cu câteva
          modificări ce fac parcurgerea drumurilor lungi mai confortabilă.
          Touring bike-urile sunt deseori echipate cu o mulţime de mici cârlige
          de care poţi ataşa bagaje, sticle cu apă, lumini, unelte. Cadrul
          acestor biciclete este deseori îndeplinit dintr-un material mai
          puternic pentru a suporta greutatea tuturor bagajelor suplimentare.
          <br />
          <br />
          &emsp;Anvelopele mari şi subţiri îţi permit să pedalezi la o viteză
          destul de mare fără a depune o cantitate colosală de energie şi forţă.
          Dacă ai nevoie de o bicicletă ce îţi va permite să foloseşti cât mai
          raţional posibil forţa muşchilor tăi, să experimentezi cu poziţionarea
          mâinilor şi a corpului în timpul pedalării, cea mai bună variantă
          posibilă este road bike-ul.
        </Typography>
        <Typography variant="h2" className={styles.title} align="center">
          Track Bike
        </Typography>
        <Image src={TrackBike} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;Aceste biciclete sunt aproape mereu folosite de ciclişti
          profesionali ce se pregătesc sau participă la curse. Ideea principală
          a acestui tip de bicicletă este să antreneze forţa maximă a muşchilor
          de la picioare prin intermediul folosirii unei singure viteze ce nu
          permite deplasarea bicicletei fără ca biciclistul să pedaleze. Aceste
          modele pot fi folosite de persoanele pasionate de sport şi ciclism,
          dar care nu au intenţia de participa la vreo cursă de mare viteză,
          aceste biciclete fiind o metodă perfectă de a menţine în formă muşchii
          picioarelor.
          <br />
          <br />
          &emsp;Track bike-urile sunt dotate cu anvelope destul de subţiri şi
          sunt uşor de manevrat iar sistemul de frânare este destul de puternic
          pentru a opri bicicleta ce se deplasează cu o viteză destul de mare.
          Cadrul acesteia este confecţionat din materiale uşoare dar dure pentru
          a minimiza forţa folosită de ciclist spre a împinge mecanismul, iar
          ghidonul cu mânerele orientate în jos ajută, ca şi la road bike-uri,
          la menţinerea corpului într-o poziţie mai aerodinamică.
        </Typography>
        <Typography variant="h2" className={styles.title} align="center">
          BMX
        </Typography>
        <Image src={BMX} width="500" height="500" alt="image" />
        <Typography variant="body1">
          &emsp;Acest tip de bicicleta este proiectat pentru a concura pe mici
          piste acoperite cu noroi,similare cu pistele ce se folosesc la cursele
          motocicletelor, de aici şi acronimul BMX ce se descifrează ca Bicycle
          Motor Cross. În aceste scopuri, bicicleta este dotată doar cu o
          singură viteză şi cu roţi de 20 de inch cu anvelope ce pot suporta
          drumurile noroioase sau avariate.
          <br />
          <br />
          &emsp;BMX-urile sunt ideale pentru oamenii ce vor să înveţe să facă
          trucuri pe bicicletă. Datorită cadrului construit cu scopul de a
          suporta sărituri şi şocuri de diferite puteri şi greutăţi, dar şi a
          faptului că este dotată doar cu o viteză şi posedă un centru de
          greutate destul de jos, acest tip de bicicletă este folosit doar în
          aceste scopuri de marea majoritate a lumii.
        </Typography>
        <Typography variant="h2" className={styles.title} align="center">
          Bicicletele Electrice
        </Typography>
        <Typography variant="body1">
          &emsp;Acest tip de biciclete este relativ nou pe piaţă însă a câştigat
          inimile multor cumărători din întreaga lume. Datorită motorului
          electric cu care este dotat şi care este setat în aşa fel în care să
          ajute ciclistul la pedalare, bicicletele electrice au făcut viaţa mai
          uşoară celor care nu reuşesc să-și menţină forţa fizică pentru mult
          timp.
          <br />
          <br />
          &emsp;Bicicletele electrice sunt cel mai fiabil tip de biciclete
          deoarece pot fi folosite atât ca fiind o bicicletă obişnuită care
          necesită pedalare şi depunerea de forţă fizică, cât şi un mecanism de
          îţi poate uşura viaţa considerabil. Există o vastă varietate de
          biciclete electrice, de la road bike-uri până la track bike-uri, toate
          dotate cu un motor electric, de aceea trebuie să luaţi în considerare
          această oportunitate.
        </Typography>
      </Container>
    </>
  );
};

export default ClasificarePage;
