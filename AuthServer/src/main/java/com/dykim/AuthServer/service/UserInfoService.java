package com.dykim.AuthServer.service;

import com.dykim.AuthServer.model.dto.OtherUser;

import java.util.List;

public interface UserInfoService {
    OtherUser getUserInfo(int id);
    List<OtherUser> getAllUsersInfo();
}
