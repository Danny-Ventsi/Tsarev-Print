package com.example.server.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
@Entity
public class UserInfo
{
    @NonNull
    @Column(length = 16, unique = true)
    private String phoneNumber;

    @NonNull
    @Column(length = 30)
    private String firstName;

    @NonNull
    @Column(length = 30)
    private String lastName;

    @NonNull
    private String address;

    @NonNull
    private int postalCode;

    @NonNull
    private String country;

    @NonNull
    private String city;

    @Id
    @NonNull
    @Column(unique = true, length = 32)
    private String emailAddress;

    @OneToMany
    @JsonBackReference
    private Set<Order> orders = new HashSet<>();

    public UserInfo(String phoneNumber, String address, String firstName, String lastName, String emailAddress)
    {
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.firstName = firstName;
        this.lastName = lastName;
        this.emailAddress = emailAddress;
    }
}
