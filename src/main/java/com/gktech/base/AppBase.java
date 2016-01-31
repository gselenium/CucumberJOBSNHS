package com.gktech.base;

import java.io.FileInputStream;
import java.util.Properties;

import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class AppBase {
	WebDriver driver;
	Properties OR=null;
	FileInputStream ip=null;
	static AppBase w;
	Logger applogs=null;
	public AppBase(){
		if(OR==null && applogs==null){
			try{	
			applogs=Logger.getLogger("devpinoyLogger");
			applogs.debug("Logs are generating");			
			OR=new Properties();
			ip=new FileInputStream(System.getProperty("user.dir")+"/src/main/java/com/gktech/config/OR.properties");
			OR.load(ip);
			applogs.debug("Properties files are loading correctly");
			}catch(Throwable t){
				System.out.println("Error while loading properties files");
				applogs.debug("Properties files are not loaded correctly");
			}
		}
	}
	
	public void OpenBrowser(String browser){
		applogs.debug("Browser opening");
		if(browser.equalsIgnoreCase("Mozilla")){			
			driver=new FirefoxDriver();
			driver.manage().window().maximize();
		}else if(browser.equals("ie")){			
			driver=new InternetExplorerDriver();
			driver.manage().window().maximize();
		}else if(browser.equalsIgnoreCase("chrome")){
			driver=new ChromeDriver();
			driver.manage().window().maximize();
		}
	}
	
	public void navigate(String url){
		applogs.debug("Navigating appliation url");
		driver.get(OR.getProperty(url));
		
	}
	
	public void type(String prop, String text){
		applogs.debug("Entering data in the field");
		driver.findElement(By.xpath(OR.getProperty(prop))).sendKeys(text);	
	}
	
	public void select(String prop, String text){
		applogs.debug("Selecting the option from the dropdown box");
		driver.findElement(By.xpath(OR.getProperty(prop))).sendKeys(text);
	}
	
	public void click(String prop){
		applogs.debug("Clicking on element");
		driver.findElement(By.xpath(OR.getProperty(prop))).click();
	}
	
	public static AppBase getInstance(){
		if(w==null){
			w=new AppBase();
			return w;
		}else{
			return w;
		}
		
	}

}
