package com.example.server.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
public class Product
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Column(length = 40)
    private String name;

    @NonNull
    private float price;

    @NonNull
    @Column(length = 1000)
    private String description;

    @NonNull
    private float rating;

    @NonNull
    @Lob
    private byte[] photo;

    public Product(String name, String description, float price, byte[] photo)
    {
        this.name = name;
        this.description = description;
        this.price = price;
        this.photo = photo;
    }

    @OneToMany
    @JsonBackReference
    private Set<ProductOrder> productOrders = new HashSet<>();

}