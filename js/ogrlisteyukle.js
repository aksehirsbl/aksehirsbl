var ogrSayi=104;
var sSayi=35;

function selectNext(selid,c){
	var select = document.getElementById(selid);
	select.selectedIndex=select.selectedIndex+c;
	select.dispatchEvent(new Event('change'));
}

var xmlBilgi="../xml/ogrbilgi.xml";
var htOb = new XMLHttpRequest();
htOb.open("GET",xmlBilgi,false);
htOb.send();
var xmlDoc = htOb.responseXML;
var xmlElem = xmlDoc.getElementsByTagName("row");
var xmlFile="../altsite/xml/veriler12.xml";
var httpObj = new XMLHttpRequest();
httpObj.open("GET",xmlFile,false);
httpObj.send();
var xmlDocument = httpObj.responseXML;
var xmlEl1 = xmlDocument.getElementsByTagName("row");

function sinifSec(sinifD,noG,sifG,girDur)
{
	//sSayi=35;
	if(sinifD==12)
	{xmlFile="../altsite/xml/veriler12.xml";ogrSayi=93;listeYukle1(ogrSayi,sSayi);}
	else if(sinifD==11)
	{xmlFile="../altsite/xml/veriler11.xml";ogrSayi=104;listeYukle1(ogrSayi,sSayi);}
	else if(sinifD==10)
	{xmlFile="../altsite/xml/veriler10.xml";ogrSayi=153;listeYukle1(ogrSayi,sSayi);}
	else if(sinifD==9)
	{xmlFile="../altsite/xml/veriler09.xml";ogrSayi=84;listeYukle1(ogrSayi,sSayi);}
	
	var k1,k2,k3;
	var a1,b1,c1;
	var girkor=false;
	for(var i=0;i<=500;i++)
	{
		try{
			a1=xmlElem[i].childNodes[2].childNodes[0].nodeValue.split('-')[0];
			b1=xmlElem[i].childNodes[1].childNodes[0].nodeValue;
			c1=xmlElem[i].childNodes[4].childNodes[0].nodeValue;
			k1=(sinifD==a1);
			k2=(noG==b1);
			k3=(sifG==c1);
			if(k1&&k2&&k3)
			{
				alert("Bilgiler Doğrulandı");
				//alert(a1+"-"+b1+"-"+c1);
				//alert(k1+"-"+k2+"-"+k3);
				//alert(sinifD+"-"+noG+"-"+sifG);
				girkor=true;
				break;
			}
		}
		catch(e){
			console.log("Hata",e);
			break;
		}
	}
	if(girkor==false)
	{
		alert("Bilgiler Hatalı");
		//alert(a1+"-"+b1+"-"+c1);
		//alert(k1+"-"+k2+"-"+k3);
		//alert(sinifD+"-"+noG+"-"+sifG);
		girDur=0;
	}
	else if(girkor==true)
	{
		girDur=1;
		httpObj.open("GET",xmlFile,false);
		httpObj.send();
		xmlDocument = httpObj.responseXML;
		xmlEl1 = xmlDocument.getElementsByTagName("row");
		bilgi(xmlEl1,500,35);
	}
}

var newSelect=document.createElement("select");
newSelect.setAttribute("id","DropDownList1");
//var denson="";
try{
for(var i = 0;i<=500*sSayi;i+=sSayi)
{
	var opt = document.createElement("option");
	opt.value= xmlEl1[i].childNodes[1].childNodes[0].nodeValue;
	opt.innerHTML = xmlEl1[i].childNodes[2].childNodes[0].nodeValue+"--";
	opt.innerHTML += xmlEl1[i].childNodes[1].childNodes[0].nodeValue+"--";
	opt.innerHTML += xmlEl1[i].childNodes[3].childNodes[0].nodeValue;
	//denson+=opt.innerHTML;
	newSelect.appendChild(opt);
}
}
catch(e){
	console.log("Hata",e);
}
//alert(denson);
newSelect.setAttribute("style","background-color:#AF4C50;border:none;color:white;padding:10px 0px;text-align:left;text-decoration:none;display:inline-block;font-size:16px;");
newSelect.setAttribute("onchange","bilgi(xmlEl,500,sSayi);");
var bolum = document.getElementById("liste");
////fuat////bolum.appendChild(newSelect);

function listeYukle1(ogrSayi,sSayi)
{
	var httpObj = new XMLHttpRequest();
	httpObj.open("GET",xmlFile,false);
	httpObj.send();
	var xmlDocument = httpObj.responseXML;
	var xmlEl1 = xmlDocument.getElementsByTagName("row");
	//var newSelect=document.createElement("select");
	//newSelect.setAttribute("id","DropDownList1");
	////fuat////document.getElementById("DropDownList1").innerHTML = "";
	for(var i = 0;i<=ogrSayi*sSayi;i+=sSayi)
	{
		try{
			var opt = document.createElement("option");
			//alert(xmlEl1[i]);
			opt.value= xmlEl1[i].childNodes[1].childNodes[0].nodeValue;
			opt.innerHTML = xmlEl1[i].childNodes[2].childNodes[0].nodeValue+"--";
			opt.innerHTML += xmlEl1[i].childNodes[1].childNodes[0].nodeValue+"--";
			opt.innerHTML += xmlEl1[i].childNodes[3].childNodes[0].nodeValue;
			newSelect.appendChild(opt);
			//break;
		}
		catch(e){
			console.log("Hata",e);
			break;
		}
	}
	newSelect.setAttribute("style","background-color:#AF4C50;border:none;color:white;padding:10px 0px;text-align:left;text-decoration:none;display:inline-block;font-size:16px;");
	newSelect.setAttribute("onchange","bilgi(xmlEl,500,sSayi);");
	var bolum = document.getElementById("liste");
	////fuat////bolum.appendChild(newSelect);
}
