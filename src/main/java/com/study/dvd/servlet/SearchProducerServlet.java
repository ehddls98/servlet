package com.study.dvd.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/*
 * 1. 요청 URL = /producer/search
 * 2. dao.ProducerDao => searchProducerByProducerName()
 * 3. entity = Producer
 * 4. search_producer.jsp
 */

@WebServlet("/producer/search")
public class SearchProducerServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	@Override //tomcat이 요청받은 주소에 doGet 메서드가 있으면 req, resp를 생성하여 doGet에게 넘겨준다.
	// 요청을 받은 주소에 doGet이 없는 경우 405 Error
	// 요청 받은 주소가 자체가 존재하지 않는 경우 404 Error
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		req.getRequestDispatcher("/WEB-INF/views/search_producer.jsp").forward(req, resp); //req 요청이 들어왔을때 포워딩할 jsp 파일의 경로.
		
		
	}
       
    
}
