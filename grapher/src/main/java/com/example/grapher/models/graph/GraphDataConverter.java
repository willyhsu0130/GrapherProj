package com.example.grapher.models.graph;

import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class GraphDataConverter implements AttributeConverter<GraphData, String> {
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(GraphData data) {
        try { return mapper.writeValueAsString(data); }
        catch (Exception e) { throw new RuntimeException(e); }
    }

    @Override
    public GraphData convertToEntityAttribute(String json) {
        try { return mapper.readValue(json, GraphData.class); }
        catch (Exception e) { throw new RuntimeException(e); }
    }
}