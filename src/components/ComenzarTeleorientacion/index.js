import React from 'react';
import "./ComenzarTeleorientacion.css"
import fetchData from './../../services/fetchData';
import config from "./../../config";
const URLAPI = config.urlApi;

function ComenzarTeleorientacion ({ imagen }){

    const [servicios, setServicios] = React.useState([]);
    const [serviciosMotivos, setServiciosMotivos] = React.useState([]);

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        getServicios()
    } , [])
    
    const getServicios = () => {
        fetchData('GET', `${URLAPI}servicio`)
            .then(data => {
                setServicios(data);
            })
            .catch(err => {
                console.log(`ha petao ${err}`);
            })
    }

    const getServiciosMotivos = (idServicio) => {
        fetchData('GET', `${URLAPI}servicio/${idServicio}/motivos`)
            .then(data => {
                setServiciosMotivos(data);
                document.getElementById("idServicioMotivo").disabled = false;
            })
            .catch(err => {
                console.log(`ha petao ${err}`);
            })
    }

    const onChangeSelectServicios = (e) => {
        if(e.target.value.length > 0){
            getServiciosMotivos(e.target.value);
        } else {
            setServiciosMotivos([])
            document.getElementById("idServicioMotivo").disabled = true;
        }
    }

    const onSubmitFormulario = (e) => {
        e.preventDefault();
        let values = new FormData(e.target)
        let objectValues = Object.fromEntries(values);
        setLoading(true);
        fetchData('POST', `${URLAPI}paciente`, objectValues)
            .then(data => {
                console.log(data);
                let idPaciente = data.id;
                let dataCita = {
                    idPaciente: idPaciente,
                    idServicioMotivo: objectValues.idServicioMotivo,
                    idCitaEtapa: "1" //Inicializamos la cita para que un doctor la pueda atender
                }
                fetchData('POST', `${URLAPI}cita`, dataCita)
                    .then(data => {
                        if(data.response === 'success'){
                            document.getElementById("formularioComenzarTeleorientacion").reset();
                            document.getElementById("idServicioMotivo").disabled = true;
                            setServiciosMotivos([]);
                            setLoading(false);
                            window.location.href = `/sala-espera/${data.id}`;
                            console.log(data)
                        } else {
                            console.log('error al crear la cita');
                        }
                    })
                    .catch(err => {
                        console.log(`ha petao el servidor ${err}`);
                    })
            })
            .catch(err => {
                console.log(`ha petao el servidor${err}`);
            })

        setLoading(false);
    }

    return(

        <div className="container-fluid teleorientacion">

            <div className="container">

                <h1 className="titulo__teleorientacion">COMENZAR TELEORIENTACIÓN</h1>

                <div className="row">

                    <div className="col-6">

                        <div className="teleorientacion__imagen">

                            <img src={imagen} alt="" className="teleorientacion__img" />

                        </div>

                    </div>

                    <div className="col-6">

                        <form id="formularioComenzarTeleorientacion" className="row teleorientacion__datos" onSubmit={ onSubmitFormulario }>

                            <div className="col-4">

                                <input 
                                    type="text" 
                                    name="nombre" 
                                    className="datos__input" 
                                    placeholder="Nombre(s)" 
                                    required />

                            </div>

                            <div className="col-4">

                                <input 
                                    type="text" 
                                    name="apellidoPaterno" 
                                    className="datos__input" 
                                    placeholder="Apellido paterno" 
                                    required />

                            </div>

                            <div className="col-4">

                                <input 
                                    type="text" 
                                    name="apellidoMaterno" 
                                    className="datos__input" 
                                    placeholder="Apellido materno" 
                                    required />

                            </div>

                            <div className="col-6 mt-2">

                                <input 
                                    type="number" 
                                    name="telefono" 
                                    className="datos__input" 
                                    placeholder="Numero de celular" 
                                    required />            

                            </div>

                            <div className="col-6 mt-2">

                                <input type="email" name="correo" className="datos__input" placeholder="Correo electronico" required />

                            </div>

                            <div className="col-6 mt-2">

                                <select className="teleorientacion__servicio" name="seleccionDeServicios" required onChange={ onChangeSelectServicios }>
                                    <option value="">
                                        ¿Qué consulta necesitas?
                                    </option>

                                    {
                                        servicios.map(
                                            servicio => 
                                                <option 
                                                    key={servicio.id_servicio} 
                                                    value={servicio.id_servicio}>
                                                    {servicio.nombre}
                                                </option>
                                        )
                                    }

                                </select>

                            </div>

                            <div className="col-6 mt-2">

                                <select className="teleorientacion__servicio" name="idServicioMotivo" id="idServicioMotivo" required disabled >

                                    {
                                        serviciosMotivos.length === 0 &&
                                            <option value="">
                                                Selecciona una consulta
                                            </option>
                                    }
                                    {   
                                        serviciosMotivos.map(
                                            motivo => 
                                                <option 
                                                    key={motivo.id_servicio_motivo} 
                                                    value={motivo.id_servicio_motivo}>
                                                    {motivo.nombre}
                                                </option>
                                        )
                                    }

                                </select>

                            </div>

                            <div className="col-12 mt-2">

                                <textarea name="mensaje" id="" cols="30" rows="10" className="datos__input__caja" placeholder="Describe el como te sientes y más detalles." required></textarea>

                            </div>

                            <div className="col-12 mt-4">

                                <button disabled={loading} className="teleorientacion__button">

                                    <p className="button__enviar">ENVIAR Y COMENZAR TELEORIENTACION</p>

                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ComenzarTeleorientacion;