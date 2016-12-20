package com.consoft.unistrapg.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

import com.consoft.unistrapg.domain.enumeration.CourseLevel;

import com.consoft.unistrapg.domain.enumeration.Language;

/**
 * A Course.
 */
@Entity
@Table(name = "course")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "course")
public class Course implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name = "code", nullable = false)
    private String code;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "lecturer")
    private String lecturer;

    @NotNull
    @DecimalMin(value = "0")
    @Column(name = "duration", precision=10, scale=2, nullable = false)
    private BigDecimal duration;

    @NotNull
    @DecimalMin(value = "0")
    @Column(name = "min_num_reg_stud", precision=10, scale=2, nullable = false)
    private BigDecimal minNumRegStud;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "level", nullable = false)
    private CourseLevel level;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "taught_language", nullable = false)
    private Language taughtLanguage;

    @ManyToMany(mappedBy = "courses")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Student> students = new HashSet<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public Course code(String code) {
        this.code = code;
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getName() {
        return name;
    }

    public Course name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLecturer() {
        return lecturer;
    }

    public Course lecturer(String lecturer) {
        this.lecturer = lecturer;
        return this;
    }

    public void setLecturer(String lecturer) {
        this.lecturer = lecturer;
    }

    public BigDecimal getDuration() {
        return duration;
    }

    public Course duration(BigDecimal duration) {
        this.duration = duration;
        return this;
    }

    public void setDuration(BigDecimal duration) {
        this.duration = duration;
    }

    public BigDecimal getMinNumRegStud() {
        return minNumRegStud;
    }

    public Course minNumRegStud(BigDecimal minNumRegStud) {
        this.minNumRegStud = minNumRegStud;
        return this;
    }

    public void setMinNumRegStud(BigDecimal minNumRegStud) {
        this.minNumRegStud = minNumRegStud;
    }

    public CourseLevel getLevel() {
        return level;
    }

    public Course level(CourseLevel level) {
        this.level = level;
        return this;
    }

    public void setLevel(CourseLevel level) {
        this.level = level;
    }

    public Language getTaughtLanguage() {
        return taughtLanguage;
    }

    public Course taughtLanguage(Language taughtLanguage) {
        this.taughtLanguage = taughtLanguage;
        return this;
    }

    public void setTaughtLanguage(Language taughtLanguage) {
        this.taughtLanguage = taughtLanguage;
    }

    public Set<Student> getStudents() {
        return students;
    }

    public Course students(Set<Student> students) {
        this.students = students;
        return this;
    }

    public Course addStudent(Student student) {
        students.add(student);
        student.getCourses().add(this);
        return this;
    }

    public Course removeStudent(Student student) {
        students.remove(student);
        student.getCourses().remove(this);
        return this;
    }

    public void setStudents(Set<Student> students) {
        this.students = students;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Course course = (Course) o;
        if (course.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, course.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Course{" +
            "id=" + id +
            ", code='" + code + "'" +
            ", name='" + name + "'" +
            ", lecturer='" + lecturer + "'" +
            ", duration='" + duration + "'" +
            ", minNumRegStud='" + minNumRegStud + "'" +
            ", level='" + level + "'" +
            ", taughtLanguage='" + taughtLanguage + "'" +
            '}';
    }
}
