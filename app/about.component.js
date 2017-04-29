System.register(['angular2/core', './about.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, about_service_1;
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (about_service_1_1) {
                about_service_1 = about_service_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent(aboutService) {
                    this.info = aboutService.getAboutUs();
                }
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'about',
                        template: "<hr />\n\t<h2>hello ther we  will let you know more about us</h2>\n<ul>\n<li *ngFor=\"#about of info\">\n{{about}}\n</li>\n</ul>\n\t",
                        providers: [about_service_1.AboutService]
                    }), 
                    __metadata('design:paramtypes', [about_service_1.AboutService])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map