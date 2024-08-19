package com.example.server1.user.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.server1.user.Booking;

public interface BookingRepo extends JpaRepository<Booking, Integer> {
    
    @Query("SELECT b FROM Booking b WHERE b.username = ?1")
    List<Booking> findByusername(String username);
}
