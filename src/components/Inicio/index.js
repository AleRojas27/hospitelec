import "./Inicio.css"

function Inicio ({ imagen }){
    return(
        <div className="container-fluid pagPrinHospitelec">

            <div className="container pagPrinHospitelec__container">

                <div className="row">

                    <div className="col-6">

                        <div className="introduccion__paginaPrincipal"> 

                            <h1 className="text__claro">Estamos <span className="text__fuerte">contigo</span> en todo <span className="text__fuerte">momento</span></h1>

                            <p className="text__parrafo">Obtén asesoría médica 24/7 con nuestros especialistas vía online (llamada, vídeollamada y chat)</p>

                            <a href="" className="paginaPrincipal__button">

                                <button className="button__teleorientacion">

                                    <p className="teleorientacion__text">Comienza una teleorientación</p>

                                </button>

                            </a>

                        </div>
                    
                    </div>

                    <div className="col-6">

                        <div className="introduccion__img">

                            <img src={imagen} alt="" className="img__paginaPrincipal" />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Inicio;