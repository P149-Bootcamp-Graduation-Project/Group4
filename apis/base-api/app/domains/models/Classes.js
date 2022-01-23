class Classes {
    constructor({id, school_id, floor_num, class_name, detail, created_at, created_by, is_active} = {}) {
        this.id = id;
        this.school_id = school_id;
        this.floor_num = floor_num;
        this.class_name = class_name;
        this.detail = detail;
        this.created_at = created_at;
        this.created_by = created_by;
        this.is_active = is_active;
    }
}

module.exports = Classes;