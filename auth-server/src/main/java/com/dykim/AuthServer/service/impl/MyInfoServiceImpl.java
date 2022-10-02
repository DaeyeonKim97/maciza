package com.dykim.AuthServer.service.impl;

import com.dykim.AuthServer.database.repository.PasswordChangeLogRepository;
import com.dykim.AuthServer.database.repository.UserRepository;
import com.dykim.AuthServer.model.entity.PasswordChangeLog;
import com.dykim.AuthServer.model.entity.User;
import com.dykim.AuthServer.service.MyInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Date;

@Service
public class MyInfoServiceImpl implements MyInfoService {

    private final UserRepository repository;
    private final PasswordChangeLogRepository logRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public MyInfoServiceImpl(UserRepository repository, PasswordChangeLogRepository logRepository, PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.logRepository = logRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User getMyInfo(String username) {
        User user = repository.findByUserName(username);
        user.setPassword(null);
        return user;
    }

    /**
     * 유저 업데이트.
     * userName, password, joinDate, deletedDate 는 수정 불가.
     */
    @Override
    public boolean updateMyInfo(String username, User updateUserInfo) {
        User user = repository.findByUserName(username);

        if(updateUserInfo.getName() != null && !"".equals(updateUserInfo.getName())){
            user.setName(updateUserInfo.getName());
        }
        if(updateUserInfo.getEmail() != null && !"".equals(updateUserInfo.getEmail())){
            user.setEmail(updateUserInfo.getEmail());
        }
        if(updateUserInfo.getCertification() != null && !"".equals(updateUserInfo.getCertification())){
            user.setCertification(updateUserInfo.getCertification());
            if("N".equals(user.getCertification())){
                user.setPhone(null);
            }
        }
        if(updateUserInfo.getPhone() != null && !"".equals(updateUserInfo.getPhone())){
            user.setPhone(updateUserInfo.getPhone());
            user.setCertification("Y");
        }
        if(updateUserInfo.getProfileImgSrc() != null && !"".equals(updateUserInfo.getProfileImgSrc())){
            user.setProfileImgSrc(updateUserInfo.getProfileImgSrc());
        }
        if(updateUserInfo.getIsDeleted() != null && !"".equals(updateUserInfo.getIsDeleted())){
            user.setIsDeleted(updateUserInfo.getIsDeleted());
            if("Y".equals(user.getIsDeleted())){
                user.setDeletedDate(new Date(System.currentTimeMillis()));
            }
            if("N".equals(user.getIsDeleted())){
                user.setDeletedDate(null);
            }
        }

        try {
            repository.save(user);
        } catch (Exception e){
            return false;
        }

        return true;
    }

    @Override
    public boolean updateMyPassword(String username, String oldPassword, String newPassword) {
        User user = repository.findByUserName(username);

        if(passwordEncoder.matches(oldPassword,user.getPassword())){
            user.setPassword(passwordEncoder.encode(newPassword));
        }
        else {
            return false;
        }
        logRepository.save(new PasswordChangeLog(-1,user,new Date(System.currentTimeMillis())));
        repository.save(user);
        return true;
    }
}
