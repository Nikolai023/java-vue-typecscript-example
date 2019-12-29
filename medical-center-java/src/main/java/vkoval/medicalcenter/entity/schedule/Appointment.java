package vkoval.medicalcenter.entity.schedule;

import lombok.Data;
import vkoval.medicalcenter.entity.service.MedicalService;
import vkoval.medicalcenter.entity.user.User;

import javax.persistence.*;
import java.time.Instant;

@Data
@Entity
public class Appointment {
    @Id
    @GeneratedValue
    private Long id;
    @Column
    private Instant time;
    @ManyToOne
    private User reserver;
    @ManyToOne
    private MedicalService medicalService;
}
