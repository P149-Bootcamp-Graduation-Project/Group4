class ClassDto {
    constructor({id, school_id, floor_num, class_name, detail, created_at, created_by, is_active} = {}) {
        this.id = id;
        this.schoolId = school_id;
        this.floorNum = floor_num;
        this.className = class_name;
        this.detail = detail;
        this.createdAt = created_at;
        this.createdBy = created_by;
        this.isActive = is_active;
    }
}

module.exports = ClassDto;