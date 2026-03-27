package com.example.grapher.models.graph;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Text {

    @com.fasterxml.jackson.annotation.JsonCreator
    public Text(String content) {
        this.content = content;
    }

    @Column(columnDefinition = "TEXT")
    private String content;

    @Column(columnDefinition = "TEXT")
    private String color;

    @Column(columnDefinition = "TEXT")
    private String font;

    @Column(columnDefinition = "TEXT")
    private Integer size;

}
