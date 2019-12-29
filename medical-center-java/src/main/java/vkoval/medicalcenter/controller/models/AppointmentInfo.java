package vkoval.medicalcenter.controller.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vkoval.medicalcenter.entity.schedule.Appointment;

import java.time.Instant;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentInfo {
    private Long id;
    private Instant time;
    private boolean reserved;

    public static AppointmentInfo fromAppointment(Appointment appointment) {
        return new AppointmentInfo(appointment.getId(), appointment.getTime(), appointment.getReserver() != null);
    }
}
