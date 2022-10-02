package com.dykim.AuthServer.model.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="PASSWORD_CHANGE_LOG_TBL")
public class PasswordChangeLog {
    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    @JoinColumn(name="USER_ID")
    private User user;

    @NotNull
    @Column(name = "CHANGED_DATE")
    private Date changedDate;

    public PasswordChangeLog() {}
    public PasswordChangeLog(int id, User user, Date changedDate) {
        this.id = id;
        this.user = user;
        this.changedDate = changedDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Date getChangedDate() {
        return changedDate;
    }

    public void setChangedDate(Date changedDate) {
        this.changedDate = changedDate;
    }

    @Override
    public String toString() {
        return "PasswordChangeLog{" +
                "id=" + id +
                ", user=" + user +
                ", changedDate=" + changedDate +
                '}';
    }
}
