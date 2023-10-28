package com.example.server.Service;

import com.example.server.Entity.UserInfo;
import com.example.server.Repository.UserInfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserInfoService
{
    private final UserInfoRepository userInfoRepository;

    @Autowired
    public UserInfoService(UserInfoRepository userInfoRepository)
    {
        this.userInfoRepository = userInfoRepository;
    }
    //Get all UserInfo
    public List<UserInfo> getAllUserInfo()
    {
        return userInfoRepository.findAll();
    }
    public UserInfo saveUserInfo(UserInfo userInfo)
    {
        return userInfoRepository.save(userInfo);
    }
    //Update UserInfo
    public UserInfo updateUserInfo(UserInfo userInfo, Long emailAddress)
    {
        if (userInfoRepository.findById(emailAddress).isEmpty())
        {
            return null;
        }
        return userInfoRepository.save(userInfo);
    }
}
