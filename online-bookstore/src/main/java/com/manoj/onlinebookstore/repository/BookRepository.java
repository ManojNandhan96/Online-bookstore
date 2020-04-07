package com.manoj.onlinebookstore.repository;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.manoj.onlinebookstore.entity.Book;


@CrossOrigin("*")
//@CrossOrigin("http://localhost:4200") 
public interface BookRepository extends JpaRepository<Book, Long>{
	
	@RestResource(path = "categoryid")
	 Page<Book> findByCategoryId(@Param("id") Long id,Pageable pageable);
//	 List<Book> findByCategoryId(Long id);

}
