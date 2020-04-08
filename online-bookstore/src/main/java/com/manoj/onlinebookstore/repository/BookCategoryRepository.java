package com.manoj.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.manoj.onlinebookstore.entity.BookCategory;

@RepositoryRestResource(collectionResourceRel="bokCategory",path="book-category")
//@CrossOrigin("http://localhost:4200")
public interface BookCategoryRepository extends JpaRepository<BookCategory, Long>{

}
