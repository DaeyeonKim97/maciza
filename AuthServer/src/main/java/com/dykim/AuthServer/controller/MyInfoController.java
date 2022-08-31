package com.dykim.AuthServer.controller;

import com.dykim.AuthServer.model.dto.OtherUser;
import com.dykim.AuthServer.model.dto.PasswordRequest;
import com.dykim.AuthServer.model.entity.User;
import com.dykim.AuthServer.service.MyInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/info")
public class MyInfoController {
    private final MyInfoService myInfoService;

    @Autowired
    public MyInfoController(MyInfoService myInfoService) {
        this.myInfoService = myInfoService;
    }

    @ResponseBody
    @GetMapping
    public Object getMyInfo(HttpServletResponse response){
        String username = null;
        try{
            username = SecurityContextHolder.getContext().getAuthentication().getName();
        } catch (Exception e){
            response.setStatus(401);
            return "invalid token";
        }

        User myInfo = myInfoService.getMyInfo(username);

        if(myInfo == null){
            response.setStatus(401);
            return "invalid token";
        }

        return myInfo;
    }


    @PutMapping
    public String updateMyInfo(@RequestBody User updateUserInfo, HttpServletResponse response){
        String username = null;
        try{
            username = SecurityContextHolder.getContext().getAuthentication().getName();
        } catch (Exception e){
            response.setStatus(401);
            return "invalid token";
        }
        boolean result = myInfoService.updateMyInfo(username, updateUserInfo);
        if(result){
            return "userinfo successfully updated";
        }
        else {
            response.setStatus(400);
            return "userinfo update failed";
        }
    }

    @PutMapping("password")
    public String updateMyPassword(@RequestBody PasswordRequest passwordRequest, HttpServletResponse response){
        String username = null;
        try{
            username = SecurityContextHolder.getContext().getAuthentication().getName();
        } catch (Exception e){
            response.setStatus(401);
            return "invalid token";
        }
        boolean result = myInfoService.updateMyPassword(username,
                passwordRequest.getOldPassword(), passwordRequest.getNewPassword());

        if(result){
            return "password successfully updated";
        }
        else {
            response.setStatus(400);
            return "password update failed";
        }
    }
}
