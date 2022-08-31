package com.dykim.AuthServer.controller;

import com.dykim.AuthServer.model.dto.AuthRequest;
import com.dykim.AuthServer.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

@RestController
public class LoginController {
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    @Autowired
    LoginController(JwtUtil jwtUtil, AuthenticationManager authenticationManager){
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
    }


    @PostMapping("/login")
    public String generateToken(@RequestBody AuthRequest authRequest, HttpServletResponse response) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authRequest.getUserName(),
                            authRequest.getPassword())
            );
        } catch (Exception e){
            response.setStatus(400);
            return "invalid username/password";
        }

        return jwtUtil.generateToken(authRequest.getUserName());
    }

}
