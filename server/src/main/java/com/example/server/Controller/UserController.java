package com.example.tsarevprintbackend.Controller;

import com.example.tsarevprintbackend.Entity.Product;
import com.example.tsarevprintbackend.Entity.User;
import com.example.tsarevprintbackend.Entity.UserInfo;
import com.example.tsarevprintbackend.Model.LoginCredentials;
import com.example.tsarevprintbackend.Repository.UserInfoRepository;
import com.example.tsarevprintbackend.Repository.UserRepository;
import com.example.tsarevprintbackend.Security.JWTUtil;
import com.example.tsarevprintbackend.Service.UserInfoService;
import com.example.tsarevprintbackend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController
{
    private final UserService userService;
    private final UserInfoService userInfoService;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private JWTUtil jwtUtil;
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    public UserController(UserService userService, UserInfoService userInfoService)
    {
        this.userService = userService;
        this.userInfoService = userInfoService;
    }

    @PostMapping("/users")
    public ResponseEntity<Map<String,Object>> createUser(@RequestBody User user)
    {
        String password = passwordEncoder.encode(user.getPassword());
        user.setPassword(password);
        user.setRole("USER");
        List<User> exitingUsers = getUsers();
        boolean flag = false;
        for(User exitingUser : exitingUsers)
        {
            if(exitingUser.getUsername().equals(user.getUsername()))
            {
                return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
            }
        }
        for(UserInfo info : userInfoService.getAllUserInfo())
        {
            if(info.getEmailAddress().equals(user.getUserInfo().getEmailAddress()))
            {
                flag = true;
                break;
            }
        }
        if(!flag)
        {
            UserInfo info = new UserInfo();
            info.setEmailAddress(user.getUserInfo().getEmailAddress());
            userInfoService.saveUserInfo(info);
        }
        user = userService.createUser(user);
        String token = jwtUtil.generateToken(user.getUsername(), user.getRole());
        return new ResponseEntity<>(Collections.singletonMap("jwtToken", token), HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Map<String,Object>> loginUser(@RequestBody LoginCredentials credentials)
    {
        try
        {
            String role = "";
            UsernamePasswordAuthenticationToken authenticationToken =
                    new UsernamePasswordAuthenticationToken(credentials.getUsername(), credentials.getPassword());
            authenticationManager.authenticate(authenticationToken);
            for(int i = 0; i < getUsers().size(); ++i)
            {
                if(credentials.getUsername().equals(getUsers().get(i).getUsername()))
                {
                    role = getUsers().get(i).getRole();
                    break;
                }
            }
            String token = jwtUtil.generateToken(credentials.getUsername(), role);
            return new ResponseEntity<>(Collections.singletonMap("jwtToken", token), HttpStatus.OK);
        }
        catch (AuthenticationException e)
        {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/users")
    public List<User> getUsers()
    {
        return userService.getUsers();
    }

}