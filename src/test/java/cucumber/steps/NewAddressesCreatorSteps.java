package cucumber.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import static org.junit.Assert.assertTrue;

public class NewAddressesCreatorSteps extends StepsBase {
    private WebDriver driver;


    @Given("^an open browser and logged user on prod-kurs.coderslab.pl")
    public void anOpenBrowserAndLoggedUserOnProdKursCoderslabPl(){
        driver = prepateDriver();
        driver.get("https://prod-kurs.coderslab.pl/index.php?controller=authentication");
        WebElement loginInput = driver.findElement(By.name("email"));
            loginInput.click();
            loginInput.clear();
            loginInput.sendKeys("cichanowicz@gmail.com");

            WebElement passwordInput = driver.findElement(By.name("password"));
            passwordInput.click();
            passwordInput.clear();
            passwordInput.sendKeys("cebula123");

            WebElement signInButton = driver.findElement(By.id("submit-login"));
            signInButton.click();
        }


    @When("^user click on View My Customer Account Button$")
    public void userClickOnViewMyCustomerAccountButton() {
        driver.findElement(By.cssSelector("span[class='hidden-sm-down']")).click();
    }
    @And("^user click on Addresses button$")
    public void userClickOnAddressesButton() {
        driver.findElement(By.cssSelector("a[id='addresses-link']")).click();
    }

    @And("^user click on Create new address button$")
    public void userClickOnCreateNewAddressButton() {
        driver.findElement(By.xpath("/html/body/main/section/div/div/section/section/div[3]/a/span")).click();
    }

    @And("^user fill a Address field with(.*)$")
    public void userFillAddressFieldWith(String address) {
        driver.findElement(By.name("address1")).sendKeys(address);
    }

    @And("^user fill a Zip/Postal Code field with(.*)$")
    public void userFillZipCodeFieldWith(String postcode) {
        driver.findElement(By.name("postcode")).sendKeys(postcode);

    }

    @And("^user fill a City field with(.*)$")
        public void userFillCityFieldWith(String city) {
            driver.findElement(By.name("city")).sendKeys(city);

    }

    @And("^user click on Save button$")
    public void userClickOnSaveButton() {

        driver.findElement(By.xpath("/html/body/main/section/div/div/section/section/div/div/form/footer/button")).click();
    }

    @Then("^user should see a confirm of adding new address$")
    public void userShouldSeeAConfirmOfAddingNewAddress() {
        assertTrue(driver.findElement(By.cssSelector("article[class='alert alert-success']")).isDisplayed());
    }

    @And("^browser should be close$")
    public void browserShouldBeClose() {
        driver.close();
    }
}


