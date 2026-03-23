package com.example.grapher.models.graph;

import com.example.grapher.models.converters.GridAxisConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Series {
    @Column(columnDefinition = "TEXT")
    @Convert(converter = GridAxisConverter.class)
    private GridAxis xAxis;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = GridAxisConverter.class)
    private GridAxis yAxis;

    @Column(columnDefinition = "TEXT")
    private String title;
}
