package com.example.grapher.models.graph.trendline.types;

import com.example.grapher.models.graph.Text;
import com.example.grapher.models.graph.trendline.Trendline;
import com.example.grapher.models.graph.trendline.TrendlineLineTypes;

import jakarta.persistence.Column;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class LinearTrendline extends Trendline {

    public LinearTrendline(
            String id,
            String seriesId,
            String color,
            Text title,
            Integer width,
            TrendlineLineTypes lineType,
            Double gradient,
            Double yIntercept) {
        super(id, seriesId, color, title, width, lineType);
        this.gradient = gradient;
        this.yIntercept = yIntercept;
    }

    @Column(columnDefinition = "TEXT")
    private Double gradient;

    @Column(columnDefinition = "TEXT")
    private Double yIntercept;

}