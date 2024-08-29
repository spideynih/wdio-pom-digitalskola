import Page from "./page";
import {$} from '@wdio/globals';

class LoginPage extends Page {

    get usernameTextbox () {
        return $('#user-name');
    }

    get passwordTextbox () {
        return $('#password');
    }

    get loginButton () {
        return $('//input[@type="submit"]');
    }

    async inputUsername(username) {
        await this.usernameTextbox.setValue(username);
        
    }

    async inputPassword(password) {
        await this.passwordTextbox.setValue(password);
    }

    async clickLoginButton() {        
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.inputUsername(username);
        await this.inputPassword(password);
        await this.clickLoginButton();
    }

    open () {
        return super.open("");
    }
}

export default new LoginPage();
