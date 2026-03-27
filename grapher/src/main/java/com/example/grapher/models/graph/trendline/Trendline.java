package com.example.grapher.models.graph.trendline;

import com.example.grapher.models.graph.trendline.types.LinearTrendline;
import com.example.grapher.models.graph.Text;
import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@JsonTypeInfo(
    use = JsonTypeInfo.Id.NAME,
    include = JsonTypeInfo.As.PROPERTY,
    property = "type",
    defaultImpl = LinearTrendline.class // Add this line!
)
@JsonSubTypes({
        @JsonSubTypes.Type(value = LinearTrendline.class, name = "linear"),
})
public abstract class Trendline {
    private String id;
    private String seriesId;
    private String color;
    private Text title;
}