package com.todo.todoweb.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

	private  static List<Todo> todos = new ArrayList();
	private static Long idCounter = 0l;
	
	static {
		todos.add(new Todo(++idCounter, "manish1998", "Learn To React", new Date() ,false ));
		todos.add(new Todo(++idCounter, "manish1998", "Learn To Spring Boot", new Date() ,false ));
		todos.add(new Todo(++idCounter, "manish1998", "Learn To Angular ", new Date() ,false ));
		todos.add(new Todo(++idCounter, "manish1998", "Learn To Angular Services", new Date() ,false ));
	}
	
	public List<Todo> findAll(){
		return todos;
	}
}
