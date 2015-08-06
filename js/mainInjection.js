//stores the data that will be used to inject into the fields
function PrePopulatedData()
{
    var imagePath = ["../../images/Fixed.png","images/128.png", "images/Verizon_Logo_2015.jpg"];
    var titles = ["iNationGaming", "Anime Tracker Storage", "Verizon"];
    var bodys =["Mission – To become a well established brand/company with a huge fan base where we can host events for them. Not only can the fans interact with one another at events but they can also enjoy video content which includes Youtube and Twitch.",
                "<b>Tired of forgeting what episode you are in?</b><br>AnimeTrackerS.(ATS) is a chrome extension that will let you have a list of the animes you are currently watching. But as you watch new episodes or the next episode, it will be updating what episode you are in and let you know when a new one is up. <br><b>It is now on the chrome app store! Still ongoing further updates!</b>",
                "Worked as an Intern for two summers. I worked in a team that works in an internal tool that supports over 190k users and delivers the entire end-to-end application life cycle functions from Requirements-to-Production. First summer developed server scripts to return information to database (SQL) and worked on GUI using PHP, HTML, JavaScript and CSS. Second summer worked on enhancements to the system GUI and UX."];
    var pathToWebpages = ['./Pages/projects/iNationGaming.html','Pages/projects/ATS.html','Pages/main/work.html'];
    var results=[];
    for (var i = 0; i < imagePath.length; i++) {
        results.push([imagePath[i], titles[i], bodys[i], pathToWebpages[i]]);
    };
    return results;
    
}
//creates html for the different columns
function ColContainer(imagePath, title, body, pathToWebpage)
{
    var templateString = "<div class='col-lg-4'>";
    var pic=  "<img class='img-circle' src='"+ imagePath +"' height='140' width='140' alt='Generic placeholder image'>";
    var header = "<h2>"+ title +"</h2>";
    var body = "<p>"+body+"</p>";
    var button = "<p><a class='btn btn-default' onclick='showHTML(\""+ pathToWebpage +"\")' href='#' role='button'>View details &raquo;</a></p>";
    //append data to template
    templateString += pic;
    templateString += header;
    templateString += body;
    templateString += button;
    templateString += "</div>";
    return templateString;
}
//injects html to container
function populateDetails()
{
    var MainData=PrePopulatedData();
    var $row=$("#template");
    for (var i = MainData.length - 1; i >= 0; i--) {
        $row.append(ColContainer(MainData[i][0],MainData[i][1],MainData[i][2],MainData[i][3]));
    };
    
}

$( document ).ready(function() {
	populateDetails();
});