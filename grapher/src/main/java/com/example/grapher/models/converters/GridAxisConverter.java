package com.example.grapher.models.converters;

import com.example.grapher.models.graph.GridAxis;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class GridAxisConverter implements AttributeConverter<GridAxis, String> {
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(GridAxis axis) {
        try {
            return mapper.writeValueAsString(axis);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to serialize GridAxis: " + axis, e);
        }
    }

    @Override
    public GridAxis convertToEntityAttribute(String json) {
        if ("null".equals(json))
            return null;
        System.out.println(json);
        try {
            return mapper.readValue(json, GridAxis.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException("Failed to deserialize GridAxis from: " + json, e);
        }
    }
}