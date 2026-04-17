package com.example.grapher.services;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import com.example.grapher.mappers.GraphMapper;
import com.example.grapher.models.API.GraphResponse;
import com.example.grapher.models.API.PatchGraphRequest;
import com.example.grapher.models.User;
import com.example.grapher.models.graph.Graph;
import com.example.grapher.repositories.GraphRepository;
import com.example.grapher.repositories.UserRepository;

@Transactional
@Service
public class GraphService {
    private final GraphRepository graphRepository;
    private final UserRepository userRepository;
    private final GraphMapper graphMapper;

    @Autowired
    public GraphService(GraphRepository graphRepository, UserRepository userRepository, GraphMapper graphMapper) {
        this.graphRepository = graphRepository;
        this.userRepository = userRepository;
        this.graphMapper = graphMapper;
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

    @Transactional(readOnly = true)
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
                graph.getData(),
                graph.getSnapshot(),
                graph.getSeries(),
                graph.getXAxis(),
                graph.getYAxis(),
                graph.getTrendlines());
    }

    public List<Graph> deleteGraph(String username, Long graphId) {
        // 1. Find the user
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        // 2. Find the graph first to verify it exists and belongs to this user
        Graph graph = graphRepository.findById(graphId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Graph not found"));

        // 3. Security Check: Ensure the graph actually belongs to the user
        if (!graph.getUser().getId().equals(user.getId())) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "You do not have permission to delete this graph");
        }

        // 4. Perform the deletion
        graphRepository.delete(graph);

        // 5. Return the updated list for the frontend to refresh the table
        return graphRepository.findByUser_Id(user.getId());
    }

    public GraphResponse patchGraphById(Long id, PatchGraphRequest request) {
        Graph graph = graphRepository.findById(id).orElseThrow();
        graphMapper.patchGraphFromRequest(request, graph);
        Graph saved = graphRepository.save(graph);
        return graphMapper.toResponse(saved);
    }
}