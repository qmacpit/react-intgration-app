(function(){
    function _initComponent(componentName, data) {
        return function() {
            console.log(componentName);
            init(document.getElementsByTagName("section")[0], componentName, data);
        };
    }    
    document.getElementById("buttonA").addEventListener("click", _initComponent("A", { data: "aaa" }))
    document.getElementById("buttonB").addEventListener("click", _initComponent("B", { data: "bbb" }))
})();