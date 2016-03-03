/*var allTags = [];
var listOfWords = [];
var node, textnode;*/
chrome.extension.onRequest.addListener( function(listOfTabObjects) {
  console.log(listOfTabObjects);
  
  console.log(listOfTabObjects[1][1]);

  //console.log("tab object in a list", list[0]);
   //console.log("list item in an oject in alist property", list[0].metatagList[0]);

  
  for (var i = listOfTabObjects.length - 1; i >= 0; i--) {
      node = document.createElement("LI");
      textnode = document.createTextNode(listOfTabObjects[i][0] + ": ");
      textnode2 = document.createTextNode(listOfTabObjects[i][1]);
      node.appendChild(textnode);
      node.appendChild(textnode2);
      document.getElementById("status").appendChild(node);

      
  };
});

window.onload = function() {
//version 2

  chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({currentWindow: true, windowId: currentWindow.id},
        function(tabs) {
          console.log(arguments);
          var tabIdList = [];
            for (var i = 0; i < tabs.length; i++) {
             var tabId = tabs[i].id;
             tabIdList.push(tabId);
             
            };
            for (var i = 0; i < tabIdList.length; i++) {
              chrome.tabs.executeScript(tabIdList[i], {file: 'js/meta.js'});
            };
      
      console.log(tabs.length ); // RETURNS A LIST OF OPEN TABS OBJECTS
      document.getElementById("tabs").innerHTML = tabs.length + " tabs open";

      });
  });
};

