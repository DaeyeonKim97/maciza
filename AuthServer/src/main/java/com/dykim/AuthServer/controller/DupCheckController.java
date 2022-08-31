package com.dykim.AuthServer.controller;

import com.dykim.AuthServer.service.DupCheckService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/check")
public class DupCheckController {
    private final DupCheckService dupCheckService;

    @Autowired
    public DupCheckController(DupCheckService dupCheckService) {
        this.dupCheckService = dupCheckService;
    }

    @PostMapping("username")
    public boolean checkUserName(@RequestBody Map<String,String> reqBody){
        return dupCheckService.checkUserName(reqBody.get("userName"));
    }

    @PostMapping("email")
    public boolean checkEmail(@RequestBody Map<String,String> reqBody){
        return dupCheckService.checkEmail(reqBody.get("email"));
    }

    @PostMapping("phone")
    public boolean checkPhone(@RequestBody Map<String,String> reqBody){
        return dupCheckService.checkPhone(reqBody.get("phone"));
    }

}
