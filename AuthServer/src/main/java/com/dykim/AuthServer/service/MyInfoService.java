package com.dykim.AuthServer.service;

import com.dykim.AuthServer.model.dto.OtherUser;
import com.dykim.AuthServer.model.entity.User;

public interface MyInfoService {
    User getMyInfo(String username);
    boolean updateMyInfo(String username, User updateUserInfo);
    boolean updateMyPassword(String username, String oldPassword, String newPassword);

}
