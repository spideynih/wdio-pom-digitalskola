import HomePage from "../pageobjects/home.page";
import LoginPage from "../pageobjects/login.page";
import CartPage from "../pageobjects/cart.page";

describe('Test Saucedemo', () => {
    it('Test 1 - Login Successfully ', async () => {

        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await HomePage.validateOnHomePage() 
    });

    it('Test 2 - Add to cart successfully ', async () => {
        await HomePage.open()
        await HomePage.addToCart.click()
        await HomePage.cartIcon.click()
        await CartPage.validateOnCartPage()
    });

});