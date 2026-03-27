package com.example.grapher.models.graph.trendline.types;

import com.example.grapher.models.graph.trendline.Trendline;

import jakarta.persistence.Column;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class LinearTrendline extends Trendline {

    public LinearTrendline(String id, String seriesId, String color,
            com.example.grapher.models.graph.Text title) {
        super(id, seriesId, color, title);
    }

    @Column(columnDefinition = "TEXT")
    private Long gradient;

    @Column(columnDefinition = "TEXT")
    private Long yIntercept;

}