package com.example.grapher.models.graph.series.ErrorBars.types;

import com.example.grapher.models.graph.series.ErrorBars.ErrorBars;
import com.example.grapher.models.graph.series.ErrorBars.ErrorBarsTypes;
import com.example.grapher.models.graph.trendline.TrendlineLineTypes;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class PercentageErrorBar extends ErrorBars {

    private Double percentage;

    public PercentageErrorBar(Double percentage, Integer width, TrendlineLineTypes lineType, String color) {
        super(ErrorBarsTypes.PERCENTAGE, width, lineType, color);
        this.percentage = percentage;
    }
}