package com.example.server1.user;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id; // Make fields private

    private String booking_id;
    private String username;
    private String duration_rent;
    private String duration_return;

    // Default constructor (required by JPA)
    public Booking() {
    }

    // Getters and setters for all fields
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getBooking_id() {
        return booking_id;
    }

    public void setBooking_id(String booking_id) {
        this.booking_id = booking_id;
    }

    

    public String getDuration_rent() {
        return duration_rent;
    }

    public void setDuration_rent(String duration_rent) {
        this.duration_rent = duration_rent;
    }

    public String getDuration_return() {
        return duration_return;
    }

    public void setDuration_return(String duration_return) {
        this.duration_return = duration_return;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
