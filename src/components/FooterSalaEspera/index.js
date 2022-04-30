import "./FooterSalaEspera.css"

function FooterSalaEspera (){
    return (

        <div className="container-fluid">

            <div className="container noPadding-xs noPadding-sm">

                <div className="row">

                    <div className="col-xs-12">

                        <div className="verificacion">

                            <p className="verificacion__text">Si desea verificar su video y audio antes de la cita, haga clic en el botón de abajo para probar.</p>

                            <a href="" className="button__envuelto">

                                <button className="verificacion__button">

                                    <p className="button__texto">Verificar video y audio</p>

                                </button>

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )

}

export default FooterSalaEspera;