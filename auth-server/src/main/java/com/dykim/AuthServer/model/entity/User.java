package com.dykim.AuthServer.model.entity;

import lombok.Builder;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;

@Entity
@Table(name="USER_TBL")
public class User implements Serializable {
    @Id
    @GeneratedValue
    @Column(name = "USER_ID")
    private int id; // 인덱스
    @Column(name = "USERNAME", unique = true, nullable = false)
    private String userName; //아이디
    @Column(name = "PASSWORD", nullable = false)
    private String password;
    @Column(name = "NAME", nullable = false)
    private String name; //실명
    @Column(name = "EMAIL", unique = true, nullable = false)
    private String email;
    @Column(name = "CERTIFICATION", nullable = false)
    private String certification;
    @Column(name = "PHONE", unique = true)
    private String phone;
    @Column(name = "PROFILE_IMG_SRC")
    private String profileImgSrc;
    @Column(name = "JOIN_DATE", updatable = false, nullable = false)
    private Date joinDate;
    @Column(name = "IS_DELETED", nullable = false)
    private String isDeleted;
    @Column(name = "DELETED_DATE")
    private Date deletedDate;

    public User() {
    }

    @Builder
    public User(int id, String userName, String password, String name, String email, String certification, String phone, String profileImgSrc, Date joinDate, String isDeleted, Date deletedDate) {
        this.id = id;
        this.userName = userName;
        this.password = password;
        this.name = name;
        this.email = email;
        this.certification = certification;
        this.phone = phone;
        this.profileImgSrc = profileImgSrc;
        this.joinDate = joinDate;
        this.isDeleted = isDeleted;
        this.deletedDate = deletedDate;
    }

    //SignUp constructor
    public User(String userName, String password, String name, String email) {
        this(-1,userName,password,name,email,"N",null,null,new Date(System.currentTimeMillis()),"N",null);
    }

    //Copy constructor
    public User(User user){
        this(user.getId(), user.getUserName(), user.getPassword(), user.getName(),
                user.getEmail(), user.getCertification(), user.getPhone(), user.getProfileImgSrc(),
                user.getJoinDate(), user.getIsDeleted(), user.getDeletedDate());
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCertification() {
        return certification;
    }

    public void setCertification(String certification) {
        this.certification = certification;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getProfileImgSrc() {
        return profileImgSrc;
    }

    public void setProfileImgSrc(String profileImgSrc) {
        this.profileImgSrc = profileImgSrc;
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }

    public String getIsDeleted() {
        return isDeleted;
    }

    public void setIsDeleted(String isDeleted) {
        this.isDeleted = isDeleted;
    }

    public Date getDeletedDate() {
        return deletedDate;
    }

    public void setDeletedDate(Date deletedDate) {
        this.deletedDate = deletedDate;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", userName='" + userName + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", certification='" + certification + '\'' +
                ", phone='" + phone + '\'' +
                ", profileImgSrc='" + profileImgSrc + '\'' +
                ", joinDate=" + joinDate +
                ", isDeleted='" + isDeleted + '\'' +
                ", deletedDate=" + deletedDate +
                '}';
    }
}
