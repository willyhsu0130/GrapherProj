package com.example.grapher.models.API;

import java.util.List;

import com.example.grapher.models.graph.GridAxis;
import com.example.grapher.models.graph.series.Series;
import com.example.grapher.models.graph.trendline.Trendline;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PatchGraphRequest {
    private String title;
    private List<Series> series;
    private List<List<Object>> data;
    private String snapshot;
    private GridAxis xAxis;
    private GridAxis yAxis;
    private List<Trendline> trendlines;
}
