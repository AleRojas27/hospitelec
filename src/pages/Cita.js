import React from "react";
import { useLocation } from 'react-router-dom';
import DailyIframe from '@daily-co/daily-js';
import fetchData from './../services/fetchData';
import config from "./../config";

import HeaderSalaEspera from "./../components/HeaderSalaEspera"
import logo from "./../assets/img/logoHospitelec.png"
const URLAPI = config.urlApi;

export default function Cita(){

    const location = useLocation();
    const idCita = location.pathname.split('/')[2];

    const [urlRoomCita, setUrlRoomCita] = React.useState('');

    const getDatosDeCita = () => {
        fetchData('GET', `${URLAPI}cita/${idCita}`)
            .then(data => comenzarCita(data))
            .catch(err => {
                console.log("ha pteao", err);
            })
    }

    function comenzarCita(data){
        console.log(data)
        const urlCita = data[0].url_cita_room;
        setUrlRoomCita(urlCita);
        const room = document.getElementById('room');
        console.log("room", room);
        const callFrame = DailyIframe.createFrame(room)
            .on('left-meeting', () => {
                // HA TERMINADO LA CITA, Y LO ENVIARÁ A LA SALA DE GRACIAS
                window.location.href = `/gracias/${idCita}`;
            });
        try {
            callFrame.join({
                url: urlCita,
                showLeaveButton: true,
                userName:"Paciente",
                theme: {
                    colors: {
                        accent: '#093548',
                        accentText: '#FFFFFF',
                        background: '#29AAE3',
                        backgroundAccent: '#FBFCFD',
                        baseText: '#000000',
                        border: '#EBEFF4',
                        mainAreaBg: '#000000',
                        mainAreaBgAccent: '#333333',
                        mainAreaText: '#FFFFFF',
                        supportiveText: '#808080',
                    },
                },
            });
        } catch (e) {
            console.error(e);
        }
        // if(room !== null){
        // }
    }
    
    React.useEffect(() => {
        // Tenemos que esperar 1 seg para realizar la consulta
        setTimeout(function(){
            getDatosDeCita();
        }, 3000);
    } , []);

    return(
        <section>
            <HeaderSalaEspera imagen={logo}/>
            <div id="room"></div> 
            <div className={ `${urlRoomCita !== "" && "hide"} text-center`}>
                <div className="lds-heart"><div></div></div>
                <p>Iniciando consulta...</p>
            </div>
        </section>
    );
}