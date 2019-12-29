package vkoval.medicalcenter.controller;

import lombok.Data;
import lombok.extern.java.Log;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import vkoval.medicalcenter.dao.UserRepository;
import vkoval.medicalcenter.entity.user.Role;
import vkoval.medicalcenter.entity.user.User;

@RestController
@Log
public class AuthController {
    private UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/auth")
    public Authentication authenticate(Authentication authentication) {
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            log.info("User authenticated");
            return authentication;
        }
        return null;
    }

    @PostMapping("/register")
    public String register(@RequestBody RegisterForm registerForm) {
        if (StringUtils.isEmpty(registerForm.getLogin()) || StringUtils.isEmpty(registerForm.getPassword())) {
            return "Логин и пароль не могут быть пустыми";
        }
        if (userRepository.existsByLogin(registerForm.getLogin())) {
            return "Данный логин уже занят";
        }

        User user = new User();
        user.setLogin(registerForm.getLogin());
        user.setPassword(registerForm.getPassword());
        user.setRole(Role.USER);
        userRepository.save(user);

        return null;
    }

    @Data
    private static class RegisterForm {
        private String login;
        private String password;
    }
}
