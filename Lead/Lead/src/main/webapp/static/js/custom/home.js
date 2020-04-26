$(document)
		.ready(
				function() {
					$("#loader").hide();
					$msg = [{"name":"",
						"street":"",
						"address2":"",
						"city":"",
						"state":"",
						"zipcode":"",
						"phone":"",
						"email":""
						}];
					$email_domain = [ "gmail.com", "yahoo.com", "outlook.com",
							"live.com", "pega.com" ];
					$data = {};
					$stateNames = [
					    {
					        "name": "Alabama",
					        "abbreviation": "AL"
					    },
					    {
					        "name": "Alaska",
					        "abbreviation": "AK"
					    },
					    {
					        "name": "American Samoa",
					        "abbreviation": "AS"
					    },
					    {
					        "name": "Arizona",
					        "abbreviation": "AZ"
					    },
					    {
					        "name": "Arkansas",
					        "abbreviation": "AR"
					    },
					    {
					        "name": "California",
					        "abbreviation": "CA"
					    },
					    {
					        "name": "Colorado",
					        "abbreviation": "CO"
					    },
					    {
					        "name": "Connecticut",
					        "abbreviation": "CT"
					    },
					    {
					        "name": "Delaware",
					        "abbreviation": "DE"
					    },
					    {
					        "name": "District Of Columbia",
					        "abbreviation": "DC"
					    },
					    {
					        "name": "Federated States Of Micronesia",
					        "abbreviation": "FM"
					    },
					    {
					        "name": "Florida",
					        "abbreviation": "FL"
					    },
					    {
					        "name": "Georgia",
					        "abbreviation": "GA"
					    },
					    {
					        "name": "Guam",
					        "abbreviation": "GU"
					    },
					    {
					        "name": "Hawaii",
					        "abbreviation": "HI"
					    },
					    {
					        "name": "Idaho",
					        "abbreviation": "ID"
					    },
					    {
					        "name": "Illinois",
					        "abbreviation": "IL"
					    },
					    {
					        "name": "Indiana",
					        "abbreviation": "IN"
					    },
					    {
					        "name": "Iowa",
					        "abbreviation": "IA"
					    },
					    {
					        "name": "Kansas",
					        "abbreviation": "KS"
					    },
					    {
					        "name": "Kentucky",
					        "abbreviation": "KY"
					    },
					    {
					        "name": "Louisiana",
					        "abbreviation": "LA"
					    },
					    {
					        "name": "Maine",
					        "abbreviation": "ME"
					    },
					    {
					        "name": "Marshall Islands",
					        "abbreviation": "MH"
					    },
					    {
					        "name": "Maryland",
					        "abbreviation": "MD"
					    },
					    {
					        "name": "Massachusetts",
					        "abbreviation": "MA"
					    },
					    {
					        "name": "Michigan",
					        "abbreviation": "MI"
					    },
					    {
					        "name": "Minnesota",
					        "abbreviation": "MN"
					    },
					    {
					        "name": "Mississippi",
					        "abbreviation": "MS"
					    },
					    {
					        "name": "Missouri",
					        "abbreviation": "MO"
					    },
					    {
					        "name": "Montana",
					        "abbreviation": "MT"
					    },
					    {
					        "name": "Nebraska",
					        "abbreviation": "NE"
					    },
					    {
					        "name": "Nevada",
					        "abbreviation": "NV"
					    },
					    {
					        "name": "New Hampshire",
					        "abbreviation": "NH"
					    },
					    {
					        "name": "New Jersey",
					        "abbreviation": "NJ"
					    },
					    {
					        "name": "New Mexico",
					        "abbreviation": "NM"
					    },
					    {
					        "name": "New York",
					        "abbreviation": "NY"
					    },
					    {
					        "name": "North Carolina",
					        "abbreviation": "NC"
					    },
					    {
					        "name": "North Dakota",
					        "abbreviation": "ND"
					    },
					    {
					        "name": "Northern Mariana Islands",
					        "abbreviation": "MP"
					    },
					    {
					        "name": "Ohio",
					        "abbreviation": "OH"
					    },
					    {
					        "name": "Oklahoma",
					        "abbreviation": "OK"
					    },
					    {
					        "name": "Oregon",
					        "abbreviation": "OR"
					    },
					    {
					        "name": "Palau",
					        "abbreviation": "PW"
					    },
					    {
					        "name": "Pennsylvania",
					        "abbreviation": "PA"
					    },
					    {
					        "name": "Puerto Rico",
					        "abbreviation": "PR"
					    },
					    {
					        "name": "Rhode Island",
					        "abbreviation": "RI"
					    },
					    {
					        "name": "South Carolina",
					        "abbreviation": "SC"
					    },
					    {
					        "name": "South Dakota",
					        "abbreviation": "SD"
					    },
					    {
					        "name": "Tennessee",
					        "abbreviation": "TN"
					    },
					    {
					        "name": "Texas",
					        "abbreviation": "TX"
					    },
					    {
					        "name": "Utah",
					        "abbreviation": "UT"
					    },
					    {
					        "name": "Vermont",
					        "abbreviation": "VT"
					    },
					    {
					        "name": "Virgin Islands",
					        "abbreviation": "VI"
					    },
					    {
					        "name": "Virginia",
					        "abbreviation": "VA"
					    },
					    {
					        "name": "Washington",
					        "abbreviation": "WA"
					    },
					    {
					        "name": "West Virginia",
					        "abbreviation": "WV"
					    },
					    {
					        "name": "Wisconsin",
					        "abbreviation": "WI"
					    },
					    {
					        "name": "Wyoming",
					        "abbreviation": "WY"
					    }
					];
					$state_html = "<option value=''>State Name</option>";
					for(var i = 0; i<$stateNames.length; i++){
						$state_html = $state_html + "<option value='" + $stateNames[i].abbreviation +"'>" 
						+ $stateNames[i].abbreviation + "-" + $stateNames[i].name +"</option>";
					}
					$("#state").html($state_html);
					$("#ok")
							.click(
									function() {
										var base_url = $("#base_url").val();
// alert("Base URL = " + base_url);
										var first_name = $("#first_name").val();
										var last_name = $("#last_name").val();
										var city = $("#city").val();
										var street = $("#street").val();
										var street = $("#street2").val();
										var state = $("#state option:selected").val();
										var zipcode = $("#zipcode").val();
										var contact = $("#contact").val();
										var email = $("#email").val();
										var flag = false;
										var ee = email.split("@");
										for (var i = 0; i < $email_domain.length; i++) {
											if (ee[1] === $email_domain[i]) {
												flag = true;
												break;
											}
										}
										$("#loader").show();
										if (first_name === "") {
											alert("Enter First Name");
											$("#first_name").val("");
											$("#first_name").focus();
										} else if (last_name === "") {
											alert("Enter Last Name");
											$("#last_name").val("");
											$("#last_name").focus();
										} else if (city === "") {
											alert("Enter City Details");
											$("#city").val("");
											$("#city").focus();
										} else if (street === "") {
											alert("Enter Your Street Name");
											$("#street").val("");
											$("#street").focus();
										} else if (state === "") {
											alert("Enter State Details");
											$("#state").val("");
											$("#state").focus();
										} else if (zipcode === "") {
											alert("Enter Your Zipcode Name");
											$("#zipcode").val("");
											$("#zipcode").focus();
										} else if (contact === "") {
											alert("Enter Your Contact Number");
											$("#contact").val("");
											$("#contact").focus();
										} else if (email === "") {
											alert("Enter Your Email Address");
											$("#email").val("");
											$("#email").focus();
										} else if (flag === true) {
											alert("Enter Your Email Address");
											$("#email").val("");
											$("#email").focus();
										} else {
											$
													.ajax({
														type : "POST",
														url : base_url,
														data : {
															first_name : first_name,
															last_name : last_name,
															city : city,
															street : street,
															street2 : street2,
															state : state,
															zipcode : zipcode,
															contact : contact,
															email : email
														},
														success : function(data) {
															$("#loader").hide();
															if (data === "File Appended Success fully") {
																document.location.href = '/Lead/';
															} else {
																document.location.href = '/Lead/';
															}
															// console.log(data);
														}
													});
										}
									});

//					$("#zipcode")
//							.focusout(
//									function() {
//										var address_url = $("#address_url").val();
//										var city = $("#city").val();
//										var street = $("#street").val();
//										var state = $("#state").val();
//										var zipcode = $("#zipcode").val();
//
//										if (city === "") {
//											alert("Enter City Details");
//											$("#city").val("");
//										} else if (street === "") {
//											alert("Enter Your Street Name");
//											$("#street").val("");
//										} else if (state === "") {
//											alert("Enter State Details");
//											$("#state").val("");
//										} else if (zipcode === "") {
//											alert("Enter Your Zipcode Name");
//											$("#zipcode").val("");
//										} else {
//											var st = street.replace(/ /g,"+");
//											$.ajax({
//												type : "POST",
//												url : address_url,
//												data: {
//													city: city,
//													street: st,
//													state: state,
//													zipcode: zipcode
//												},
//												success : function(data) {
//													console.log(data);
//												}
//											});
//										}
//									});
					
					$("#email").focusout(function(){
						var email_url = $("#email_url").val();
						var email = $("#email").val();
						
						var url = "http://address.melissadata.net/V3/WEB/GlobalAddress/doGlobalAddress?t=T001&id=C001&opt=&org=&" +
						"a1=26 S Chestnut&a2=&a3=&a4=&a5=&a6=&a7=&a8=&ddeploc=&deploc=&loc=&subadmarea=&admarea=&subnatarea=&" +
						"postal=93003&ctry=USA&format=JSON";
						
						if (email === "") {
							alert("Enter Your Email Address");
							$("#email").val("");
						}else{
							$.ajax({
								type : "POST",
								url : email_url,
								data: {
									email: email
								},
								dataType: 'json',
								success : function(data) {
									console.log(data['ValidateEmailInfo']['IsDeliverable']);
									var ee = data['ValidateEmailInfo']['IsDeliverable'];
									if(ee){
// $msg = $msg + "\n" + email + ", this email is valid. ";
										$msg[0].email=email;
									}
									console.log($msg);
								}
							});
						}
					});
					
					$("#contact").focusout(function(){
						var phone_url = $("#phone_url").val();
						var phone = $("#contact").val();
						
						if (phone === "") {
							alert("Enter Your Phone No");
							$("#contact").val("");
						}else{
							$.ajax({
								type : "POST",
								url : phone_url,
								data: {
									phone: phone
								},
								dataType: 'json',
								success : function(data) {
									var dd = JSON.stringify(data);
									console.log("\n\nPHONE NO VALIDATION OUTPUT = " + JSON.stringify(data));
									if(data.hasOwnProperty("Error")){
										alert("Enter a valid Phone Number");
										$("#contact").val("");
									}else{
//										$msg[0].phone="4808831036";
										var new_addr = "<p>" +
												"<br/><b>Address: </b> " + data.PhoneInfo.Contacts[0].Address +
												"<br/><b>City: </b> " + data.PhoneInfo.Contacts[0].City +
												"<br/><b>State: </b> " + data.PhoneInfo.Contacts[0].State +
												"<br/><b>PostalCode: </b> " + data.PhoneInfo.Contacts[0].PostalCode +
												"</p>";
										$("#show_new_addr").html(new_addr);
										$data = data;
										$msg[0].phone=phone;
									}
								}
							});
						}
					});
					
					$("#select_address").click(function(){
						if($('#select_address').is(':checked')) { 
							alert("Checked");
							$("#street").val($data.PhoneInfo.Contacts[0].Address);
							$("#city").val($data.PhoneInfo.Contacts[0].City);
							$("#state").val($data.PhoneInfo.Contacts[0].State);
							$("#zipcode").val($data.PhoneInfo.Contacts[0].PostalCode);
						}
					});
					$("#sendMail").click(function(){
						var email = $("#email").val();
						var phone = $("#contact").val();
						var zipcode = $("#zipcode").val();
						if (email === "") {
							alert("Enter Your Email Address");
							$("#email").val("");
						}
						else if (phone === "") {
							alert("Enter Your Phone No");
							$("#contact").val("");
						}else{
							$msg[0].name=$("#first_name").val()+$("#last_name").val();
							$msg[0].street = $("#street").val();
							$msg[0].address2 = $("#street2").val();
							$msg[0].city = $("#city").val();
							$msg[0].state = $("#state option:selected").val();
							$msg[0].zipcode = $("#zipcode").val();
							console.log($msg);
							Email.send({
							    Host : "smtp.outlook.com",
							    Username : "pabitra.mondal@exavalu.com",
							    Password : "Maxpayne@2020",
							    To : email,
							    From : "pabitra.mondal@exavalu.com",
							    Subject : "Lead",
							    Body : $msg
							}).then(
							  message => alert(message)
							);
						}
					});
				});