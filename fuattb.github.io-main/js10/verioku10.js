var xmlFile="../xml/veriler10.xml";

var httpObj = new XMLHttpRequest();
httpObj.open("GET",xmlFile,false);
httpObj.send();
var xmlDocument = httpObj.responseXML;
let xmlEl = xmlDocument.getElementsByTagName("row");

//var deger=xmlEl[34].childNodes[1].childNodes[0].nodeValue;
//var deger=xmlEl[0].childNodes[0].childNodes[0].nodeValue;
//document.getElementById("deneme").innerHTML=deger;

var sOgrNo=0;

/*
var ogrNo=0,adSoyad="",sinif="",sinifsira=0,listesira=0,topP=0.0;girSinav=0;ortP=0.0;makP=0.0;
for(var o=1;o<=100;o++)
{
	for(var i=0;i<=34;i+=35)
	{
		ogrNo=xmlEl[i].childNodes[1].childNodes[0].nodeValue;
		adSoyad=xmlEl[i].childNodes[3].childNodes[0].nodeValue;
		sinif=xmlEl[i].childNodes[2].childNodes[0].nodeValue;
		for(var j=0+o*i;j<=34+o*i;j++)
		{
			
		}
	}
}
*/

//alert(deger);
