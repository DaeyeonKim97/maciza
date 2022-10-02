package com.dykim.AuthServer.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OtherUser {
    private int id;
    private String userName;
    private String name;
    private String email;
    private String profileImgSrc;
    private String isDeleted;
}
