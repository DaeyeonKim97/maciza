package com.dykim.AuthServer.service.impl;

import com.dykim.AuthServer.database.repository.UserRepository;
import com.dykim.AuthServer.service.DupCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DupCheckServiceImpl implements DupCheckService {
    private final UserRepository repository;

    @Autowired
    public DupCheckServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public boolean checkUserName(String userName) {
        if(repository.findByUserName(userName) == null)
            return true;
        return false;
    }

    @Override
    public boolean checkEmail(String email) {
        if(repository.findByEmail(email) == null)
            return true;
        return false;
    }

    @Override
    public boolean checkPhone(String phone) {
        if(repository.findByPhone(phone) == null)
            return true;
        return false;
    }
}
