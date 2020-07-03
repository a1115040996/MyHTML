var fs = require("fs")
var path = require("path")

var listRealPath = path.resolve(__dirname);
var newPath = path.resolve(__dirname+'/newFile');
var formatList = ['avi', 'mp4', 'mov', 'rmvb', 'mkv'];
readDirSync(listRealPath)
function readDirSync(filePath) {
	var pa = fs.readdirSync(filePath);
	console.log(pa);
	pa.forEach(function(ele, index) {
		var info = fs.statSync(filePath + "/" + ele)
		if (info.isDirectory()) {
			// 如果是空文件夹 则执行删除操作
			if(isEmptyDir(filePath + "/" + ele)){
				console.log('delete foder=> ' + ele);
				fs.rmdirSync(filePath + "/" + ele);
			}
		} else {
			console.log('不是空文件夹不执行删除操作===>');
		}
	})
}


function isEmptyDir(fPath){
	var pa = fs.readdirSync(fPath);
	if(pa.length === 0){
		return true;
	} else {
		return false;
	}
	
}
