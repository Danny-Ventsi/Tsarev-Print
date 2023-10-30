package com.example.server.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.sql.Date;

@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "orders")
public class Order
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 400)
    private String description;

   @ManyToMany
   @JoinTable(
           name = "user_order",
           joinColumns = @JoinColumn(
                   name = "order_id",
                   referencedColumnName = "id"
           ),
           inverseJoinColumns = @JoinColumn(
                   name = "user_id",
                   referencedColumnName = "id"
           )
   )
   private List<User> user;

    @ManyToOne
    @JoinColumn(name = "email_address",referencedColumnName = "emailAddress")
    private UserInfo userInfo;

    @OneToMany
    @JsonBackReference
    private Set<ProductOrder> productOrders = new HashSet<>();

    @NonNull
    private String status;
    
    @NonNull
    private Date created;

    @NonNull
    private Date lastChanged;

}
