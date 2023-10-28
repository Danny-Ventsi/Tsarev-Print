package com.example.server.Model;

import com.example.tsarevprintbackend.Entity.Order;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class UserInfoModel
{
    private String phoneNumber;
    private String address;
    private String firstName;
    private String lastName;
    private String emailAddress;
    private Set<Order> orders = new HashSet<>();
}
