package com.easyfestival.www.security;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class UserVO {
	
	private long userNo;
	private String id;
	private String pwd;
	private String name;
	private int age;
	private String phoneNumber;
	private String grade;
	private long point;
	private List<AuthVO> authList;
}
