package com.easyfestival.www.service;

import org.springframework.stereotype.Service;

import com.easyfestival.www.repository.UserDAO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{

	private final UserDAO udao;
	
	
	
}