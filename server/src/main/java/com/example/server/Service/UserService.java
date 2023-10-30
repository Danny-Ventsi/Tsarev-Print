package com.example.tsarevprintbackend.Service;

import com.example.tsarevprintbackend.Entity.User;
import com.example.tsarevprintbackend.Repository.OrderRepository;
import com.example.tsarevprintbackend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService
{

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository)
    {
        this.userRepository = userRepository;
    }

    public User createUser(User user)
    {
        return userRepository.save(user);
    }

    public List<User> getUsers()
    {
        return userRepository.findAll();
    }

}
