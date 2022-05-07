import "./Inicio.css"

function Inicio ({ imagen }){
    return(
        <div className="container-fluid pagPrinHospitelec">

            <div className="container noPadding-sm noPadding-xs pagPrinHospitelec__container">

                <div className="row">

                    <div className="col-xl-1 col-lg-0 col-md-0 col-sm-0 col-xs-0">

                    </div>

                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <div className="introduccion__paginaPrincipal"> 

                            <h1 className="text__claro">Estamos <span className="text__fuerte">contigo</span> en todo <span className="text__fuerte">momento</span></h1>

                            <p className="text__parrafo">Obtén asesoría médica 24/7 con nuestros especialistas vía online (llamada, vídeollamada y chat)</p>

                            <a href="" className="paginaPrincipal__button">

                                <button className="button__teleorientacion">

                                    Comienza una teleorientación

                                </button>

                            </a>

                        </div>
                    
                    </div>

                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-0 col-xs-0">

                        <div className="introduccion__img">

                            <img src={imagen} alt="" className="img__paginaPrincipal" />

                        </div>

                    </div>

                    <div className="col.xl-1 col-lg-0 col-mg-0 col-sm-0 col-xs-0">

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Inicio;