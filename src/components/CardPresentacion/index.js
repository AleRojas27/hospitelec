import "./CardPresentacion.css"

function CardPresentacion ({imagenLogoPrivado}){
    return (

        <div className="container-fluid">

            <div className="container noPadding-xs noPadding-sm">

                <div className="row">

                    <div className="col-xs-12 col-sm-12">

                        <div className="cardPrivado">

                            <div className="header__cardPrivado">

                                <img src={imagenLogoPrivado} alt="" className="cardPrivado__img" />

                            </div>

                            <div className="body__cardPrivado">

                                <p className="cardPrivado__text">
                
                                    Hola soy el Dr. bolitas y te atenderé el día de hoy. Cuando esté disponible tu teleorientación te lo notificaremos.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default CardPresentacion;