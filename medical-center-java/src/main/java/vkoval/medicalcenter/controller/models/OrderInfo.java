package vkoval.medicalcenter.controller.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import vkoval.medicalcenter.entity.schedule.Appointment;

import java.time.LocalDateTime;
import java.time.ZoneId;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderInfo {
    private LocalDateTime record;
    private String title;

    public static OrderInfo fromAppointment(Appointment appointment) {
        LocalDateTime time = LocalDateTime.ofInstant(appointment.getTime(), ZoneId.systemDefault());
        String title = appointment.getMedicalService().getTitle();
        return new OrderInfo(time, title);
    }
}
