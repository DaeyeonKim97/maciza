package com.dykim.AuthServer.service.impl;

import com.dykim.AuthServer.database.repository.UserRepository;
import com.dykim.AuthServer.model.dto.OtherUser;
import com.dykim.AuthServer.model.entity.User;
import com.dykim.AuthServer.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserInfoServiceImpl implements UserInfoService{

    private final UserRepository repository;

    @Autowired
    public UserInfoServiceImpl(UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public OtherUser getUserInfo(int userId) {
        User user = repository.findById(userId);
        OtherUser otherUserInfo = new OtherUser(
                user.getId(),
                user.getUserName(),
                user.getName(),
                user.getEmail(),
                user.getProfileImgSrc(),
                user.getIsDeleted()
        );
        return otherUserInfo;
    }

    @Override
    public List<OtherUser> getAllUsersInfo() {
        List<User> userList = repository.findAll();
        List<OtherUser> otherUserList = new ArrayList<>();

        for(User user : userList){
            otherUserList.add(new OtherUser(
                    user.getId(),
                    user.getUserName(),
                    user.getName(),
                    user.getEmail(),
                    user.getProfileImgSrc(),
                    user.getIsDeleted()
            ));
        }
        return otherUserList;
    }
}
