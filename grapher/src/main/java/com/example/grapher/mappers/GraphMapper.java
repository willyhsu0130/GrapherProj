package com.example.grapher.mappers;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.example.grapher.models.API.PatchGraphRequest;
import com.example.grapher.models.graph.Graph;
import com.example.grapher.models.API.GraphResponse;

@Mapper(componentModel = "spring")
public interface GraphMapper {
    GraphResponse toResponse(Graph graph);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void patchGraphFromRequest(PatchGraphRequest request, @MappingTarget Graph graph);
}
