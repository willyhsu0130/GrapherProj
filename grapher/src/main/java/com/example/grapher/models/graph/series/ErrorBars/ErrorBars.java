package com.example.grapher.models.graph.series.ErrorBars;
import com.example.grapher.models.graph.trendline.TrendlineLineTypes;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ErrorBars {
    private ErrorBarsTypes errorBarType;
    private Integer width;
    private TrendlineLineTypes lineType;
    private String color;
}
