package com.dykim.AuthServer.controller;

import com.dykim.AuthServer.database.repository.UserRepository;
import com.dykim.AuthServer.model.dto.SignUpInfo;
import com.dykim.AuthServer.model.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class SignUpController {

    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    @Autowired
    public SignUpController(UserRepository repository, PasswordEncoder passwordEncoder){
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/signup")
    public String signUp(@RequestBody SignUpInfo signUpInfo, HttpServletResponse response){

        try{
            repository.save(new User(signUpInfo.getUserName(),
                    passwordEncoder.encode(signUpInfo.getPassword()),
                    signUpInfo.getName(), signUpInfo.getEmail()));
        } catch (Exception e){
            System.out.println(e);
            response.setStatus(400);
            return "Not created";
        }
        response.setStatus(201);
        return "created";
    }
}
