package com.example.grapher.models.API;

import java.util.List;

import com.example.grapher.models.graph.Series;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GraphResponse {
    private Long id;
    private String title;
    private List<List<Object>> data;
    private String snapshot;
    private List<Series> series;
}