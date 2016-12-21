'use strict';

describe('account', function () {

    var username = element(by.id('username'));
    var password = element(by.id('password'));
    var accountMenu = element(by.id('account-menu'));
    var login = element(by.id('login'));
    var register = element(by.id(''));
    var logout = element(by.id('logout'));

    beforeAll(function () {
        browser.get('/');
    });

   /* it('should fail to login with bad password', function () {
        element.all(by.css('h1')).first().getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/home.title/);
        });
        accountMenu.click();
        login.click();

        username.sendKeys('admin');
        password.sendKeys('foo');
        element(by.css('button[type=submit]')).click();

        element(by.css('.alert-danger')).getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/login.messages.error.authentication/);
        });
    });*/

    it('should create a new account', function () {
    	element.all(by.css('h1')).first().getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/home.title/);
        });
    	accountMenu.click();
    	element(by.css('[ui-sref="register"]')).click();
    	
    	//console.log("questo è un messaggio sulla console");
    	//browser.pause();
    	console.log("test element.all");
    	//var new_username = element.all(by.id('login')).get(2);
    	    	
    	//element.all(by.id('login')).count().then(function(count) { console.log("totali elementi login by id: "+count); });
    	var new_username = element.all(by.id('login')).last();
    	/*console.log(new_username.getAttribute('login'));
    	element.all(by.id('login')).last().getAttribute('login').then(function(value) {
    		console.log("new_username: "+value);
    	    });
    	*/
    	//var new_username = element(by.name('login'));
    	//console.log("new_username= "+new_username);
    	var new_email = element(by.id('email'));
    	var new_password = element(by.id('password'));
    	var new_confPassword = element(by.id('confirmPassword'));
    	
    	
    	
    	//login.clear().sendKeys('Luca');
    	new_username.clear().sendKeys('Stefano');
    	new_email.clear().sendKeys('Stefano.Viola@gmail.com');
        new_password.clear().sendKeys('password3');
        new_confPassword.clear().sendKeys('password3');
        
        //element.all(by.css('ng-disabled=\"form.$invalid\"')).click();
        element(by.css('button[type=submit]')).click();
        
        
        element(by.css('.alert-success')).getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/register.messages.success/);
        });
    });
    
   /* it('should login successfully with admin account', function () {
        element.all(by.css('h1')).first().getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/login.title/);
        });

        username.clear().sendKeys('admin');
        password.clear().sendKeys('admin');
        element(by.css('button[type=submit]')).click();

        element(by.css('.alert-success')).getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/home.logged.message/);
        });
    });

    it('should be able to update settings', function () {
        accountMenu.click();
        element(by.css('[ui-sref="settings"]')).click();

        element(by.css('h2')).getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/settings.title/);
        });
        element(by.css('button[type=submit]')).click();

        element(by.css('.alert-success')).getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/settings.messages.success/);
        });
    });

    it('should be able to update password', function () {
        accountMenu.click();
        element(by.css('[ui-sref="password"]')).click();

        element.all(by.css('h2')).first().getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/password.title/);
        });
        password.sendKeys('newpassword');
        element(by.id('confirmPassword')).sendKeys('newpassword');
        element(by.css('button[type=submit]')).click();

        element(by.css('.alert-success')).getAttribute('data-translate').then(function (value) {
            expect(value).toMatch(/password.messages.success/);
        });
        accountMenu.click();
        logout.click();

        accountMenu.click();
        login.click();

        username.sendKeys('admin');
        password.sendKeys('newpassword');
        element(by.css('button[type=submit]')).click();

        accountMenu.click();
        element(by.css('[ui-sref="password"]')).click();
        // change back to default
        password.clear().sendKeys('admin');
        element(by.id('confirmPassword')).clear().sendKeys('admin');
        element(by.css('button[type=submit]')).click();
    });
    
    
   */

    
    afterAll(function () {
        accountMenu.click();
        logout.click();
    });
});
