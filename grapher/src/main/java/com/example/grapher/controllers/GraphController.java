package com.example.grapher.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
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
    public GraphResponse getGraph(@PathVariable Long id) {
        return graphService.getGraphById(id);
    }
    @PatchMapping("/{id}")
    public GraphResponse patchGraph(@PathVariable Long id, @RequestBody PatchGraphRequest request){
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
            return ResponseEntity.ok(created);
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        }
    }
}
