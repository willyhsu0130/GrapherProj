package com.example.grapher.mappers;

import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import com.example.grapher.models.API.GraphResponse;
import com.example.grapher.models.API.PatchGraphRequest;
import com.example.grapher.models.graph.Graph;

@Mapper(componentModel = "spring")
public interface GraphMapper {
    GraphResponse toResponse(Graph graph);

    @Mapping(target = "id", ignore = true)
    @Mapping(target = "user", ignore = true)
    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void patchGraphFromRequest(PatchGraphRequest request, @MappingTarget Graph graph);
}
