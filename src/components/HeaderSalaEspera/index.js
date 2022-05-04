import "./HeaderSalaEspera.css"

function HeaderSalaEspera({imagen}){
    return(

        <div className="container-fluid cabezoteHospitelec">

            <div className="cabezoteHospitelec__logo">

                <img src={imagen} alt="" className="logo__hospitelec" />

            </div>

        </div>
    )

}

export default HeaderSalaEspera;