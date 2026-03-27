package com.example.grapher.models.converters;

import java.util.ArrayList;
import java.util.List;

import com.example.grapher.models.graph.trendline.Trendline;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;

@Converter
public class TrendlineListConverter implements AttributeConverter<List<Trendline>, String> {
    private static final ObjectMapper mapper = new ObjectMapper()
            .findAndRegisterModules().setDefaultTyping(null);

    @Override
    public String convertToDatabaseColumn(List<Trendline> trendline) {
        try {
            if (trendline == null)
                return null;
            return mapper.writeValueAsString(trendline);
        } catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Trendline> convertToEntityAttribute(String json) {
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