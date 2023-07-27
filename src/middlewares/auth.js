const User = require("../api/models/user.models");
const {verifySign} = require("../utils/jwt");

const pruebaMiddleware = (req,res,next) => {
    console.log("esto es mi función middleware");
    next(); //funcion next da paso a lo que haya a continuación
}
const isAuth = async( req,res,next) =>{
    try {
        // console.log(req.headers.authorization);
        const authorization = req.headers.authorization
        if (!authorization) {
            return res.status(401).json({message:"no estas autorizado"})
        }
        // con esta variable nos quedamos con lo que nos interesa del token quitando el bearer y el espacio, para tener nuestro token limpio

        const token = authorization.split(" ")[1]
        console.log(token);
        if (!token) {
            return res.status(401).json({message:"el token es invalido o no existe"})
        }
        
        // usamos nuestra función de validación del token que habiamos creado antes y le mandamos por parametro nuestro token

        const tokenVerified = verifySign(token);
        //  esto me devuelve la información de nuestro token que contiene el id y el email del usuario que se logeo
        // console.log(tokenVerified);
        if (!tokenVerified.id) {
            return res.status(401).json(tokenVerified)
        }
        // nos creamos una variable que lo que haga es buscar por id, si existe ese usuario en nuestra base de datos y ya le dejamos pasar, porque ha pasado todas nuestras puertas.
        const userLogged = await User.findById(tokenVerified.id);
        req.user = userLogged;
        next()

    } catch (error) {
        return res.status(500).json(error)
    }
}
const isAdmin = async( req,res,next) =>{
    try {
        // console.log(req.headers.authorization);
        const authorization = req.headers.authorization
        if (!authorization) {
            return res.status(401).json({message:"no estas autorizado"})
        }
        // con esta variable nos quedamos con lo que nos interesa del token quitando el bearer y el espacio, para tener nuestro token limpio

        const token = authorization.split(" ")[1]
        // console.log(token);
        if (!token) {
            return res.status(401).json({message:"el token es invalido o no existe"})
        }
        
        // usamos nuestra función de validación del token que habiamos creado antes y le mandamos por parametro nuestro token

        const tokenVerified = verifySign(token);
        //  esto me devuelve la información de nuestro token que contiene el id y el email del usuario que se logeo
        // console.log(tokenVerified);
        if (!tokenVerified.id) {
            return res.status(401).json(tokenVerified)
        }
        // nos creamos una variable que lo que haga es buscar por id, si existe ese usuario en nuestra base de datos y ya le dejamos pasar, porque ha pasado todas nuestras puertas.
        const userLogged = await User.findById(tokenVerified.id);
        req.user = userLogged;
        // console.log(userLogged);
        if (userLogged.role !== "admin") {
            return res.status(401).json({message:"no eres administrador campeon"})
        }
        next()

    } catch (error) {
        return res.status(500).json(error)
    }
}


module.exports = {pruebaMiddleware,isAuth,isAdmin}