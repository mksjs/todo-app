package com.todo.todoweb.todo;

import java.util.Date;

public class Todo {

	private Long id;
	private String username;
	private String description;
	private Date targetDate;
	private boolean isDone;
	
	public Long getId() {
		return id;
	}
	public String getUsername() {
		return username;
	}
	public String getDescription() {
		return description;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	
	public Todo(Long id, String username, String description, Date targetDate, boolean isDone) {
		super();
		this.id = id;
		this.username = username;
		this.description = description;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
}
