package com.example.grapher.models.converters;

import java.util.ArrayList;
import java.util.List;

import com.example.grapher.models.graph.series.Series;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class SeriesListConverter implements AttributeConverter<List<Series>, String> {
    private static final ObjectMapper mapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<Series> series) {
        try {
            if (series == null)
                return null;
            return mapper.writeValueAsString(series);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Series> convertToEntityAttribute(String json) {
        try {
            if (json == null || json.isBlank())
                return new ArrayList<>();
            return mapper.readValue(json, new TypeReference<>() {
            });
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}