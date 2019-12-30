package vkoval.medicalcenter.controller.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vkoval.medicalcenter.entity.schedule.Appointment;

import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentInfo {
    private static final DateTimeFormatter formatter =
            DateTimeFormatter.ofPattern("HH:mm")
                    .withZone(ZoneId.systemDefault());

    private Long id;
    private String time;

    public static AppointmentInfo fromAppointment(Appointment appointment) {
        return new AppointmentInfo(appointment.getId(), formatter.format(appointment.getTime()));
    }
}
