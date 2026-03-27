package com.example.grapher.models.graph;

import com.example.grapher.models.converters.TextConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // Generates Getters, Setters, toString, equals, and hashCode
@NoArgsConstructor // Generates a constructor with no arguments
@AllArgsConstructor // Generates a constructor with all fields
public class GridAxis {
    private Integer width;
    private String color;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = TextConverter.class)
    private Text title;
    
    private String col;
}
