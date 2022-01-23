const UserDto = require('../domains/dtos/UserDto');
const User = require('../domains/models/User');
const UserRO = require('../domains/ros/UserRO');
const School = require("../domains/models/School");
const SchoolDto = require("../domains/dtos/SchoolDto");
const ClassDto = require("../domains/dtos/ClassDto");
const Classes = require("../domains/models/Classes");

const modelMapper = {
    userToDto(user) {
        let userDto = new UserDto();

        userDto.id = user.id;
        userDto.userTitle = user.user_title;
        userDto.userPass = user.user_pass;
        userDto.userName = user.user_name;
        userDto.email = user.email;
        userDto.phone = user.phone;
        userDto.lastLogin = user.last_login.toString();
        userDto.createdAt = user.created_at;
        userDto.isActive = user.is_active;

        return userDto;
    },

    dtoToUser(userDto) {
        let user = new User();

        user.id = userDto.id;
        user.user_title = userDto.userTitle;
        user.user_name = userDto.userName;
        user.user_pass = userDto.userPass;
        user.email = userDto.email;
        user.phone = userDto.phone;
        userDto.lastLogin !== null && (user.last_login = userDto.lastLogin);
        user.created_at = userDto.createdAt;
        user.is_active = userDto.isActive;

        return user;
    },

    userDtoToRO(userDto) {
        let userRO = new UserRO();

        userRO.id = userDto.id;
        userRO.userTitle = userDto.userTitle;
        userRO.username = userDto.username;
        userRO.email = userDto.email;
        userRO.phone = userDto.phone;
        userRO.lastLogin = userDto.lastLogin.toString();
        userRO.createdAt = userDto.createdAt;
        userRO.isActive = userDto.isActive;

        return userRO;
    },

    schoolToDto(school) {
        let schoolDto = new SchoolDto();

        schoolDto.id = school.id;
        schoolDto.schoolName = school.school_name;
        schoolDto.detail = school.detail;
        schoolDto.cityId = school.city_id;
        schoolDto.totalClass = school.total_class;
        schoolDto.createdAt = school.created_at;
        schoolDto.createdBy = school.created_by;
        schoolDto.isActive = school.is_active;

        return schoolDto;
    },

    dtoToSchool(schoolDto) {
        let school = new School();

        school.id = schoolDto.id;
        school.school_name = schoolDto.schoolName;
        school.detail = schoolDto.detail;
        school.city_id = schoolDto.cityId;
        school.total_class = schoolDto.totalClass;
        school.created_at = schoolDto.createdAt;
        school.created_by = schoolDto.createdBy;
        school.is_active = schoolDto.isActive;

        return school;
    },

    classToDto(classes) {
        let classDto = new ClassDto();

        classDto.id = classes.id;
        classDto.schoolName = classes.school_name;
        classDto.detail = classes.detail;
        classDto.cityId = classes.city_id;
        classDto.totalClass = classes.total_class;
        classDto.createdAt = classes.created_at;
        classDto.createdBy = classes.created_by;
        classDto.isActive = classes.is_active;

        return classDto;
    },

    dtoToClass(classDto) {
        let classes = new Classes();

        classes.id = classDto.id;
        classes.school_id = classDto.schoolId;
        classes.floor_num = classDto.floorNum;
        classes.class_name = classDto.className;
        classes.detail = classDto.detail;
        classes.created_at = classDto.createdAt;
        classes.created_by = classDto.createdBy;
        classes.is_active = classDto.isActive;

        return classes;
    }
}

module.exports = modelMapper;