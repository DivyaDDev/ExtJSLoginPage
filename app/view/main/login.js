Ext.define('loginApp.view.main.login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    width: 320,
    bodyPadding: 10,
    defaultType: 'textfield',
    requires:['loginApp.controller.loginController'],
    controller: 'login_Controller',
    
    items: [
    {
        allowBlank: false,
        fieldLabel: 'User ID',
        reference:'userId',
        name: 'User',
        minLength     : 3,
        emptyText: 'user id',
    }, {
        allowBlank: false,
        inputType: 'password',
        fieldLabel: 'Password',
        name: 'Password',
        itemId:'passwordId',
        emptyText: 'password',
    }],

    buttons: [
        { 
            text:'Login',
            formBind:true,
            scale: 'medium',
            handler: 'onLoginClick' 
        },
        { 
            text:'Cancel',
            scale: 'medium', 
            handler:'onCancelClick'

        }
    ],
});