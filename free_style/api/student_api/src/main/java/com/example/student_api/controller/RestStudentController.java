package com.example.student_api.controller;

import com.example.student_api.model.Student;
import com.example.student_api.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("api/student")
public class RestStudentController {
    @Autowired
    private IStudentService iStudentService;
    @GetMapping("/list")
    public ResponseEntity<Page<Student>> getAll(@RequestParam(defaultValue = "0") int page,
                                                @RequestParam(defaultValue = "0") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Student> getAll = iStudentService.getList(pageable);
        if (getAll.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(getAll, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> add(@RequestBody Student student){
        Student checkStudent = iStudentService.add(student);
        if (checkStudent != null){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.FOUND);
    }

    @PostMapping("/update")
    public ResponseEntity<?> update(@RequestBody Student student){
        Student checkStudent = iStudentService.findById(student.getId());
        if (checkStudent != null){
            iStudentService.update(student);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.FOUND);
    }

    @GetMapping("/getById/{id}")
    public ResponseEntity<Student> getById(@PathVariable Long id){
        Student checkStudent = iStudentService.findById(id);
        if (checkStudent != null){
            return new ResponseEntity<>(checkStudent,HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.FOUND);
    }
}
