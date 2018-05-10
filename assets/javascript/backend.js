//Variables
var searchTerm; //hold serch term
var recordNum; //numbers of records to retrieve;
var yearStart;  //start year
var yearEnd;    //end year

//Building the NYTimes API article search url
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
var APIKey = "&api-key=486289a893354880ad8544c2288e6b09" //Your API key here, this is my own


$("#submit").on("click", function(){
    searchTerm = $("#keyword").val();
    recordNum = $("#numberRec").val();
    yearStart = "&begin_date" + $("#startYear").val();
    yearEnd= "&end_date" + $("#endYear").val();

    queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + yearStart + yearEnd  + APIKey;
    
    //DEBUG CODE
    console.log(queryURL);
    //console.log(recordNum);
    //Call to Ajax
    $.ajax({
        url: queryURL,
        method: "GET"
        
    })
    .then(function(response) {

        //DEBUG CODE
        //console.log(response);
    
        //TODO display number of records to retrieve
        for (i=0; i<recordNum ; i++){

            //DEBUG CODE
            console.log(response.response.docs[i])
        }
    });
});