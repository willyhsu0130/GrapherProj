package com.example.grapher.models.converters;

import com.example.grapher.models.graph.series.ErrorBars.ErrorBars;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class ErrorBarsConverter implements AttributeConverter<ErrorBars, String> {
    private static final ObjectMapper mapper = new ObjectMapper()
            .findAndRegisterModules().setDefaultTyping(null);

    @Override
    public String convertToDatabaseColumn(ErrorBars errorBars) {
        try {
            if (errorBars == null)
                return null;
            return mapper.writeValueAsString(errorBars);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public ErrorBars convertToEntityAttribute(String json) {
        try {
            if (json == null || json.isBlank())
                return null;
            return mapper.readValue(json, ErrorBars.class);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }
}