const userConstants = {
    GET_ALL_USER: "/getAllUser",
    REGISTER: "/register",
    LOGIN: "/login",
    LOGOUT: "/logout"
}

const routesConstants = {
    USERS: "/users",
    CLASSES: "/classes",
    SENSORS: "/sensors",
    SCHOOLS: "/schools",
    LOG_TEMPERATURES: "/logTemperatures",
    LOG_AIR_QUALITY: "/logAirQuality",
    LOG_ELECTRIC_CONSUMPTION: "/logElectricConsumption"
}

const authConstants = {
    TOKEN: "/token"
}

const commonConstants = {
    GET_ALL: "/getAll",
    GET_ONE: "/getOne/:id",
    INSERT: "/insert",
    DELETE: "/delete/:id"
}


module.exports = {
    routesConstants,
    userConstants,
    authConstants,
    commonConstants
}