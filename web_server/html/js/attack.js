var selectedAPs = getE("selectedAPs");
var selectedClients = getE("selectedClients");
var table = document.getElementsByTagName("table")[0];
var ssidList = document.getElementsByTagName("table")[1];
var saved = getE("saved");
var ssidCounter = getE("ssidCounter");
var ssid = getE("ssid");
var num = getE("num");
var enc = getE("enc");
var randomIntrvl = getE("randomIntrvl");
var randomBtn = getE("randomBtn");
var resultInterval;
var data = {};

function getResults() {
  getResponse("attackInfo.json", function(responseText) {
    var res = JSON.parse(responseText);
    var aps = "";
    var clients = "";
    var tr = "<tr><th>攻击</th><th>状态</th><th>开始/停止</th></tr>";
    for (var i = 0; i < res.aps.length; i++) aps += "<li>" + escapeHTML(res.aps[i]) + "</li>";
    for (var i = 0; i < res.clients.length; i++) clients += "<li>" + escapeHTML(res.clients[i]) + "</li>";

    selectedAPs.innerHTML = aps;
    selectedClients.innerHTML = clients;
	
	if(res.randomMode == 1) randomBtn.innerHTML = "关闭随机化";
	else randomBtn.innerHTML = "开启随机化";

    for (var i = 0; i < res.attacks.length; i++) {
      if (res.attacks[i].running) tr += "<tr class='selected'>";
      else tr += "<tr>";

      tr += "<td>" + res.attacks[i].name + "</td>";
      if (res.attacks[i].status == "ready") tr += "<td class='green status' id='status"+i+"'>" + res.attacks[i].status + "</td>";
      else tr += "<td class='red status' id='status"+i+"'>" + res.attacks[i].status + "</td>";
      if (res.attacks[i].running) tr += "<td><button class='select' onclick='startStop(" + i + ")'>停止</button></td>";
      else tr += "<td><button class='select' onclick='startStop(" + i + ")'>开始</button></td>";

      tr += "</tr>";
    }
    table.innerHTML = tr;

	if(typeof res.ssid != 'undefined'){
		data = res.ssid;
		ssidCounter.innerHTML = data.length + "/48";
		
		var tr = "<tr><th>名称</th><th></th><th>Del.</th></tr>";
		for (var i = 0; i < data.length; i++) {
		  tr += "<tr>";
		  tr += "<td>" + escapeHTML(data[i][0]) + "</td>";
		  if(data[i][1] == 1) tr += "<td>&#128274;</td>";
		  else tr += "<td></td>";
		  tr += '<td><button class="button-warn" onclick="deleteSSID(' + i + ')">x</button></td>';
		  tr += "</tr>";
		}
		ssidList.innerHTML = tr;
	}

  }, function() {
    clearInterval(resultInterval);
    showMessage("attackInfo.json 加载失败");
  });
}

function startStop(num) {
  getResponse("attackStart.json?num=" + num, function(responseText) {
	getE("status"+num).innerHTML = "读取中";
    if (responseText == "true") getResults();
    else showMessage("attackStart.json 响应错误");
  });
}

function addSSID() {
	
	var _ssidName = ssid.value;
	if(_ssidName.length > 0){
		if(data.length >= 64) showMessage("SSID 列表已满 :(", 2500);
		else{
			saved.innerHTML = "";
			getResponse("addSSID.json?ssid=" + _ssidName + "&num="+num.value + "&enc=" + enc.checked, getResults);
		}
	}
}

function cloneSelected() {
	getResponse("cloneSelected.json", getResults);
}

function deleteSSID(num) {
  saved.innerHTML = "";
  getResponse("deleteSSID.json?num=" + num, getResults);
}

function randomSSID() {
  saved.innerHTML = "";
  getResponse("randomSSID.json", getResults);
}
function clearSSID() {
  saved.innerHTML = "";
  getResponse("clearSSID.json", getResults);
}
function saveSSID() {
  saved.innerHTML = "已保存";
  getResponse("saveSSID.json", getResults);
}
function resetSSID() {
  saved.innerHTML = "已保存";
  getResponse("resetSSID.json", getResults);
}
function random(){
	getResponse("enableRandom.json?interval="+randomIntrvl.value, getResults);
}

getResults();
resultInterval = setInterval(getResults, 2000);