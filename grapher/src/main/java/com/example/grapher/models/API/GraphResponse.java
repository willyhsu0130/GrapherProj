package com.example.grapher.models.API;

import java.util.List;

import com.example.grapher.models.graph.GridAxis;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GraphResponse {
    private Long id;
    private String title;
    private GridAxis xAxis;
    private GridAxis yAxis;
    private List<List<Object>> data;
}