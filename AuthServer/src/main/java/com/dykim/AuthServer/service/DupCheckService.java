package com.dykim.AuthServer.service;

public interface DupCheckService {

    boolean checkUserName(String userName);

    boolean checkEmail(String email);

    boolean checkPhone(String phone);
}
