import "./ComenzarTeleorientacion.css"

function ComenzarTeleorientacion ({ imagen }){
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

                        <form className="row teleorientacion__datos" type="GET">

                            <div className="col-6">

                                <input type="text" name="nombre" className="datos__input" placeholder="Nombre completo" required />

                            </div>

                            <div className="col-6">

                                <input type="number" name="celular" className="datos__input" placeholder="Numero de celular" required maxlength="15" />            

                            </div>

                            <div className="col-6 mt-2">

                                <select className="teleorientacion__servicio" name="seleccionDeServicios" required>

                                    <option>Servicio</option>

                                </select>

                            </div>

                            <div className="col-6 mt-2">

                                <input type="email" name="email" className="datos__input" placeholder="Correo electronico" required />

                            </div>

                            <div className="col-12 mt-2">

                                <textarea name="comentario" id="" cols="30" rows="10" className="datos__input__caja" placeholder="" required></textarea>

                            </div>

                            <div className="col-12 mt-4">

                                <button type="" className="teleorientacion__button">

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