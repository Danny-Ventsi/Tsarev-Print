package com.example.server.Model;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductModel
{
    private MultipartFile image;
    private String name;
    private float price;
    private String description;
}
