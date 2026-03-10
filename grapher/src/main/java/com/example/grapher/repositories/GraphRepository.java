package com.example.grapher.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.grapher.models.graph.Graph;

@Repository
public interface GraphRepository extends JpaRepository<Graph, Long> {
    List<Graph> findByUser_Id(Long userId);
}