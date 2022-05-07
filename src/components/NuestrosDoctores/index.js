import "./NuestrosDoctores.css"

function NuestrosDoctores({imagenCardDoc}){
    return(

        <div className="container-fluid nuestrosDoctores">

            <div className="container noPadding-sm noPadding-xs nuestrosDoctores__container">

                <h1 className="nuestrosDoctores__titulo">NUESTROS DOCTORES</h1>

                <div className="row nuestrosDoctores__row mt-5">

                    <div className="col-xl-4 col-lg-4 col-md-6">

                        <div className="card__nuestrosDoctores">

                            <div className="header__nuestrosDoctores">

                                <img src={imagenCardDoc} alt="" className="nuestrosDoctores__img" />

                                <i class="fa-solid fa-circle-check nuestrosDoctores__icon"></i>

                            </div>

                            <div className="body__nuestrosDoctores">

                                <span className="nuestrosDoctores__nombreDoctor">Juanita la de Allá</span> <br/>

                                <span className="nuestrosDoctores__nombreEspecialidad">Nombre de su especialidad</span> <br/>

                                <span className="nuestrosDoctores__añosExperiencia">10 años de experiencia</span> <br/>

                                <a href="" className="nuestrosDoctores__button">

                                    <button className="button__tele">

                                        Hacer teleorientacion

                                    </button>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-0 col-xs-0">

                        <div className="card__nuestrosDoctores">

                            <div className="header__nuestrosDoctores">

                                <img src={imagenCardDoc} alt="" className="nuestrosDoctores__img" />

                                <i class="fa-solid fa-circle-check nuestrosDoctores__icon"></i>

                            </div>

                            <div className="body__nuestrosDoctores">

                                <span className="nuestrosDoctores__nombreDoctor">Jeje saludos xD</span> <br/>

                                <span className="nuestrosDoctores__nombreEspecialidad">Ginecologa</span> <br/>

                                <span className="nuestrosDoctores__añosExperiencia">12 años de experiencia</span> <br/>

                                <a href="" className="nuestrosDoctores__button">

                                    <button className="button__tele">

                                        <span className="tele__text">Hacer teleorientacion</span>

                                    </button>

                                </a>

                            </div>

                        </div>

                    </div>

                    <div className="col-xl-4 col-lg-4 col-md-0 col-sm-0 col-xs-0">

                        <div className="card__nuestrosDoctores">

                            <div className="header__nuestrosDoctores">

                                <img src={imagenCardDoc} alt="" className="nuestrosDoctores__img" />

                                <i class="fa-solid fa-circle-check nuestrosDoctores__icon"></i>

                            </div>

                            <div className="body__nuestrosDoctores">

                                <span className="nuestrosDoctores__nombreDoctor">Dr. Bolitas</span> <br/>

                                <span className="nuestrosDoctores__nombreEspecialidad">El perro de todos</span> <br/>

                                <span className="nuestrosDoctores__añosExperiencia">25 años de experiencia</span> <br/>

                                <a href="" className="nuestrosDoctores__button">

                                    <button className="button__tele">

                                        Hacer teleorientacion

                                    </button>

                                </a>

                            </div>

                        </div>

                    </div>

                </div>

                <a href="" className="nuestrosDoctores__doctores">

                    <span className="doctores__text">VER TODOS LOS DOCTORES</span>

                </a>

            </div>

        </div>
    )
}

export default NuestrosDoctores;