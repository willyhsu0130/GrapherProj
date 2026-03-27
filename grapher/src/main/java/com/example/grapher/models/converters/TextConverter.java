package com.example.grapher.models.converters;

import com.example.grapher.models.graph.Text;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class TextConverter implements AttributeConverter<Text, String> {
    private final ObjectMapper mapper = new ObjectMapper();

    @Override
    public String convertToDatabaseColumn(Text data) {
        if (data == null) return null;
        try { return mapper.writeValueAsString(data); }
        catch (JsonProcessingException e) { throw new RuntimeException(e); }
    }

    @Override
    public Text convertToEntityAttribute(String json) {
        if (json == null) return null;
        try { return mapper.readValue(json, Text.class); }
        catch (JsonProcessingException e) { throw new RuntimeException(e); }
    }
}