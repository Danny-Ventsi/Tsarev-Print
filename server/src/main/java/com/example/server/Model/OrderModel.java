package com.example.server.Model;

import com.example.server.Entity.UserInfo;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderModel
{
    UserInfo userInfo;
    private String description;
    List<OrderProductModel> productModel;
}
