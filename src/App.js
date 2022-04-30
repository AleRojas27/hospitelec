import Header from "./components/Header"
import Inicio from "./components/Inicio"
import ComenzarTeleorientacion from "./components/ComenzarTeleorientacion"
import NuestrasEspecialidades from "./components/NuestrasEspecialidades"
import SaludProfesional from "./components/SaludProfesional"
import ComoFunciona from "./components/ComoFunciona"
import NuestrosDoctores from "./components/NuestrosDoctores"
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


function App() {
  return (

    <React.Fragment>
      <Header imagen={logo}></Header>
      <Inicio imagen={imgInicio}></Inicio>
      <ComenzarTeleorientacion imagen={imgComenzarTeleorientacion}></ComenzarTeleorientacion>
      <NuestrasEspecialidades imagenNeu={imgNeurologia} imagenOpto={imgOptometria} imagenMedico={imgMedicoGeneral} imagenCardio={imgCardiologo} imagenOdonto={imgOdontologia}></NuestrasEspecialidades>
      <SaludProfesional imagenSalud={imgSaludProfesional}></SaludProfesional>
      <ComoFunciona imagenSolicita={imgSolicita} imagenEspera={imgEspera} imagenUnDoctor={imgUnDoctor} imagenWA={imgWAPhoto}></ComoFunciona>
      <NuestrosDoctores imagenCardDoc={imgCard}></NuestrosDoctores>
    </React.Fragment>

      
  );
}

export default App;
