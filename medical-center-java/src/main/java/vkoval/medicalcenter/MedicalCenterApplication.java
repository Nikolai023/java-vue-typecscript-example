package vkoval.medicalcenter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import vkoval.medicalcenter.dao.MedicalServiceRepository;
import vkoval.medicalcenter.entity.service.MedicalService;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class MedicalCenterApplication {
    private static final String DESCRIPTION = "Lorem fdsaasdfipsum dolor sit amet consectetur adipisicing elit. Dicta\n" +
            "        repellendus fuga sed rerum sint non amet ease in dolorem dolores iste\n" +
            "        harum aut ipsa error, natus\n" +
            "        consequatur sit libero. Laudantium?Lorem ipsum dolor sit amet consectetur\n" +
            "        adipisicing elit. Dicta\n" +
            "        repellendus fuga sed rerum sint non amet esse in dolorem dolores iste\n" +
            "        harum aut ipsa error, natus\n" +
            "        consequatur sit libero. Laudantium?\n" +
            "            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta\n" +
            "        repellendus fuga sed rerum sinasdft non amet esse in dolorem dolores iste\n" +
            "        harum aut ipsa error, natus\n" +
            "        consequatur sit libero. Laudantium?fdsaasdfadasaasLorem ipsum dolor sit amet consectetur\n" +
            "        adipisicing elit. Dicta\n" +
            "        repellendus fuga sed rerum sint non amet esse in dolorem dolores iste\n" +
            "        harum aut ipsa error, natus\n" +
            "        consequatur sit libero. Laudantium?";

    private MedicalServiceRepository medicalServiceRepository;

    public MedicalCenterApplication(MedicalServiceRepository medicalServiceRepository) {
        this.medicalServiceRepository = medicalServiceRepository;
    }

    public static void main(String[] args) {
        SpringApplication.run(MedicalCenterApplication.class, args);
    }

    @PostConstruct
    private void postConstruct() {
        MedicalService service1 = new MedicalService();
        service1.setTitle("Зубной врач");
        service1.setDescription(DESCRIPTION);
        service1.setImage("https://via.placeholder.com/900x750");

        MedicalService service2 = new MedicalService();
        service2.setTitle("Диагностика");
        service2.setDescription(DESCRIPTION);
        service2.setImage("https://via.placeholder.com/900x750");

        MedicalService service3 = new MedicalService();
        service3.setTitle("Диагностика");
        service3.setDescription(DESCRIPTION);
        service3.setImage("https://via.placeholder.com/900x750");

        medicalServiceRepository.save(service1);
        medicalServiceRepository.save(service2);
        medicalServiceRepository.save(service3);
    }
}
