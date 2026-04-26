
package com.example.gestionSoutenance.controller.Admin;

import com.example.gestionSoutenance.dto.ChefDdto;
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


    @GetMapping("/dashboard")
    public Map<String, Long> dashboard() {
        return admindashbord.getDashboardStats();
    }

    @GetMapping("/users")
    public List<UtilisateurDto> getUsers() {
        return admindashbord.getAllUsers();
    }

    @GetMapping("/etudiants")
    public List<UtilisateurDto> getEtudiants() {
        return admindashbord.getAllEtudiants();
    }
    @GetMapping("/encadrants")
    public List<EncadrantDto> getEncadrants() {
        return admindashbord.getAllEncadrants();
    }

    @GetMapping("/chefs")
    public List<ChefDdto> getChefs() {
        return admindashbord.getAllChefs();
    }

    @GetMapping("/departements")
    public List<DepartementDto> getDepartements() {
        return admindashbord.getAllDepartements();
    }
}

