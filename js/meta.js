//version 2
/*
var listOfTabObjects = [];
var activeTab = new Object();

    activeTab.metatagList = [];
var metaLength = document.getElementsByTagName("META").length;
//var metatag = new Object();
var metatag = []; 
var nameattribute, contentattribute;


  for (var i = metaLength.length - 1; i >= 0; i--) {
      contentattribute = document.getElementsByTagName("META")[i].getAttribute("content");
      metatag[i][0]= contentattribute;
      nameattribute = document.getElementsByTagName("META")[i].getAttribute("name");
      metatag[i][1] = nameattribute;
      activeTab.metatagList.push(metatag);
  };

  listOfTabObjects.push(activeTab);
  chrome.extension.sendRequest(metaLength);*/

//version 3


var metaLength = document.getElementsByTagName("META").length;
var metaList = [];

  for (var i = 0; i <= metaLength -1 ; i++) {
      var contentattribute = document.getElementsByTagName("META")[i].getAttribute("content");
      var nameattribute = document.getElementsByTagName("META")[i].getAttribute("name");
      var nameContent = [];
      nameContent.push(nameattribute);
      nameContent.push(contentattribute);
      metaList.push(nameContent);
  };



  chrome.extension.sendRequest(metaList);



//version 1
/*var list = [];
var meta = document.getElementsByTagName("META").length;
var attribute;
for (var i = meta - 1; i >= 0; i--) {
  var contentAttr = document.getElementsByTagName("META")[i].getAttribute("content");
  var nameAttr = document.getElementsByTagName("META")[i].getAttribute("NAME");
  if(nameAttr == 'Description' || nameAttr == 'description' || nameAttr == 'Keywords' || nameAttr == 'keywords' || nameAttr == 'author'){
    list.push(contentAttr);
  }
  
};*/

//chrome.extension.sendRequest(list);