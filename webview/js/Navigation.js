export class Navigation {
    static pages = ['overview', 'problems', 'elements'];
    
    static setButtons(){
        Navigation.pages.forEach(page => {
            $("#"+page).on( "click", function() {
                // $("#base").load(jsPath + "/../html/"+page+".html");
                $("#navigation").children().removeClass();
                
                switch (page) {
                    case "overview":
                        $("#overview").addClass("btnVS");
                        $("#problems").addClass("btnVS");
                        $("#elements").addClass("btnVS");
                        $("#overviewDiv").show();
                        $("#problemsDiv").hide();
                        break;
                    case "problems":
                        $("#overview").addClass("btnVS");
                        $("#problems").addClass("btnVS");
                        $("#elements").addClass("btnVS");
                        $("#overviewDiv").hide();
                        $("#problemsDiv").show();
                        break;
                    case "elements":
                        $("#overview").addClass("btn btn-secondary");
                        $("#problems").addClass("btn btn-secondary");
                        $("#elements").addClass("btn btn-primary");
                        break;
                    default:
                        break;
                }

                window.page = page;
            });
            
        });
    }
}

