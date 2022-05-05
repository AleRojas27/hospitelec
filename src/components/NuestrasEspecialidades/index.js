import "./NuestrasEspecialidades.css"

function NuestrasEspecialidades ({imagenNeu, imagenOpto, imagenMedico, imagenCardio, imagenOdonto}){
    return(

        <div className="container-fluid nuestrasEspecialidades">

            <div className="container">

                <h1 className="titulo__especialidades">NUESTRAS ESPECIALIDADES</h1>

                <div className="especialidades">

                    <a href="" className="especialidades__neorologia">

                        <img src={imagenNeu} alt="" className="neurologia__img" />

                        <p className="especialidades__text">Neurologia</p>

                    </a>

                    <a href="" className="especialidades__rehabilitacion">

                        <img src={imagenOpto} alt="" className="rehabilitacion__img" />

                        <p className="especialidades__text">Rehabilitación</p>

                    </a>

                    <a href="" className="especialidades__medicoGeneral">

                        <img src={imagenMedico} alt="" className="medicoGeneral__img" />

                        <p className="especialidades__text">Medico General</p>

                    </a>

                    <a href="" className="especialidades__cardiologo">

                        <img src={imagenCardio} alt="" className="cardiologo__img" />

                        <p className="especialidades__text">Cardiologo</p>

                    </a>

                    <a href="" className="especialidades__odontologia">

                        <img src={imagenOdonto} alt="" className="odontologia__img" />

                        <p className="especialidades__text">Odontologia</p>

                    </a>

                </div>

            </div>
            
        </div>

        
    )
}

export default NuestrasEspecialidades;