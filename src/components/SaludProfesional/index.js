import "./SaludProfesional.css"

function SaludProfesional ({imagenSalud}){
    return(

        <div className="container-fluid saludProfesional">

            <div className="container noPadding-sm noPadding-xs saludProfesional__container">

                <div className="row saludProfesional__row">

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-0 col-xs-0">

                        <div className="saludProfesional__img">

                            <img src={imagenSalud} alt="" className="img__telemedicina" />

                        </div>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <div className="info__saludProfesional">

                            <h2 className="saludProfesional__titulo">Salud profesional al alcance, para toda la familia.</h2>

                            <p className="saludProfesional__parrafo">Con nuestro sistema avanzado de telemedicina nos aseguramos de estar en breve para atender la salud tuya y de tu familia.</p>

                            <div className="saludProfesional__boton">

                                <button className="saludProfesional__button">

                                    Quiero una teleorientacion

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default SaludProfesional;