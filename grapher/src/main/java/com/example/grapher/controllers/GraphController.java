package com.example.grapher.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.example.grapher.models.API.GraphResponse;
import com.example.grapher.models.API.PatchGraphRequest;
import com.example.grapher.models.graph.Graph;
import com.example.grapher.services.GraphService;

@RestController
@RequestMapping("/v1/grapher/graph")
public class GraphController {
    private final GraphService graphService;

    @Autowired
    public GraphController(GraphService graphService) {
        this.graphService = graphService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getGraph(@PathVariable Long id) {
        try {
            GraphResponse graph = graphService.getGraphById(id);
            return ResponseEntity.ok(graph);
        } catch (ResponseStatusException e) {
            // This will return 404 if the graph doesn't exist
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        }
    }

    @PatchMapping("/{id}")
    public GraphResponse patchGraph(@PathVariable Long id, @RequestBody PatchGraphRequest request) {
        return graphService.patchGraphById(id, request);
    }

    @GetMapping("/")
    public ResponseEntity<?> getGraphs() {
        try {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            List<Graph> graphs = graphService.fetchAllGraphs(username);
            return ResponseEntity.ok(graphs);
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        }

    }

    @PostMapping("/create")
    public ResponseEntity<?> createGraph() {
        try {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            Graph created = graphService.createNewGraph(username);
            return ResponseEntity.status(HttpStatus.CREATED).body(created);
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        }
    }

    // id = graphId
    @DeleteMapping("/{id}") // This maps to DELETE /v1/grapher/graph/{id}
    public ResponseEntity<?> deleteGraph(@PathVariable Long id) {
        try {
            String username = SecurityContextHolder.getContext().getAuthentication().getName();
            List<Graph> remainingGraphs = graphService.deleteGraph(username, id);
            return ResponseEntity.ok(remainingGraphs);
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        }
    }
}
