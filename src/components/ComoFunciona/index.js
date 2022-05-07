import "./ComoFunciona.css"

function ComoFunciona ({imagenSolicita, imagenEspera, imagenUnDoctor, imagenWA}){
    return(

        <div className="container-fluid comoFunciona">

            <div className="container noPadding-sm noPadding-xs comoFunciona__container">

                <h1 className="comoFunciona__titulo">¿Cómo Funciona?</h1>

                <div class="row comoFunciona__row">

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">

                        <div className="comoFunciona__pasos">

                            <img src={imagenSolicita} alt="" className="pasos__img" />

                            <div className="pasos__info">

                                <span className="info__numero">1.</span>

                                <p className="info__text">Solicita una teleorientación desde el portal</p>

                            </div>

                        </div>

                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">

                        <div className="comoFunciona__pasos">

                            <img src={imagenEspera} alt="" className="pasos__img" />

                            <div className="pasos__info">

                                <span className="info__numero">2.</span>

                                <p className="info__text">Espera en la sala virtual. Te avisaremos cuando te toque.</p>

                            </div>

                        </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">

                        <div className="comoFunciona__pasos">

                            <img src={imagenUnDoctor} alt="" className="pasos__img" />

                            <div className="pasos__info">

                                <span className="info__numero">3.</span>

                                <p className="info__text">Un doctor comienza la teleorientación.</p>

                            </div>

                        </div>
                        
                    </div>

                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">

                        <div className="comoFunciona__pasos">

                            <img src={imagenWA} alt="" className="pasos__img" />

                            <div className="pasos__info">

                                <span className="info__numero">4.</span>

                                <p className="info__text">Te avisamos cuando comience tu teleorientación.</p>

                            </div>

                        </div>
                        
                    </div>

                </div>

            </div>

        </div>

    )
}

export default ComoFunciona;