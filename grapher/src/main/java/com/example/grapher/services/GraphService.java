package com.example.grapher.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.grapher.models.API.GraphResponse;
import com.example.grapher.models.API.PatchGraphRequest;
import com.example.grapher.models.User;
import com.example.grapher.models.graph.Graph;
import com.example.grapher.repositories.GraphRepository;
import com.example.grapher.repositories.UserRepository;

@Service
public class GraphService {
    private final GraphRepository graphRepository;
    private final UserRepository userRepository;

    @Autowired
    public GraphService(GraphRepository graphRepository, UserRepository userRepository) {
        this.graphRepository = graphRepository;
        this.userRepository = userRepository;
    }

    public Graph createNewGraph(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        List<List<Object>> initialData = new ArrayList<>();

        for (int i = 0; i < 50; i++) {
            List<Object> row = new ArrayList<>(Collections.nCopies(5, ""));
            initialData.add(row);
        }
        // Check if an untitled graph already exists
        long untitledCount = graphRepository.countByUser_IdAndTitleStartingWith(user.getId(), "Untitled Graph");

        String title = untitledCount == 0 ? "Untitled Graph" : "Untitled Graph " + (untitledCount + 1);

        Graph graph = Graph.builder()
                .user(user)
                .data(initialData)
                .title(title)
                .build();
        return graphRepository.save(graph);
    }

    public List<Graph> fetchAllGraphs(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<Graph> graphList = graphRepository.findByUser_Id(user.getId());
        return graphList;
    }

    public GraphResponse getGraphById(Long id) {
        Graph graph = graphRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Graph not found"));
        return new GraphResponse(
                graph.getId(),
                graph.getTitle(),
                graph.getXAxis(),
                graph.getYAxis(),
                graph.getData());
    }

    public GraphResponse patchGraphById(Long id, PatchGraphRequest request) {
        Graph graph = graphRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Graph not found"));

        if (request.getTitle() != null)
            graph.setTitle(request.getTitle());
        if (request.getXAxis() != null)
            graph.setXAxis(request.getXAxis());
        if (request.getYAxis() != null)
            graph.setYAxis(request.getYAxis());
        System.out.println(request.getData());
        if (request.getData() != null)
            graph.setData(request.getData());

        graphRepository.save(graph);
        return new GraphResponse(graph.getId(), graph.getTitle(), graph.getXAxis(), graph.getYAxis(), graph.getData());
    }
}
