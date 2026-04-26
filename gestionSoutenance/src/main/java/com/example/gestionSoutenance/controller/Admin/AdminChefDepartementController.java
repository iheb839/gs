package com.example.gestionSoutenance.controller.Admin;
import com.example.gestionSoutenance.dto.ChefDdto;
import com.example.gestionSoutenance.entity.ChefD;
import com.example.gestionSoutenance.service.Admin.ChefDepartementService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin/chefs")
@RequiredArgsConstructor
@PreAuthorize("hasRole('ADMIN')")
public class AdminChefDepartementController {

    private final ChefDepartementService chefService;
    // ✅ Liste chefs
    @GetMapping
    public List<ChefDdto> getAllChefs() {
        return chefService.getAllChefs();
    }
    @GetMapping("/find/{id}")
    public Optional<ChefD> getChefById(@PathVariable Long id) {
        return chefService.getChef(id);
    }

    // ✅ Ajouter chef
    @PostMapping("/add")
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