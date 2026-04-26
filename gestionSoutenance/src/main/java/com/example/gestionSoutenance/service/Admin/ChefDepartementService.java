package com.example.gestionSoutenance.service.Admin;



import com.example.gestionSoutenance.dto.ChefDdto;
import com.example.gestionSoutenance.entity.ChefD;
import com.example.gestionSoutenance.enums.Role;
import com.example.gestionSoutenance.mapper.ChefDepartementMapper;
import com.example.gestionSoutenance.repository.ChefDepartementRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor
public class ChefDepartementService {
    private final PasswordEncoder passwordEncoder;

    private final ChefDepartementRepository chefRepo;

    public List<ChefDdto> getAllChefs() {
        return chefRepo.findAll()
                .stream()
                .map(ChefDepartementMapper::toDto)
                .collect(Collectors.toList());
    }

    public ChefDdto createChef(ChefDdto dto) {

        if (chefRepo.existsByDepartement(dto.getDepartement())) {
            throw new RuntimeException("Ce département a déjà un chef");
        }

        ChefD chef = ChefDepartementMapper.toEntity(dto);

        chef.setRole(Role.AGENT);
        chef.setPassword(passwordEncoder.encode(dto.getPassword()));

        return ChefDepartementMapper.toDto(chefRepo.save(chef));
    }

    public ChefDdto updateChef(Long id, ChefDdto dto) {

        ChefD chef = chefRepo.findById(Math.toIntExact(id))
                .orElseThrow(() -> new RuntimeException("Chef non trouvé"));

        chef.setNom(dto.getNom());
        chef.setPrenom(dto.getPrenom());
        chef.setEmail(dto.getEmail());
        chef.setDepartement(dto.getDepartement());

        return ChefDepartementMapper.toDto(chefRepo.save(chef));
    }

    public void deleteChef(Long id) {
        chefRepo.deleteById(Math.toIntExact(id));
    }

    public Optional<ChefD> getChef(Long id) {
       return chefRepo.findById(Math.toIntExact(id));
    }
    
}