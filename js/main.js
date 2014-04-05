//alert("a");

function $(divName){
	return document.getElementById(divName);
}

function changeTab(thisTab,tabNum){
//	alert("b");
	if(thisTab.className=="active")return;
//	alert("c");
	var tabList=$("tTitle").getElementsByTagName("li");
	for(i=0;i<tabList.length;i++){
		if(i==tabNum){
			thisTab.className="active";
			$("textArea_"+i).style.display="block";
		}else{
			tabList[i].className="normal";
			$("textArea_"+i).style.display="none";
		}
	}
}