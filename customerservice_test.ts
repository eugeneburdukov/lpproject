import { locator } from "codeceptjs";
import { environment } from "./config/basicConfig";

Feature('customerservice');

Before(({ I }) => {
    console.log("🚀 Running");
    I.amOnPage(environment.WEBPAGE.customerServicePage);
});

Scenario('Submit Customer Service form', ({ I, cspagePage }) => {
    cspagePage.submitForm();
});