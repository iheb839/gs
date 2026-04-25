package com.example.gestionSoutenance.dto;

import com.example.gestionSoutenance.enums.Genre;
import com.example.gestionSoutenance.enums.Role;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class CreateUserDto {
    private String firstname;
    private String lastname;
    private String email;
    private Genre genre;
    private String tel;
    private Date dateN;
    private String password;
    private String departement;
    @Enumerated(EnumType.STRING)
    private Role role;
}
