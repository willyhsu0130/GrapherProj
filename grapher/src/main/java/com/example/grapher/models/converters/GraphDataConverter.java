package com.example.grapher.models.converters;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import com.fasterxml.jackson.core.type.TypeReference;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class GraphDataConverter implements AttributeConverter<List<List<Object>>, String> {
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(List<List<Object>> data) {
        try { return mapper.writeValueAsString(data); }
        catch (JsonProcessingException e) { throw new RuntimeException(e); }
    }

    @Override
    public List<List<Object>> convertToEntityAttribute(String json) {
        try { return mapper.readValue(json, new TypeReference<List<List<Object>>>() {}); }
        catch (JsonProcessingException e) { throw new RuntimeException(e); }
    }
}