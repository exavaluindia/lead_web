package PEGA.Lead.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.util.LinkedHashMap;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import PEGA.Lead.pojo.LeadData;
import PEGA.Lead.service.LeadServiceImpl;

@Controller
@RequestMapping("/")
public class HomeController {
	
	LinkedHashMap<String, String> stateNames = new LinkedHashMap<String, String>();

	@Autowired
	LeadServiceImpl service;

	@RequestMapping(value = { "/" }, method = RequestMethod.GET)
	public String homePage(ModelMap model) {
		stateNames.put("AL", "AL-Alabama");
		stateNames.put("AK", "AK-Alaska");
		return "home";
	}

	@RequestMapping(value = { "/saveLead" }, method = RequestMethod.POST)
	public String createLead(ModelMap model, HttpServletRequest request, @RequestParam("first_name") String first_name,
			@RequestParam("last_name") String last_name, @RequestParam("city") String city,
			@RequestParam("state") String state, @RequestParam("zipcode") String zipcode,
			@RequestParam("street") String street,@RequestParam("street2") String street2,
			@RequestParam("contact") String contact,@RequestParam("email") String email) {
		LeadData data = new LeadData();
		data.setFirst_name(first_name);
		data.setLast_name(last_name);
		data.setCity(city);
		data.setStreet(street);
		data.setStreet2(street2);
		data.setState(state);
		data.setZipcode(zipcode);
		data.setPhone(contact);
		data.setEmail(email);

		service.storeIntoJsonFile(data);
		return "home";
	}

	@RequestMapping(value = { "/accessAddress" }, method = RequestMethod.POST)
	public @ResponseBody String accessAddressList(ModelMap model, HttpServletRequest request,
			@RequestParam("city") String city, @RequestParam("street") String street,
			@RequestParam("state") String state, @RequestParam("zipcode") String zipcode)
			throws UnsupportedEncodingException {
		String accessURL = "https://trial.serviceobjects.com/AVI/api.svc/JSON/GetAddressInfo";
		city = URLEncoder.encode(city, "UTF-8").replaceAll("\\+", "%20");
		street = URLEncoder.encode(street, "UTF-8").replaceAll("\\+", "%20");
		state = URLEncoder.encode(state, "UTF-8").replaceAll("\\+", "%20");
		zipcode = URLEncoder.encode(zipcode, "UTF-8").replaceAll("\\+", "%20");
		URL url = null;
		HttpURLConnection conn = null;
		String Address_Licence_key = "WS34-WFM1-XBS4";
		String mainurl = "https://trial.serviceobjects.com/GCR/api.svc/JSON/GetBestMatch_V4?Address=" + street
				+ "&City=" + city + "&State=" + state + "&PostalCode=" + zipcode + "&LicenseKey=" + Address_Licence_key;

		StringBuilder sb = new StringBuilder();

		try {
			url = new URL(mainurl);

			conn = (HttpURLConnection) url.openConnection();
			conn.setConnectTimeout(5000);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
			String output;
			System.out.println("info from the server \n");
			while ((output = br.readLine()) != null) {
				sb.append(output);
				System.out.println(output);
			}
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}

		finally {

			if (conn != null)
				conn.disconnect();
		}

		return sb.toString();
	}

	@RequestMapping(value = { "/accessEmail" }, method = RequestMethod.POST)
	public @ResponseBody String accessEmailList(ModelMap model, HttpServletRequest request,
			@RequestParam("email") String email) throws UnsupportedEncodingException {
		String accessURL = "https://trial.serviceobjects.com/AVI/api.svc/JSON/GetAddressInfo";
		email = URLEncoder.encode(email, "UTF-8").replaceAll("\\+", "%20");
		URL url = null;
		HttpURLConnection conn = null;
		String Email_Licence_key = "WS73-WZC3-LFQ1";
		String mainurl = "https://trial.serviceobjects.com/ev3/web.svc/json/ValidateEmailAddress?" + "EmailAddress="
				+ email + "&" + "AllowCorrections=true&Timeout=2000&&LicenseKey=" + Email_Licence_key;

		StringBuilder sb = new StringBuilder();
		
//		exavaluleadmgmt@gmail.com

		try {
			url = new URL(mainurl);

			conn = (HttpURLConnection) url.openConnection();
			conn.setConnectTimeout(5000);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
			String output;
			System.out.println("info from the server \n");
			while ((output = br.readLine()) != null) {
				sb.append(output);
				System.out.println(output);
			}
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}

		finally {

			if (conn != null)
				conn.disconnect();
		}

		return sb.toString();
	}
	
	@RequestMapping(value = { "/accessPhone" }, method = RequestMethod.POST)
	public @ResponseBody String accessPhoneList(ModelMap model, HttpServletRequest request, @RequestParam("phone") String phone) 
			throws UnsupportedEncodingException{
//		String accessURL = "https://trial.serviceobjects.com/AVI/api.svc/JSON/GetAddressInfo";
		String accessURL = "https://trial.serviceobjects.com/gppl2/api.svc/PhoneInfo/";
		phone = URLEncoder.encode(phone, "UTF-8").replaceAll("\\+", "%20");
		URL url = null;
		HttpURLConnection conn = null;
		String Phone_Licence_key = "WS77-YJG1-QFP1";
		String mainurl = "https://trial.serviceobjects.com/gppl2/api.svc/PhoneInfo/"+phone+"/full/"+Phone_Licence_key+"?format=json";

		StringBuilder sb = new StringBuilder();
		try {
			url = new URL(mainurl);

			conn = (HttpURLConnection) url.openConnection();
			conn.setConnectTimeout(5000);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Accept", "application/json");

			if (conn.getResponseCode() != 200) {
				throw new RuntimeException("Failed : HTTP error code : " + conn.getResponseCode());
			}

			BufferedReader br = new BufferedReader(new InputStreamReader((conn.getInputStream())));
			String output;
			System.out.println("info from the server \n");
			while ((output = br.readLine()) != null) {
				sb.append(output);
				System.out.println(output);
			}
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}

		finally {

			if (conn != null)
				conn.disconnect();
		}

		return sb.toString();
	}

}
