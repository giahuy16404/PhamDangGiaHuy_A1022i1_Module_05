package com.example.student_api.repository;

import com.example.student_api.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IStudentRepository extends JpaRepository<Student, Long> {
    @Query(value = QueryDb.SELECT_STUDENT, nativeQuery = true)
    Page<Student> findPage(Pageable pageable);
}
