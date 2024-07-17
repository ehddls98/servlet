<%@page import="com.study.dvd.dao.ProducerDao"%>
<%@page import="com.study.dvd.entity.Producer"%>
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%
	String st = request.getParameter("searchText");
	List<Producer> producers = ProducerDao.searchProducerByProducerName(st);
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>

<style>
	table, th, td {
		border: 1px solid #dbdbdb;
		border-collapse: collapse;
	}
	
	th, td {
		padding: 5px 10px;
	}
</style>

</head>
<body>
	<div>
		<label>제작사 검색</label>
		<input 
			type ="text" 
			class="search-input" 
			placeholder="제작사명을 입력하세요"
		>
		<button onClick="handleSearchClick()">검색</button>
	</div>
	
	<table>
		<thead>
			<tr>
				<th>제작사ID</th>
				<th>제작사명</th>
			</tr>
		</thead>
		<tbody>
			<%
				for(Producer pd : producers) {
			%>
			<tr>
				<td><%=pd.getProducerId() %></td>
				<td><%=pd.getProducerName() %></td>
			</tr>
			<%
				}			
			%>
		</tbody>
	</table>	
	<script src="/dvd/static/search_producer.js"></script>
</body>
</html>