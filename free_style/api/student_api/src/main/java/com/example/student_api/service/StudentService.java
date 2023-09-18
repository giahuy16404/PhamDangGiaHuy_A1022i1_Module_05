package com.example.student_api.service;

import com.example.student_api.model.Student;
import com.example.student_api.repository.IStudentRepository;
import com.example.student_api.util.FormatDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class StudentService implements IStudentService {
    @Autowired
    private IStudentRepository iStudentRepository;

    @Override
    public Page<Student> getList(Pageable pageable) {
        Page<Student> page = iStudentRepository.findPage(pageable);
        for (Student student:page) {
            student.setBirthday(FormatDate.formatDate(student.getBirthday()));
        }
        return page;
    }

    @Override
    public Student add(Student student) {
        return iStudentRepository.save(student);
    }

    @Override
    public Student update(Student student) {
        return iStudentRepository.save(student);
    }

    @Override
    public Student findById(Long id) {
        return iStudentRepository.findById(id).get();
    }


}
