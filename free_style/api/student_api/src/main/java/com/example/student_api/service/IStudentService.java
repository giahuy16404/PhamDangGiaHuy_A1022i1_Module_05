package com.example.student_api.service;

import com.example.student_api.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IStudentService {
    Page<Student> getList(Pageable pageable);
    Student add(Student student);
    Student update(Student student);
    Student findById (Long id);
}
