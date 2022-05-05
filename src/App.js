// PÁGINAS
import Home from './pages/Home';
import SalaEspera from './pages/SalaEspera';
import Gracias from './pages/Gracias';
import Cita from './pages/Cita';

// COMPONENTES
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header"
import Inicio from "./components/Inicio"
import ComenzarTeleorientacion from "./components/ComenzarTeleorientacion"
import NuestrasEspecialidades from "./components/NuestrasEspecialidades"
import SaludProfesional from "./components/SaludProfesional"
import ComoFunciona from "./components/ComoFunciona"
import NuestrosDoctores from "./components/NuestrosDoctores"

// RECURSOS
import './App.css';

// IMAGENES
import logo from "./assets/img/logoHospitelec.png"
import imgInicio from "./assets/img/gatoXd.jepg"
import imgComenzarTeleorientacion from "./assets/img/dentista.png"
import imgNeurologia from "./assets/img/neurologia.svg"
import imgOptometria from "./assets/img/rehabilitacion.svg"
import imgMedicoGeneral from "./assets/img/medico_general.svg"
import imgCardiologo from "./assets/img/cardiologo.svg"
import imgOdontologia from "./assets/img/odontologia.svg"
import imgSaludProfesional from "./assets/img/protectores_personalizados.jpg"
import imgSolicita from "./assets/img/solicita.svg"
import imgEspera from "./assets/img/espera.svg"
import imgUnDoctor from "./assets/img/un_doctor.svg"
import imgWAPhoto from "./assets/img/WA_photo.svg"
import imgCard from "./assets/img/gatoXd.jepg"
 
function App() {

  return (

    <React.Fragment>

      <BrowserRouter>
          <Switch>
              <Route path="/" exact> 
                <Home>
                  <Header imagen={logo}></Header>
                  <Inicio imagen={imgInicio}></Inicio>
                  <ComenzarTeleorientacion imagen={imgComenzarTeleorientacion}></ComenzarTeleorientacion>
                  <NuestrasEspecialidades imagenNeu={imgNeurologia} imagenOpto={imgOptometria} imagenMedico={imgMedicoGeneral} imagenCardio={imgCardiologo} imagenOdonto={imgOdontologia}></NuestrasEspecialidades>
                  <SaludProfesional imagenSalud={imgSaludProfesional}></SaludProfesional>
                  <ComoFunciona imagenSolicita={imgSolicita} imagenEspera={imgEspera} imagenUnDoctor={imgUnDoctor} imagenWA={imgWAPhoto}></ComoFunciona>
                  <NuestrosDoctores imagenCardDoc={imgCard}></NuestrosDoctores>
                </Home>
              </Route>

              <Route path="/sala-espera/:id" exact>
                <SalaEspera />
              </Route>
              
              <Route path="/cita/:id" exact>
                <Cita />
              </Route>
              
              <Route path="/gracias/:id" exact>
                <Gracias />
              </Route>
          </Switch>
      </BrowserRouter>
      
    </React.Fragment>

      
  );
}

export default App;
