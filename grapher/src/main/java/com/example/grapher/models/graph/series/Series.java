package com.example.grapher.models.graph.series;

import com.example.grapher.models.converters.ErrorBarsConverter;
import com.example.grapher.models.converters.GridAxisConverter;
import com.example.grapher.models.converters.TextConverter;
import com.example.grapher.models.graph.GridAxis;
import com.example.grapher.models.graph.Text;
import com.example.grapher.models.graph.series.ErrorBars.ErrorBars;

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
    private String id;

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

    @Column(columnDefinition = "TEXT")
    @Convert(converter = ErrorBarsConverter.class)
    private ErrorBars errorbars;
}
