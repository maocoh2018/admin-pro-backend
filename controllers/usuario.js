const Usuario = require('../models/usuario');

const getUsuarios = async (req, res) => { 
    
    const usuarios = await Usuario.find({}, 'nombre')
    

    res.json({
        ok: true,
        usuarios:[]
    });
}

const crearUsuario = async(req, res) => { 
    //console.log(req.body);
    
    const {email, password, nombre} = req.body;

    try {
        const usuario = new Usuario( req.body );
        await usuario.save();
        res.json({
            ok:true,
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error inesperado....revisar logs'
        });
    }


    

}

module.exports = {
    getUsuarios,
    crearUsuario
}

