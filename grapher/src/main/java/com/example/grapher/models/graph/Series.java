package com.example.grapher.models.graph;

import com.example.grapher.models.converters.GridAxisConverter;
import com.example.grapher.models.converters.TextConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Series {
    @Id //
    @GeneratedValue(strategy = GenerationType.IDENTITY) // Auto-increments the ID
    private Long id;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = GridAxisConverter.class)
    private GridAxis xAxis;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = GridAxisConverter.class)
    private GridAxis yAxis;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = TextConverter.class)
    private Text title;

    @Column(columnDefinition = "TEXT")
    private String color;
}
