import "./InfoDoc.css"

function InfoDoc ({imagenDocSala, imagenVistaPrevia, numeroPacientesEspera}){
    return(
        <div className="container-fluid salaEspera">

            <div className="container salaEspera__container noPadding-xs noPadding-sm">

                <h1 className="salaEspera__titulo">
                    { numeroPacientesEspera === 1 ? 
                        `${ numeroPacientesEspera } paciente está ` : 
                        `${ numeroPacientesEspera } pacientes están ` 
                    } 
                    en espera
                </h1>

                <div className="text-center">
                    <div className="lds-heart"><div></div></div>
                </div>

                <p className="salaEspera__info">Su teleorientación comenzara pronto...</p>

                <div className="row">

                    <div className="col-8">

                        <div className="card__hospitelec">

                            <div className="header-cardHospitelec">

                                <img src={imagenDocSala} alt="" className="cardHospitelec__img" />

                            </div>

                            <div className="body-cardHospitelec">

                                <div className="cardHospitelec__infoDoc">

                                    <span className="infoDoc__name">Dr. Bolitas</span>

                                    <p className="infoDoc__profesion">Médico general</p>

                                </div>

                                <button className="cardHospitelec__button">

                                    <p className="buttonOcupado__text">Ocupado</p>

                                </button>

                            </div>

                        </div>

                    </div>

                    <div className="col-4 noPadding-xs noPadding-sm">

                        <div className="vistaPrevia">

                            <img src={imagenVistaPrevia} alt="" className="vistaPrevia__img" />

                            <p className="vistaPrevia__text">Esta es su pantalla de vista previa.</p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )

}

export default InfoDoc;