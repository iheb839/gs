package com.example.gestionSoutenance.controller.Admin;
import com.example.gestionSoutenance.dto.ChefDdto;
import com.example.gestionSoutenance.dto.UtilisateurDto;
import com.example.gestionSoutenance.service.Admin.ChefDepartementService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/chefs")
@RequiredArgsConstructor
public class AdminChefDepartementController {

    private final ChefDepartementService chefService;

    // ✅ Liste chefs
    @GetMapping
    public List<ChefDdto> getAllChefs() {
        return chefService.getAllChefs();
    }

    // ✅ Ajouter chef
    @PostMapping
    public ChefDdto createChef(@RequestBody ChefDdto dto) {
        return chefService.createChef(dto);
    }

    // ✅ Modifier chef
    @PutMapping("/{id}")
    public ChefDdto updateChef(@PathVariable Long id,
                                     @RequestBody ChefDdto dto) {
        return chefService.updateChef(id, dto);
    }

    // ✅ Supprimer chef
    @DeleteMapping("/{id}")
    public void deleteChef(@PathVariable Long id) {
        chefService.deleteChef(id);
    }
}