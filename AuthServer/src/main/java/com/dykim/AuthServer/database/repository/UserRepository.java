package com.dykim.AuthServer.database.repository;

import com.dykim.AuthServer.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
    User findById(int id);
    User findByUserName(String username);
    User findByEmail(String email);
    User findByPhone(String phone);
}
