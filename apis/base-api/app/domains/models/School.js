class School {
    constructor({id, school_name, detail, city_id, total_class, created_at, created_by, is_active} = {}) {
        this.id = id;
        this.school_name = school_name;
        this.detail = detail;
        this.city_id = city_id;
        this.total_class = total_class;
        this.created_at = created_at;
        this.created_by = created_by;
        this.is_active = is_active;
    }
}

module.exports = School;