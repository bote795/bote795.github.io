(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['projectModal'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <!-- Portfolio Modal "
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + " -->\r\n    <div class=\"portfolio-modal modal fade\" id=\"portfolioModal"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data}) : helper)))
    + "\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"close-modal\" data-dismiss=\"modal\">\r\n                <div class=\"lr\">\r\n                    <div class=\"rl\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-8 col-lg-offset-2\">\r\n                        <div class=\"modal-body\">\r\n                            <!-- Project Details Go Here -->\r\n                            <h2>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</h2>\r\n                            <p class=\"item-intro text-muted\">"
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + " </p>\r\n                            <img class=\"img-responsive img-centered\" src=\"img/portfolio/"
    + alias4(((helper = (helper = helpers.pic || (depth0 != null ? depth0.pic : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pic","hash":{},"data":data}) : helper)))
    + "\" alt=\"\">\r\n                            <p>"
    + alias4(((helper = (helper = helpers.Detail || (depth0 != null ? depth0.Detail : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Detail","hash":{},"data":data}) : helper)))
    + " </p>\r\n\r\n                            <p>\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.url : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.github : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "                            <p>\r\n                            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\"><i class=\"fa fa-times\"></i> Close Project</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"url","hash":{},"data":data}) : helper)))
    + "\" target=\"_blank\">\r\n                                    <span class=\"fa fa-external-link\"></span> Website\r\n                                </a>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                                <a href=\""
    + container.escapeExpression(((helper = (helper = helpers.github || (depth0 != null ? depth0.github : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"github","hash":{},"data":data}) : helper)))
    + "\">\r\n                                    <span class=\"fa fa-github\"></span> github\r\n                                </a>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.projects : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();