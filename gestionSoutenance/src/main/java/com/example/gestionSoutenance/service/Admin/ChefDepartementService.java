package com.example.gestionSoutenance.service.Admin;



import com.example.gestionSoutenance.dto.ChefDdto;
import com.example.gestionSoutenance.entity.ChefD;
import com.example.gestionSoutenance.enums.Role;
import com.example.gestionSoutenance.mapper.ChefDepartementMapper;
import com.example.gestionSoutenance.repository.ChefDepartementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class ChefDepartementService {

    private final ChefDepartementRepository chefRepo;

    // ✅ Liste des chefs
    public List<ChefDdto> getAllChefs() {
        return chefRepo.findAll()
                .stream()
                .map(ChefDepartementMapper::toDto)
                .collect(Collectors.toList());
    }

    // ✅ Ajouter chef
    public ChefDdto createChef(ChefDdto dto) {

        // Règle métier: Chef واحد فقط لكل département
        if (chefRepo.existsByDepartement(dto.getDepartement())) {
            throw new RuntimeException("Ce département a déjà un chef");
        }
        dto.setRole(Role.AGENT);
        ChefD chef =  ChefDepartementMapper.toEntity(dto);
        return ChefDepartementMapper.toDto(chefRepo.save(chef));
    }

    // ✅ Modifier chef
    public ChefDdto updateChef(Long id, ChefDdto dto) {

        ChefD chef = chefRepo.findById(Math.toIntExact(id))
                .orElseThrow(() -> new RuntimeException("Chef non trouvé"));

        chef.setNom(dto.getNom());
        chef.setPrenom(dto.getPrenom());
        chef.setEmail(dto.getEmail());
        chef.setDepartement(dto.getDepartement());

        return ChefDepartementMapper.toDto(chefRepo.save(chef));
    }

    // ✅ Supprimer chef
    public void deleteChef(Long id) {
        chefRepo.deleteById(Math.toIntExact(id));
    }
}