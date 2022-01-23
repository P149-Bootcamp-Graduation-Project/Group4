class SchoolDto {
    constructor({id, school_name, detail, city_id, total_class, created_at, created_by, is_active} = {}) {
        this.id = id;
        this.schoolName = school_name;
        this.detail = detail;
        this.cityId = city_id;
        this.totalClass = total_class;
        this.createdAt = created_at;
        this.createdBy = created_by;
        this.isActive = is_active;
    }
}

module.exports = SchoolDto;