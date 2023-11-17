package com.easyfestival.www.service;

import java.util.List;

import com.easyfestival.www.domain.PackageVO;

public interface PackageService {

	int register(PackageVO pgvo);

	List<PackageVO> getList();

	PackageVO getDetail(int pkNo);


}
