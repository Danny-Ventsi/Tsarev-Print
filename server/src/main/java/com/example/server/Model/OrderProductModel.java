package com.example.server.Model;

import com.example.server.Entity.Product;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class OrderProductModel
{
    private Product product;
    private int quantity;
}
