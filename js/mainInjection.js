function PrePopulatedData()
{
    var imagePath = ["../../images/Fixed.png","images/128.png", "images/TXDOT-Logo.jpg"];
    var titles = ["iNationGaming", "Anime Tracker Storage", "Texas Department of Transportation"];
    var bodys =["Mission – To become a well established brand/company with a huge fan base where we can host events for them. Not only can the fans interact with one another at events but they can also enjoy video content which includes Youtube and Twitch.","<b>Tired of forgeting what episode you are in?</b><br>AnimeTrackerS.(ATS) is a chrome extension that will let you have a list of the animes you are currently watching. But as you watch new episodes or the next episode, it will be updating what episode you are in and let you know when a new one is up. <br><b>It is now on the chrome app store! Still ongoing further updates!</b>","Worked as an Intern for two summers and during my high school senior year. I worked in various departments and learned Visual Basic to help them develop macros to speed up efficiency. While working in teams to draw up road way plans with the use of microstation."];
    var pathToWebpages = ['./Pages/projects/iNationGaming.html','Pages/projects/ATS.html','Pages/main/work.html'];
    var results=[];
    for (var i = 0; i < imagePath.length; i++) {
        results.push([imagePath[i], titles[i], bodys[i], pathToWebpages[i]]);
    };
    return results;
    
}

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