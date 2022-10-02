package com.dykim.AuthServer.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpInfo {
    private String userName;
    private String password;
    private String name;
    private String email;
}
