import "./SaludProfesional.css"

function SaludProfesional ({imagenSalud}){
    return(

        <div class="container-fluid saludProfesional">

            <div class="container saludProfesional__container">

                <div class="row saludProfesional__row">

                    <div class="col 6">

                        <div class="saludProfesional__img">

                            <img src={imagenSalud} alt="" class="img__telemedicina" />

                        </div>

                    </div>

                    <div class="col-6">

                        <div class="info__saludProfesional">

                            <h2 class="saludProfesional__titulo">Salud profesional al alcance, para toda la familia.</h2>

                            <p class="saludProfesional__parrafo">Con nuestro sistema avanzado de telemedicina nos aseguramos de estar en breve para atender la salud tuya y de tu familia.</p>

                            <button class="saludProfesional__button">

                                <p class="button__salud">Quiero una teleorientacion</p>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default SaludProfesional;