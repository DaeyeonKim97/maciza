package com.dykim.AuthServer;

import com.dykim.AuthServer.database.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class AuthServerApplication {
	@Autowired
	UserRepository repository;
	@PostConstruct
	public void initUsers() {
		System.out.println("Auth Application Started...");
	}

	public static void main(String[] args) {
		SpringApplication.run(AuthServerApplication.class, args);
	}

}
