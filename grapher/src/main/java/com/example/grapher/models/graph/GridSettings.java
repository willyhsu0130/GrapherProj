package com.example.grapher.models.graph;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data // Generates Getters, Setters, toString, equals, and hashCode
@NoArgsConstructor // Generates a constructor with no arguments
@AllArgsConstructor // Generates a constructor with all fields
public class GridSettings {
    GridAxis xGridAxis;
    GridAxis yGridAxis;
}
