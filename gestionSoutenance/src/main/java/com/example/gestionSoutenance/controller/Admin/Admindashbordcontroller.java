
package com.example.gestionSoutenance.controller.Admin;

import com.example.gestionSoutenance.dto.DepartementDto;
import com.example.gestionSoutenance.dto.EncadrantDto;
import com.example.gestionSoutenance.dto.UtilisateurDto;
import com.example.gestionSoutenance.service.Admin.Admindashbord;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor

public class Admindashbordcontroller {
    private final Admindashbord admindashbord;


    // ================= DASHBOARD =================
    @GetMapping("/dashboard")
    public Map<String, Long> dashboard() {
        return admindashbord.getDashboardStats();
    }

    // ================= UTILISATEURS =================
    @GetMapping("/users")
    public List<UtilisateurDto> getUsers() {
        return admindashbord.getAllUsers();
    }

    // ================= ÉTUDIANTS =================
    @GetMapping("/etudiants")
    public List<UtilisateurDto> getEtudiants() {
        return admindashbord.getAllEtudiants();
    }

    // ================= ENCADRANTS =================
    @GetMapping("/encadrants")
    public List<EncadrantDto> getEncadrants() {
        return admindashbord.getAllEncadrants();
    }

    // ================= CHEFS =================
    @GetMapping("/chefs")
    public List<UtilisateurDto> getChefs() {
        return admindashbord.getAllChefs();
    }

    // ================= DÉPARTEMENTS =================
    @GetMapping("/departements")
    public List<DepartementDto> getDepartements() {
        return admindashbord.getAllDepartements();
    }
}

