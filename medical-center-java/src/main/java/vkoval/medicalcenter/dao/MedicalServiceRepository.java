package vkoval.medicalcenter.dao;

import org.springframework.data.repository.CrudRepository;
import vkoval.medicalcenter.entity.service.MedicalService;

public interface MedicalServiceRepository extends CrudRepository<MedicalService, Long> {
}
