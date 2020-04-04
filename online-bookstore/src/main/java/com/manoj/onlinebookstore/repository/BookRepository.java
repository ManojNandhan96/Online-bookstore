package com.manoj.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manoj.onlinebookstore.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long>{

}
