package com.manoj.onlinebookstore.config;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import com.manoj.onlinebookstore.entity.Book;


@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer{
	
	
   @Autowired
   private EntityManager entityManager;
   @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
//	   Expose id  in book class
//		  config.exposeIdsFor(Book.class);
//	   Expose id in all data
 	  config.exposeIdsFor(entityManager.getMetamodel().getEntities().stream().map(Type::getJavaType).toArray(Class[]::new));
 	  
 	  
 	  
 //   cross origin
 	  config.getCorsRegistry().addMapping("/**").allowedOrigins("http://localhost:4200");
      
    }
   
    
	
}
