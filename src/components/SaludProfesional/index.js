import "./SaludProfesional.css"

function SaludProfesional ({imagenSalud}){
    return(

        <div className="container-fluid saludProfesional">

            <div className="container saludProfesional__container">

                <div className="row saludProfesional__row">

                    <div className="col 6">

                        <div className="saludProfesional__img">

                            <img src={imagenSalud} alt="" className="img__telemedicina" />

                        </div>

                    </div>

                    <div className="col-6">

                        <div className="info__saludProfesional">

                            <h2 className="saludProfesional__titulo">Salud profesional al alcance, para toda la familia.</h2>

                            <p className="saludProfesional__parrafo">Con nuestro sistema avanzado de telemedicina nos aseguramos de estar en breve para atender la salud tuya y de tu familia.</p>

                            <button className="saludProfesional__button">

                                <p className="button__salud">Quiero una teleorientacion</p>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default SaludProfesional;