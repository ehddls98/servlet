<%@page import="java.util.List"%>
<%@page import="com.study.dvd.dao.PublisherDao"%>
<%@page import="com.study.dvd.entity.Publisher"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	String st = request.getParameter("searchText");
	List<Publisher> publishers = PublisherDao.searchPublisherByPublisherName(st);
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div>
		<label>출판사 검색</label>
	<input
		type="text"
		class="search-input"
		placeholder="출판사명을 입력하세요"
	>
	<button onclick="handleSearchClick()">검색</button>
	</div>
	
	<table>
		<thead>
			<tr>
				<th>출판사ID</th>
				<th>출판사명</th>
			</tr>
		</thead>
		<tbody>
			<%
				for(Publisher ps : publishers) {
			%>
			<tr>
				<td><%=ps.getPublisherId()%></td>
				<td><%=ps.getPublisherName()%></td>
			</tr>
			<%
				}
			%>
		</tbody>
	</table>
</body>
</html>