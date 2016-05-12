(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['workModal'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <!-- workExperience Modal "
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + " -->\r\n    <div class=\"portfolio-modal modal fade\" id=\"workModal"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"close-modal\" data-dismiss=\"modal\">\r\n                <div class=\"lr\">\r\n                    <div class=\"rl\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-8 col-lg-offset-2\">\r\n                        <div class=\"modal-body\">\r\n                            <!-- Project Details Go Here -->\r\n                            <h2>"
    + alias4(((helper = (helper = helpers.company || (depth0 != null ? depth0.company : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"company","hash":{},"data":data}) : helper)))
    + "</h2>\r\n                            <p class=\"item-intro text-muted\">"
    + alias4(((helper = (helper = helpers.position || (depth0 != null ? depth0.position : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"position","hash":{},"data":data}) : helper)))
    + " </p>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.pic : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            <p>"
    + alias4(((helper = (helper = helpers.startDate || (depth0 != null ? depth0.startDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"startDate","hash":{},"data":data}) : helper)))
    + " - "
    + alias4(((helper = (helper = helpers.endDate || (depth0 != null ? depth0.endDate : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"endDate","hash":{},"data":data}) : helper)))
    + " , "
    + alias4(((helper = (helper = helpers.city || (depth0 != null ? depth0.city : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"city","hash":{},"data":data}) : helper)))
    + ", "
    + alias4(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"region","hash":{},"data":data}) : helper)))
    + " , "
    + alias4(((helper = (helper = helpers.countryCode || (depth0 != null ? depth0.countryCode : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"countryCode","hash":{},"data":data}) : helper)))
    + "</p>\r\n                            <ul  class=\"align-left\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.highlights : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            </ul>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.summary : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            <p>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.website : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            <p>\r\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close Project</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                            <img class=\"img-responsive img-centered\" src=\"img/work/"
    + container.escapeExpression(((helper = (helper = helpers.pic || (depth0 != null ? depth0.pic : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"pic","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "                                <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                            <p>"
    + container.escapeExpression(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"summary","hash":{},"data":data}) : helper)))
    + " </p>\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"website","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n                                    <span class=\"fa fa-external-link\"></span> Website\r\n                                </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.work : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();