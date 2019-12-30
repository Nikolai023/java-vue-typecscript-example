package vkoval.medicalcenter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import vkoval.medicalcenter.dao.AppointmentRepository;
import vkoval.medicalcenter.dao.MedicalServiceRepository;
import vkoval.medicalcenter.dao.UserRepository;
import vkoval.medicalcenter.entity.schedule.Appointment;
import vkoval.medicalcenter.entity.service.MedicalService;
import vkoval.medicalcenter.entity.user.Role;
import vkoval.medicalcenter.entity.user.User;

import javax.annotation.PostConstruct;
import java.time.Instant;

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
    private UserRepository userRepository;
    private AppointmentRepository appointmentRepository;

    public MedicalCenterApplication(MedicalServiceRepository medicalServiceRepository, UserRepository userRepository, AppointmentRepository appointmentRepository) {
        this.medicalServiceRepository = medicalServiceRepository;
        this.userRepository = userRepository;
        this.appointmentRepository = appointmentRepository;
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

        User admin = new User();
        admin.setLogin("admin");
        admin.setPassword("admin");
        admin.setRole(Role.ADMIN);
        userRepository.save(admin);

        User user = new User();
        user.setLogin("user");
        user.setPassword("user");
        user.setRole(Role.USER);
        userRepository.save(user);

        Appointment appointmentFree = new Appointment();
        appointmentFree.setMedicalService(service1);
        appointmentFree.setTime(Instant.now());
        appointmentRepository.save(appointmentFree);

        Appointment appointmentReserved = new Appointment();
        appointmentReserved.setMedicalService(service1);
        appointmentReserved.setTime(Instant.now());
        appointmentReserved.setReserver(admin);
        appointmentRepository.save(appointmentReserved);
    }
}
