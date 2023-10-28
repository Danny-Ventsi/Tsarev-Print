package com.example.server.Controller;

import com.example.server.Entity.UserInfo;
import com.example.server.Model.UserInfoModel;
import com.example.server.Service.UserInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserInfoController
{
    //Dependency
    private final UserInfoService userInfoService;

    @Autowired
    public UserInfoController(UserInfoService userInfoService)
    {
        this.userInfoService = userInfoService;
    }

    //Return userInfo
    @GetMapping("/userinfo")
    public List<UserInfo> getAllUserInfo()
    {
        return userInfoService.getAllUserInfo();
    }

    //Create userInfo
    @PostMapping("/userinfo")
    public ResponseEntity<UserInfo> createUserInfo(@RequestBody UserInfoModel userInfo) throws IOException
    {
        String phoneNumber = userInfo.getPhoneNumber();
        String address = userInfo.getAddress();
        String firstName = userInfo.getFirstName();
        String lastName = userInfo.getLastName();
        String emailAddress = userInfo.getEmailAddress();
        UserInfo newUserInfo = new UserInfo(phoneNumber, address, firstName, lastName, emailAddress);
        userInfoService.saveUserInfo(newUserInfo);
        return new ResponseEntity<>(newUserInfo, HttpStatus.CREATED);
    }

    public void addUserInfo(UserInfo info)
    {
        userInfoService.saveUserInfo(info);
    }
}
