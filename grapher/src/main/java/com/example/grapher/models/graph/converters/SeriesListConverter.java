package com.example.grapher.models.graph.converters;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.example.grapher.models.graph.Series;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class SeriesListConverter implements AttributeConverter<List<Series>, String> {
    private static final ObjectMapper mapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<Series> series) {
        try {
            return mapper.writeValueAsString(series);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Series> convertToEntityAttribute(String json) {
        try {
            return mapper.readValue(json, new TypeReference<>() {
            });
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}