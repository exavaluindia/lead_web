<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<div class="col-sm-12">
	<div class="form-row">
		<div class="form-group col-md-6">
			<label for="firstName">First Name</label> <input type="text"
				class="form-control" id="first_name">
		</div>
		<div class="form-group col-md-6">
			<label for="lastName">Last Name</label> <input type="text"
				class="form-control" id="last_name">
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
			<label for="inputAddress2">Street Name</label> <input type="text"
				class="form-control" id="street">
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
			<label for="inputAddress2">Address Line 2</label> <input type="text"
				class="form-control" id="street2">
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-6">
			<label for="company">City Name</label> <input type="text"
				class="form-control" id="city">
		</div>
		<div class="form-group col-md-6">
			<label for="company">State Name</label> 
			<select id="state" class="form-control">
				
			</select>
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-6">
			<label for="inputAddress2">Zipcode</label> <input type="text"
				class="form-control" id="zipcode">
		</div>
		<div class="form-group col-md-6">
			<label for="inputCity">Contact Number</label> <input type="number"
				class="form-control" id="contact" minlength="10">
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
			<label for="inputAddress2">Select New Address: </label> <input type="radio"  id="select_address">
			<div class="form-group col-md-12" id="show_new_addr">
			</div>
		</div>
	</div>
	<div class="form-row">
		<div class="form-group col-md-12">
			<label for="inputCity">Email Address</label> <input type="email"
				class="form-control" id="email">
		</div>
	</div>
	<input type="hidden" id="base_url" value="<c:url value='/saveLead' />" />
	<input type="hidden" id="address_url"
		value="<c:url value='/accessAddress' />" />
		<input type="hidden" id="email_url" value="<c:url value='/accessEmail' />" />
		<input type="hidden" id="phone_url" value="<c:url value='/accessPhone' />" />
<!-- 	<button type="submit" class="btn btn-primary" id="ok">Submit</button> -->
	<button type="submit" class="btn btn-info" id="sendMail">Send Mail</button>
	<div id="loader">
		<span class="text-danger">Loading...</span>
	</div>
</div>
</div>
