package com.example.grapher.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

        Graph graph = Graph.builder()
                .user(user)
                .build();
        return graphRepository.save(graph);
    }

    public List<Graph> fetchAllGraphs(String username) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));
        List<Graph> graphList = graphRepository.findByUser_Id(user.getId());
        return graphList;
    }

    public Graph getGraphById(Long id){
        Graph graph = graphRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Graph not found"));
        return graph;
    }
}
