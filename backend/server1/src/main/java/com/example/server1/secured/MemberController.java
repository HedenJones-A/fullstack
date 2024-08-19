package com.example.server1.secured;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

import com.example.server1.user.Booking;
import com.example.server1.user.User;
import com.example.server1.user.repository.BookingRepo;
import com.example.server1.user.repository.UserRepo;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/management")
@CrossOrigin(origins = "http://localhost:3000/")
public class MemberController {

    @Autowired
    private UserRepo repo;

    @Autowired
    private BookingRepo bookrepo;

    @GetMapping
    public String getMember() {
        return "Secured Endpoint :: GET - Member controller";
    }

    @PostMapping
    public String post() {
        return "POST:: management controller";
    }

    @GetMapping("/profile/{email}")
    public ResponseEntity<User> getdet(@PathVariable String email) {
        Optional<User> user = repo.findByEmail(email);
        return user.map(ResponseEntity::ok)
                   .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/profile/edit")
    public ResponseEntity<String> editdet(@RequestBody User det) {
        Optional<User> details = repo.findById(det.getId());
        if (details.isPresent()) {
            User existingUser = details.get();
            System.out.println(existingUser);
            existingUser.setFirstName(det.getFirstName());
            existingUser.setLastName(det.getLastName());
            existingUser.setEmail(det.getUsername());
            existingUser.setPassword(det.getPassword());
            // Save the updated user
            repo.save(existingUser);
            return ResponseEntity.ok("User updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/booking/{username}")
public List<Booking> getBookingByUsername(@PathVariable String username) {
    List<Booking> booking = bookrepo.findByusername(username);
    return booking;
                  
}

    
}
