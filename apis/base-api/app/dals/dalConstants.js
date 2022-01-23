const userDalConstants = {
    USER_LIST_QUERY: 'select * from patika.group3.users',
    INSERT_QUERY: 'insert into patika.group3.users (user_title, user_name, user_pass, email, phone, last_login, is_active) ',
    LOGIN_QUERY: "select id, user_name, user_pass from patika.group3.users"
}

const schoolDalConstants = {
    SCHOOL_LIST_QUERY: 'select * from patika.group3.schools',
    GET_SCHOOL_QUERY: 'select * from patika.group3.schools ',
    INSERT_QUERY: 'insert into patika.group3.schools (school_name, detail, city_id, total_class, created_by, is_active) ',
    DELETE_QUERY: 'delete from patika.group3.schools '
}

const classDalConstants = {
    CLASS_LIST_QUERY: 'select * from patika.group3.classes',
    GET_CLASS_QUERY: 'select * from patika.group3.classes ',
    INSERT_QUERY: 'insert into patika.group3.classes (school_id, floor_num, class_name, detail, created_by, is_active) ',
    DELETE_QUERY: 'delete from patika.group3.classes '
}

const sensorDalConstants = {
    GET_ALL_QUERY: 'select * from patika.group3.sensors',
    GET_ONE_QUERY: 'select * from patika.group3.sensors ',
    INSERT_QUERY: 'insert into patika.group3.sensors (school_id, class_id, sensor_name, detail, default_protocol, default_ip, default_port, default_channel, connected_at, created_by, is_online, is_active) ',
    DELETE_QUERY: 'delete from patika.group3.sensors '
}

const logTemperatureDalConstants = {
    GET_ALL_QUERY: 'select * from patika.group3.log_temperature',
    GET_ONE_QUERY: 'select * from patika.group3.log_temperature ',
    INSERT_QUERY: 'insert into patika.group3.log_temperature (school_id, class_id, sensor_id, sensor_data, read_at) ',
    DELETE_QUERY: 'delete from patika.group3.log_temperature '
}

const logAirQualityDalConstants = {
    GET_ALL_QUERY: 'select * from patika.group3.log_air_quality',
    GET_ONE_QUERY: 'select * from patika.group3.log_air_quality ',
    INSERT_QUERY: 'insert into patika.group3.log_air_quality (school_id, class_id, sensor_id, sensor_data, read_at) ',
    DELETE_QUERY: 'delete from patika.group3.log_air_quality '
}

const logElectricityConsumptionDalConstants = {
    GET_ALL_QUERY: 'select * from patika.group3.log_electricity_consumption',
    GET_ONE_QUERY: 'select * from patika.group3.log_electricity_consumption ',
    INSERT_QUERY: 'insert into patika.group3.log_electricity_consumption (school_id, class_id, sensor_id, sensor_data, read_at) ',
    DELETE_QUERY: 'delete from patika.group3.log_electricity_consumption '
}

module.exports = {
    userDalConstants,
    schoolDalConstants,
    classDalConstants,
    sensorDalConstants,
    logTemperatureDalConstants,
    logAirQualityDalConstants,
    logElectricityConsumptionDalConstants
}