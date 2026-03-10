package com.example.grapher.models.graph;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class GridAxisConverter implements AttributeConverter<GridAxis, String> {
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(GridAxis axis) {
        try { return mapper.writeValueAsString(axis); }
        catch (Exception e) { throw new RuntimeException(e); }
    }

    @Override
    public GridAxis convertToEntityAttribute(String json) {
        try { return mapper.readValue(json, GridAxis.class); }
        catch (Exception e) { throw new RuntimeException(e); }
    }
}