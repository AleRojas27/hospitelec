import "./Header.css"

function Header({ imagen }){
    return(
        <div className="container-fluid cabezoteHospitelecCompu">

            <div className="container noPadding-sm noPadding-xs">

                <div className="cabezoteHospitelecCompu__escitorio">

                    <div className="escritorio__logoHospitelec">

                        <img src={imagen} alt="" className="logoHospitelec" />

                    </div>

                    <ul className="escritorio__lista noMargin-md noMargin-xs">

                        <li>

                            <a href="" className="lista__referencia col-sm-0 col-xs-0">

                                <span className="referencia__text">¿Como funciona?</span>

                            </a>

                        </li>

                        <li>

                            <a href="" className="lista__referencia col-sm-0 col-xs-0">

                                <span className="referencia__text">Servicios</span>

                            </a>

                        </li>

                        <li>

                            <a href="" className="lista__referencia col-sm-0 col-xs-0">

                                <span className="referencia__text">Doctores</span>

                            </a>

                        </li>

                        <li>

                            <a href="" className="lista__referencia col-md-0 col-sm-0 col-xs-0">

                                <button className="referencia__button">

                                    <span className="button__text">Comenzar teleorientación</span>

                                </button>

                            </a>

                        </li>

                    </ul>

                </div>

            </div>

        </div>
    )
}

export default Header;