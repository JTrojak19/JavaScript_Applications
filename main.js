//Listen for form submit
document.addEventListener("DOMContentLoaded", function(event)
{
  //console.log("It works");
  document.getElementById("MyForm").addEventListener("submit", function(event)
{
  var siteName = document.getElementById('site-Name').value;
  //console.log(siteName);
  var siteUrl = document.getElementById('site-URL').value;
  //console.log(siteUrl);
  var boookmark = {
    name: siteName,
    url: siteUrl
  };
  //console.log(boookmark);
  /*
  //Local storage test
  localStorage.setItem('test', 'Hello World');
  var storage = localStorage.getItem('test');
  console.log(storage);
  localStorage.removeItem('test');
  */
  //Test if boookmarks is null
  if (localStorage.getItem('boookmarks') === null)
  {
    //Init array
    var boookmarks = [];
    //Add to array
    boookmarks.push(boookmark);
    //Set to localStorage
    localStorage.setItem('boookmarks', JSON.stringify(boookmarks));
  }
  else
  {
    //Get boookmarks from localStorage
    var boookmarks = JSON.parse(localStorage.getItem('boookmarks'));
    // add bookmark to array
    boookmarks.push(bookmark);
    //reset back to localStorage
    localStorage.setItem('boookmarks', JSON.stringify(boookmarks));
  }
  //Prevent form from submitting
  event.preventDefault();
});
// Delete bookmark
function deleteBookmark(url)
{
  //Get bookmarks from localStorage
  var boookmarks = JSON.parse(localStorage.getItem('boookmarks'));
  // Loop thorugh bookmarks
  for (var i = 0; i < bookmarks.length; i++)
  {
    if(bookmarks[i].url == url)
    {
      //Remove from array
      bookmarks.splice(i, 1);
    }
  }
  localStorage.setItem('boookmarks', JSON.stringify(boookmarks));
}
function fetchBookmarks()
{
  var boookmarks = JSON.parse(localStorage.getItem('boookmarks'));
  //console.log(boookmarks);
  //Get output id
  var boookmarksResults = document.getElementById('boookmarksResults');
  //build output
  boookmarksResults.innerHTML = '';
  for(var i = 0; i < boookmarks.length; i++)
  {
    var name = boookmarks[i].name;
    var url = boookmarks[i].url;

    boookmarksResults.innerHTML += '<div><h3>'+name+
                                    "<button> href="+url+"</button>"
                                    "</h3></div>"
  }
}
});
