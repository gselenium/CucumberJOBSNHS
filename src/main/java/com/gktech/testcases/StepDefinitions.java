package com.gktech.testcases;

import com.gktech.base.AppBase;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinitions {
	AppBase cucumber=AppBase.getInstance();
	
	
	
	@Then("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter_uname(String uname, String text){
		System.out.println("I enter"+uname+" as "+text);
		cucumber.type(uname, text);
	}
	
	/*@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	public void I_enter_pass(String pass, String text){
		System.out.println("I enter"+pass+" as "+text);
		cucumber.type(pass, text);
	}*/
	
	@And("^I click on \"([^\"]*)\"$")
	public void I_click_on(String prop){
		System.out.println("I click on "+prop);
		cucumber.click(prop);
	}
	
	@Then("^I got the \"([^\"]*)\"$")
	public void I_got(String text){
		System.out.println("I got the "+text);
		
	}
	
	@Given("^I open \"([^\"]*)\"$")
	public void I_Open_Browser(String browser){
		System.out.println("I open "+browser);
		cucumber.OpenBrowser(browser);
	}
	
	@When("^I navigate \"([^\"]*)\"$")
	public void I_navigate(String url){
		System.out.println("I navigate"+url);
		cucumber.navigate(url);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
