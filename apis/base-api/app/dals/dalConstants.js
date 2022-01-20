const userDalConstants = {
    USER_LIST_QUERY: 'select * from patika.group3.users',
    INSERT_QUERY: 'insert into patika.group3.users (user_title, user_name, user_pass, email, phone, last_login, is_active) ',
    LOGIN_QUERY: 'select id, user_name, user_pass from patika.group3.users where user_name={0} and user_pass={1}'
}

module.exports = {
    userDalConstants
}