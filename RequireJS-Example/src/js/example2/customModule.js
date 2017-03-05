define(function () {

    function customModule(message) {
        this.message = message;
        
    }

    customModule.prototype.alert = function () {
        alert(this.message);
    };

    return { CustomModule: customModule };
});  