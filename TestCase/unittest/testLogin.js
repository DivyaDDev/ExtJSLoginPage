describe("Login Form Validation", function() {
    
    var mainPanel, controller = null;

    beforeEach(function() {
        mainPanel = Ext.create('loginApp.view.main.login');
        controller = Ext.create('loginApp.controller.loginController');
    });

    it("ExtJS framework is loaded and ready", function() {
        expect(Ext).toBeDefined();
    });
    it('Main Panel is successfully loaded', function() {
        expect(mainPanel != null).toBeTruthy();
    });
    it('Test Text Box Validations', function() {
        var body = mainPanel;
        
        //Invalid user id, length < 1
        body.items.items[0].setValue('1');
        expect(body.items.items[0].activeErrors!=null).toBeTruthy();

        //Valid user id, length > 3
        body.items.items[0].setValue('valid');
        expect(body.items.items[0].activeErrors==null).toBeTruthy();
    });
    it('Test button disabled or enabled', function() {
        jasmine.clock().install();
        
        button = mainPanel.down('button[text=Login]'),      
        field  = mainPanel.down('textfield[name=User]');
        field1  = mainPanel.down('textfield[name=Password]');

        //login button is disabled on invalid form values
        field.setValue('1');
        field1.setValue('valid');
        jasmine.clock().tick(100);
        expect(button.disabled==true).toBeTruthy();
    
        //login button is enabled on valid form values
        field.setValue('valid');
        field1.setValue('valid');
        jasmine.clock().tick(100);
        expect(button.disabled==false).toBeTruthy();
    });
    it('Login click function called successfully ', function() {
        var scope = mainPanel.controller;
        spy = spyOn(scope, 'onLoginClick');
        mainPanel.down('button[text=Login]').click();
        jasmine.clock().tick(100);
        expect(spy).toHaveBeenCalled();

    });
});


