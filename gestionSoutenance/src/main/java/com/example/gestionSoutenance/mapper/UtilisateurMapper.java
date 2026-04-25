package com.example.gestionSoutenance.mapper;

import com.example.gestionSoutenance.dto.UtilisateurDto;
import com.example.gestionSoutenance.entity.Utilisateur;


public class UtilisateurMapper {

    public static UtilisateurDto toDTO(Utilisateur user) {
        if (user == null) return null;

        UtilisateurDto dto = new UtilisateurDto();
        dto.setId(user.getId());
        dto.setNom(user.getNom());
        dto.setPrenom(user.getPrenom());
        dto.setGenre(user.getGenre());
        dto.setTel(user.getTel());
        dto.setDateN(user.getDateN());
        dto.setDepartement(user.getDepartement());
        dto.setEmail(user.getEmail());
        dto.setRole(user.getRole());

        return dto;
    }

    public static Utilisateur toEntity(UtilisateurDto dto) {
        if (dto == null) return null;

        Utilisateur user = new Utilisateur();
        user.setId(dto.getId());
        user.setNom(dto.getNom());
        user.setPrenom(dto.getPrenom());
        user.setGenre(dto.getGenre());
        user.setTel(dto.getTel());
        user.setDateN(dto.getDateN());
        user.setDepartement(dto.getDepartement());
        user.setEmail(dto.getEmail());
        user.setRole(dto.getRole());

        return user;
    }
}