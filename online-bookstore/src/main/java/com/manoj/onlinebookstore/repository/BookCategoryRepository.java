package com.manoj.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.manoj.onlinebookstore.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel="bokCategory",path="book-category")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
