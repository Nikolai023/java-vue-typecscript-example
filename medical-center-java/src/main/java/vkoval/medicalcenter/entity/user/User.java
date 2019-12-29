package vkoval.medicalcenter.entity.user;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @Column(unique = true)
    private String login;
    @Column
    private String password;
    @Convert(converter = RoleIntegerConverter.class)
    private Role role;
}
