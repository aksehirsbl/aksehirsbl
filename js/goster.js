var puanH=[],sinav=[],turN=[],sosN=[],matN=[],fenN=[],topN=[];
var oldcanv,canv;
var graf1s=0;
var netler=[],maknet=0.0,maktop=0.0,makPu=0.0;

function divggostergizle(divid)
{
	var divim=document.getElementById(divid);
	if(divim.style.display==="none")
	{
		divim.style.display="block";
	}
	else
	{
		divim.style.display="none";
	}
	//document.getElementById(dugme).innerHTML=
}

Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

Array.prototype.min = function() {
  return Math.min.apply(null, this);
};

function roundY(x,y)
{
	return Math.round(x/y)*y;
}

function ortPuan(dizi)
{
	var sum = dizi.reduce((a, b) => a + b, 0);
	var avg = (sum / dizi.length) || 0;
	return avg;
}

function bilgi(xml_verioku)
{
	var sOgrNo=0;
	sOgrNo=document.getElementById("DropDownList1").value;
	var ogrNo=0, adSoyad="", sinif="", sinifsira=0, listesira=0;
	var topP=0.0, girSinav=0, ortP=0.0, makP=0.0, sonSinav=0;
	var puan="",tur="",sos="",mat="",fen="",ton="";
	for(var i=0;i<=35*62;i+=35)
	{
		ogrNo=xml_verioku[i].childNodes[1].childNodes[0].nodeValue;
		if(sOgrNo==ogrNo)
		{
			adSoyad=xml_verioku[i].childNodes[3].childNodes[0].nodeValue;
			sinif=xml_verioku[i].childNodes[2].childNodes[0].nodeValue;
			for(var j=i;j<=i+34;j++)
			{
				puan=xml_verioku[j].childNodes[21].childNodes[0].nodeValue;
				puan=puan.replace(",",".");
				tur=xml_verioku[j].childNodes[8].childNodes[0].nodeValue;
				tur=tur.replace(",",".");
				sos=xml_verioku[j].childNodes[11].childNodes[0].nodeValue;
				sos=sos.replace(",",".");
				mat=xml_verioku[j].childNodes[14].childNodes[0].nodeValue;
				mat=mat.replace(",",".");
				fen=xml_verioku[j].childNodes[17].childNodes[0].nodeValue;
				fen=fen.replace(",",".");
				ton=xml_verioku[j].childNodes[20].childNodes[0].nodeValue;
				ton=ton.replace(",",".");
				if(parseFloat(puan)>0)
				{
					sinav.push("S-"+xml_verioku[j].childNodes[4].childNodes[0].nodeValue);
					puanH.push(parseFloat(puan));
					turN.push(parseFloat(tur));
					sosN.push(parseFloat(sos));
					matN.push(parseFloat(mat));
					fenN.push(parseFloat(fen));
					topN.push(parseFloat(ton));
					sonSinav=xml_verioku[j].childNodes[4].childNodes[0].nodeValue;
				}
			}
		}
	}
	girSinav=puanH.length;
	makP=puanH.max();
	ortP=ortPuan(puanH).toFixed(2);
	//alert(ortP);
	netler=netler.concat(turN);
	netler=netler.concat(sosN);
	netler=netler.concat(matN);
	netler=netler.concat(fenN);
	maknet=roundY(netler.max(),5)+5;
	maktop=roundY(topN.max(),10)+10;
	makPu=roundY(puanH.max(),50)+50;
	if(graf1s>0){canvasRC("mc1","mc2","mc3");}
	document.getElementById("bilgi1").innerHTML="";
	var bilgiler="";
	bilgiler+="<table border='1' style='border-collapse:collapse;'>";
	bilgiler+="<tr><td>Girilen Sınav: </td><td>"+girSinav+"</td><td bgcolor='black'>.</td>";
	bilgiler+="<td>Son Girilen Sınav: </td><td>"+sonSinav+"</td></tr>"
	bilgiler+="<tr><td>En Yüksek Alınan Puan: </td><td>"+makP+"</td><td bgcolor='black'>.</td>";
	bilgiler+="<td>Ortalama Puan: </td><td>"+ortP+"</td></tr></table>";
	document.getElementById("bilgi1").innerHTML=bilgiler;
	document.getElementById("dgraf1").innerHTML="";
	document.getElementById("dgraf2").innerHTML="";
	document.getElementById("dgraf3").innerHTML="";
	document.getElementById("dgraf1").innerHTML="<script>"+graf1(sinav,turN,sosN,matN,fenN)+"</script>";
	document.getElementById("dgraf2").innerHTML="<script>"+graf2(sinav,topN)+"</script>";
	document.getElementById("dgraf3").innerHTML="<script>"+graf3(sinav,puanH)+"</script>";
	graf1s++;
	netler=[];
	sinav=[];
	turN=[];
	sosN=[];
	matN=[];
	fenN=[];
	topN=[];
	puanH=[];
}

function canvasRC(cid1,cid2,cid3)
{
	document.getElementById(cid1).innerHTML="";
	document.getElementById(cid2).innerHTML="";
	document.getElementById(cid3).innerHTML="";
	document.getElementById(cid1).innerHTML="<canvas id='myChart1' width='400' height='400'></canvas>";
	document.getElementById(cid2).innerHTML="<canvas id='myChart2' width='400' height='400'></canvas>";
	document.getElementById(cid3).innerHTML="<canvas id='myChart3' width='400' height='400'></canvas>";
}

function graf1(dizi1,diziTu,diziSo,diziMa,diziFe)
{
	const ctx = document.getElementById('myChart1').getContext('2d');
	const myChart1 = new Chart(ctx, {
		type: 'line',
		plugins: [ChartDataLabels],
		data: {
			labels: dizi1,
			datasets: [
				{
					label: 'Türkçe',
					data: diziTu,
					backgroundColor: [
						'rgba(255, 99, 132, 0.7)',
					],
					borderColor: [
						'rgba(255, 99, 132, 1)',
					],
					borderWidth: 4,
					datalabels: {
					align: 'end',
					anchor: 'end',
					offset: 5
					}
				},{
					label: 'Sosyal',
					data: diziSo,
					backgroundColor: [
						'rgba(54, 162, 235, 0.7)',
					],
					borderColor: [
						'rgba(54, 162, 235, 1)',
					],
					borderWidth: 4,
					datalabels: {
					align: 'end',
					anchor: 'end',
					offset: 5
					}
				},{
					label: 'Matematik',
					data: diziMa,
					backgroundColor: [
						'rgba(255, 206, 86, 0.7)',
					],
					borderColor: [
						'rgba(255, 206, 86, 1)',
					],
					borderWidth: 4,
					datalabels: {
					align: 'end',
					anchor: 'end',
					offset: 5
					}
				},{
					label: 'Fen',
					data: diziFe,
					backgroundColor: [
						'rgba(75, 192, 192, 0.7)',
					],
					borderColor: [
						'rgba(75, 192, 192, 1)',
					],
					borderWidth: 4,
					datalabels: {
					align: 'end',
					anchor: 'end',
					offset: 5
					}
				}
			]},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					max: maknet
				},
				x: {
					offset: true
				}
			},
			plugins: {
				datalabels: {
					backgroundColor: function(context) {
					return context.dataset.backgroundColor;
					},
					borderRadius: 4,
					color: 'black',
					font: {
						weight: 'bold'
					},
					//formatter: Math.round,
					padding: 6
				}
			},
			layout:{
				padding: {
					//right: 25,
				}
			}
		}
	});
}

function graf2(dizi1,diziTo)
{
	const ctx2 = document.getElementById('myChart2').getContext('2d');
	const myChart2 = new Chart(ctx2, {
		type: 'line',
		plugins: [ChartDataLabels],
		data: {
			labels: dizi1,
			datasets: [{
				label: 'Toplam Net',
				data: diziTo,
				backgroundColor: [
					'rgba(153, 102, 255, 1)',
				],
				borderColor: [
					'rgba(153, 102, 255, 1)',
				],
				borderWidth: 4,
				datalabels: {
					align: 'end',
					anchor: 'end',
					offset: 5
				}
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					max:maktop
				},
				x:{
					offset:true
				}
			},
			plugins: {
				datalabels: {
					backgroundColor: function(context) {
					return context.dataset.backgroundColor;
					},
					borderRadius: 4,
					color: 'white',
					font: {
						weight: 'bold'
					},
					//formatter: Math.round,
					padding: 6
				}
			},
			layout:{
				padding: {
					//right: 25
				}
			}
		}
	});
}

function graf3(dizi1,puanHe)
{
	const ctx3 = document.getElementById('myChart3').getContext('2d');
	const myChart3 = new Chart(ctx3, {
		type: 'line',
		plugins: [ChartDataLabels],
		data: {
			labels: dizi1,
			datasets: [{
				label: 'Puanlar',
				data: puanHe,
				backgroundColor: [
					'rgba(255, 159, 64, 1)',
				],
				borderColor: [
					'rgba(255, 159, 64, 1)',
				],
				borderWidth: 4,
				datalabels: {
					align: 'end',
					anchor: 'end',
					offset: 5
				},
			}]
		},
		options: {
			scales: {
				y: {
					beginAtZero: true,
					max:makPu
				},
				x:{
					offset:true
				}
			},
			plugins: {
				datalabels: {
					backgroundColor: function(context) {
					return context.dataset.backgroundColor;
					},
					borderRadius: 4,
					color: 'white',
					font: {
						weight: 'bold'
					},
					//formatter: Math.round,
					padding: 6
				}
			},
			layout:{
				padding: {
					//right: 25
				}
			}
		}
	});
}