import Header from "./components/Header"
import Inicio from "./components/Inicio"
import ComenzarTeleorientacion from "./components/ComenzarTeleorientacion"
import NuestrasEspecialidades from "./components/NuestrasEspecialidades"
import SaludProfesional from "./components/SaludProfesional"
import ComoFunciona from "./components/ComoFunciona"
import NuestrosDoctores from "./components/NuestrosDoctores"
import HeaderSalaEspera from "./components/HeaderSalaEspera"
import InfoDoc from "./components/InfoDoc"
import CardPresentacion from "./components/CardPresentacion"
import FooterSalaEspera from "./components/FooterSalaEspera"
import './App.css';
import React from "react";
import logo from "./assets/img/logoHospitelec.png"
import imgInicio from "./assets/img/gatoXd.jepg"
import imgComenzarTeleorientacion from "./assets/img/farmacologia_para_odontologos.jpg"
import imgNeurologia from "./assets/img/neurologia.png"
import imgOptometria from "./assets/img/optometria.png"
import imgMedicoGeneral from "./assets/img/medico_general.png"
import imgCardiologo from "./assets/img/cardiologo.png"
import imgOdontologia from "./assets/img/odontologia.png"
import imgSaludProfesional from "./assets/img/protectores_personalizados.jpg"
import imgSolicita from "./assets/img/solicita.png"
import imgEspera from "./assets/img/espera.png"
import imgUnDoctor from "./assets/img/un_doctor.png"
import imgWAPhoto from "./assets/img/WA_photo.png"
import imgCard from "./assets/img/gatoXd.jepg"
import imgDocSala from "./assets/img/gatoXd.jepg"
import imgVistaPrevia from "./assets/img/dosificacion_alginato.jpg"
import imgLogoPrivado from "./assets/img/hospital_privado_logo.png"


function App() {
  return (

    <React.Fragment>
      {/* <Header imagen={logo}></Header>
      <Inicio imagen={imgInicio}></Inicio>
      <ComenzarTeleorientacion imagen={imgComenzarTeleorientacion}></ComenzarTeleorientacion>
      <NuestrasEspecialidades imagenNeu={imgNeurologia} imagenOpto={imgOptometria} imagenMedico={imgMedicoGeneral} imagenCardio={imgCardiologo} imagenOdonto={imgOdontologia}></NuestrasEspecialidades>
      <SaludProfesional imagenSalud={imgSaludProfesional}></SaludProfesional>
      <ComoFunciona imagenSolicita={imgSolicita} imagenEspera={imgEspera} imagenUnDoctor={imgUnDoctor} imagenWA={imgWAPhoto}></ComoFunciona>
      <NuestrosDoctores imagenCardDoc={imgCard}></NuestrosDoctores> */}
      <HeaderSalaEspera imagen={logo}></HeaderSalaEspera>
      <InfoDoc imagenDocSala={imgDocSala} imagenVistaPrevia={imgVistaPrevia}></InfoDoc>
      <CardPresentacion imagenLogoPrivado={imgLogoPrivado}></CardPresentacion>
      <FooterSalaEspera></FooterSalaEspera>
    </React.Fragment>

      
  );
}

export default App;
