var ogrSayi=92;
var sSayi=35;
function selectNext(selid,c){
	var select = document.getElementById(selid);
	select.selectedIndex=select.selectedIndex+c;
	select.dispatchEvent(new Event('change'));
}

var xmlFile="../altsite/xml/veriler12.xml";

var httpObj = new XMLHttpRequest();
httpObj.open("GET",xmlFile,false);
httpObj.send();
var xmlDocument = httpObj.responseXML;
var xmlEl1 = xmlDocument.getElementsByTagName("row");
var newSelect=document.createElement("select");
newSelect.setAttribute("id","DropDownList1");
for(var i = 0;i<=ogrSayi*sSayi;i+=sSayi)
{
	var opt = document.createElement("option");
	opt.value= xmlEl1[i].childNodes[1].childNodes[0].nodeValue;
	opt.innerHTML = xmlEl1[i].childNodes[2].childNodes[0].nodeValue+"--";
	opt.innerHTML += xmlEl1[i].childNodes[1].childNodes[0].nodeValue+"--";
	opt.innerHTML += xmlEl1[i].childNodes[3].childNodes[0].nodeValue;
	newSelect.appendChild(opt);
}
newSelect.setAttribute("style","background-color:#AF4C50;border:none;color:white;padding:10px 0px;text-align:left;text-decoration:none;display:inline-block;font-size:16px;");
newSelect.setAttribute("onchange","bilgi(xmlEl,ogrSayi,sSayi);");
var bolum = document.getElementById("liste");
bolum.appendChild(newSelect);
