const { I } = inject();

class cspagePage {

  popupWithChild = "//button[@aria-label='close']";
  giftImage = "//img[@class = 'gift-icon']";
  firstNameField = "//input[@id = 'coupon_service_form_private_name']";
  lastNameField = "//input[@id = 'coupon_service_form_family_name']";
  emailField = "//input[@id = 'coupon_service_form_email']";
  registerButton = "//div[@class = 'lupa_btn form_btn register-email-btn']//a";

  submitForm() {
    I.click(this.popupWithChild);
  
    I.executeScript(() => {
        const footerElement = document.querySelector('.adoric_element.element-shape.closeLightboxButton') as HTMLElement;
        footerElement?.click();
      });

    I.click(this.giftImage);
    I.fillField(this.firstNameField, "name");
    I.fillField(this.lastNameField, "surname");
    I.wait(1);
    I.fillField(this.emailField, "name@mail.com");
    I.wait(2);
    I.click(this.registerButton);
    I.saveScreenshot("registerStatus.png", true);
  }

}


export = new cspagePage();
