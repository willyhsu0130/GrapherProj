package com.example.grapher.models.graph;

import java.util.List;

import com.example.grapher.models.User;
import com.example.grapher.models.converters.GraphDataConverter;
import com.example.grapher.models.converters.GridAxisConverter;
import com.example.grapher.models.converters.SeriesListConverter;

import jakarta.persistence.Column;
import jakarta.persistence.Convert;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "graphs")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Graph {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = SeriesListConverter.class)
    private List<Series> series;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = GridAxisConverter.class)
    private GridAxis xAxis;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = GridAxisConverter.class)
    private GridAxis yAxis;

    @Column(columnDefinition = "TEXT")
    @Convert(converter = GraphDataConverter.class)
    private List<List<Object>> data;

    @Column(columnDefinition = "TEXT")
    private String snapshot;
}
