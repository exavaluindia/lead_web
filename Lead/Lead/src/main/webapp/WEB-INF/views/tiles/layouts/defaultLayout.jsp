<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title><tiles:getAsString name="title" /></title>
<link href="<c:url value='/static/css/bootstrap.css' />"
	rel="stylesheet"></link>
<link href="<c:url value='/static/css/bootstrap.min.css' />"
	rel="stylesheet"></link>
</head>

<body>
	<div class="container">
		<main role="main">
			<div class="row">
				<div class="col-sm-12">
					<header id="header">
						<tiles:insertAttribute name="header" />
					</header>

					<!-- 		<section id="sidemenu"> -->
					<%-- 			<tiles:insertAttribute name="menu" /> --%>
					<!-- 		</section> -->

					<section id="site-content">
						<tiles:insertAttribute name="body" />
					</section>

					<footer id="footer">
						<tiles:insertAttribute name="footer" />
					</footer>
				</div>
			</div>
		</main>
	</div>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="https://smtpjs.com/v3/smtp.js"></script>
	<script src="<c:url value='/static/js/bootstrap.js'></c:url>"
		type="text/javascript"></script>
	<script src="<c:url value='/static/js/bootstrap.min.js'></c:url>"
		type="text/javascript"></script>
	<script src="<c:url value='/static/js/custom/home.js'></c:url>"
		type="text/javascript"></script>
</body>
</html>