package com.dykim.AuthServer.controller;

import com.dykim.AuthServer.model.dto.OtherUser;
import com.dykim.AuthServer.service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
@RequestMapping("/users")
public class UserInfoController {

    private final UserInfoService userInfoService;

    @Autowired
    public UserInfoController(UserInfoService userInfoService) {
        this.userInfoService = userInfoService;
    }

    @ResponseBody
    @GetMapping("{id}")
    public Object getUserInfo(@PathVariable("id") int userId, HttpServletResponse response){
        OtherUser otherUserInfo = userInfoService.getUserInfo(userId);
        if(otherUserInfo == null){
            response.setStatus(400);
            return "user is not available";
        }

        return otherUserInfo;
    }

    @ResponseBody
    @GetMapping
    public Object getUsersInfo(HttpServletResponse response){
        List<OtherUser> otherUserList = userInfoService.getAllUsersInfo();

        if(otherUserList.isEmpty()){
            response.setStatus(204);
            return "no user";
        }

        return otherUserList;
    }
}
