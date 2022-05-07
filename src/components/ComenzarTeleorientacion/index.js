import "./ComenzarTeleorientacion.css"

function ComenzarTeleorientacion ({ imagen }){
    return(

        <div className="container-fluid teleorientacion">

            <div className="container noPadding-sm noPadding-xs">

                <h1 className="titulo__teleorientacion">COMENZAR TELEORIENTACIÓN</h1>

                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <div className="teleorientacion__imagen">

                            <img src={imagen} alt="" className="teleorientacion__img" />

                        </div>

                    </div>

                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                        <form className="row teleorientacion__datos" type="GET">

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                <input type="text" name="nombre" className="datos__input" placeholder="Nombre completo" required />

                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                <input type="tel" name="celular" className="datos__input" placeholder="Numero de celular" required />            

                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                <div className="content-select">

                                    <select className="teleorientacion__servicio" name="seleccionDeServicios" required>

                                        <option>Servicio</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>

                                    </select>

                                    <i className="fa-solid fa-chevron-down teleorientacion__icono"></i>

                                </div>

                                

                            </div>

                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">

                                <input type="email" name="email" className="datos__input" placeholder="Correo electronico" required />

                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                <textarea name="comentario" id="" cols="30" rows="10" className="datos__input__caja" placeholder="Detalla cómo te sientes y que crees que debamos saber previo a tu teleorientación." required></textarea>

                            </div>

                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-1">

                                <button type="" className="teleorientacion__button">

                                    ENVIAR Y COMENZAR TELEORIENTACION

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