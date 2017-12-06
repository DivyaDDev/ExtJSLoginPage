Ext.define('loginApp.controller.loginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login_Controller',

    getForm: function () {
        return this.getView().getForm();
    },

    //performs login operation
    //grabs userid entered and displays an alert
    onLoginClick:function(){
        var userid=this.getView().lookupReference("userid").getValue();
        
        Ext.create('Ext.data.Store', {
            storeId:'st1',
            data : [
                {loginuserid: userid}
            ]
        });
        alert("Welcome " +userid);
    },
    
    //clears form fields
    onCancelClick:function(){
        this.getForm().reset();
    }
}
);
