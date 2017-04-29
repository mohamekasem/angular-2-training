System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AboutService;
    return {
        setters:[],
        execute: function() {
            AboutService = (function () {
                function AboutService() {
                }
                AboutService.prototype.getAboutUs = function () {
                    return ["الرؤى", "الميزات", "فريق العمل"];
                };
                return AboutService;
            }());
            exports_1("AboutService", AboutService);
        }
    }
});
//# sourceMappingURL=about.service.js.map