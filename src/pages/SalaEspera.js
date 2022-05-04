import React from 'react';
import { useLocation } from 'react-router-dom';
import fetchData from './../services/fetchData';
import config from "./../config";
import DailyIframe from '@daily-co/daily-js';

// IMAGENES
import imgDocSala from "./../assets/img/gatoXd.jepg"
import imgVistaPrevia from "./../assets/img/dosificacion_alginato.jpg"
import imgLogoPrivado from "./../assets/img/hospital_privado_logo.png"
import logo from "./../assets/img/logoHospitelec.png"

import HeaderSalaEspera from "./../components/HeaderSalaEspera"
import InfoDoc from "./../components/InfoDoc"
import CardPresentacion from "./../components/CardPresentacion"
import FooterSalaEspera from "./../components/FooterSalaEspera"

const URLAPI = config.urlApi;

export default function SalaEspera({ children }){
    
    const location = useLocation();
    const idCita = location.pathname.split('/')[2];

    const [numeroPacientes, setNumeroPacientes] = React.useState(0);
    const [urlRoomCita, setUrlRoomCita] = React.useState('');

    function getNumeroPacientesSalaEspera(){
        fetchData('GET', `${URLAPI}cita/beforeAttending`)
            .then(data => setNumeroPacientes(data.length))
            .catch(err => {
                console.log("ha pteao", err);
            })
    }

    function getDatosDeCita(refresh){
        fetchData('GET', `${URLAPI}cita/${idCita}`)
            .then(data => verificarCita(data, refresh))
            .catch(err => {
                console.log("ha pteao", err);
            })
    }

    async function verificarCita(data, refresh){
        const urlCita = data[0].url_cita_room;
        console.log("data", data);
        if(urlCita !== null && urlCita !== undefined && urlRoomCita === ""){
            clearInterval(refresh);
            // MOSTRAR UN BOTON AL USUARIO PARA QUE VAYA A LA TELEORIENTACIÓN
            window.location.href = `/cita/${idCita}`;
        }

    }

    React.useEffect(() => {
        getNumeroPacientesSalaEspera()
        var refresh = setInterval(function() {
            if(urlRoomCita === ""){
                getNumeroPacientesSalaEspera()
                getDatosDeCita(refresh)
            }
          }, 2000);
    } , []);

    return(
        <section>
            <HeaderSalaEspera imagen={logo}/>

            <InfoDoc 
                imagenDocSala={imgDocSala} 
                imagenVistaPrevia={imgVistaPrevia} 
                numeroPacientesEspera={numeroPacientes}
            />

            <CardPresentacion imagenLogoPrivado={imgLogoPrivado}/>
            <FooterSalaEspera />
            
            
        </section>
    );
}