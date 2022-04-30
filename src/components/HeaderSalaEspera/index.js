import "./HeaderSalaEspera.css"

function HeaderSalaEspera({imagen}){
    return(

        <div class="container-fluid cabezoteHospitelec">

            <div class="cabezoteHospitelec__logo">

                <img src={imagen} alt="" class="logo__hospitelec" />

            </div>

        </div>
    )

}

export default HeaderSalaEspera;