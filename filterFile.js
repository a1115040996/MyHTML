var fs = require("fs")
var path = require("path")

var listRealPath = path.resolve(__dirname);
var newPath = path.resolve(__dirname+'/newFile');
var formatList = ['avi', 'mp4', 'mov', 'rmvb', 'mkv'];
readDirSync(listRealPath)
function readDirSync(filePath) {
	var pa = fs.readdirSync(filePath);
	pa.forEach(function(ele, index) {
		var info = fs.statSync(filePath + "/" + ele)
		if (info.isDirectory()) {
			readDirSync(filePath + "/" + ele);
		} else {
			var splitArea = ele.split('.');
			if(formatList.indexOf(splitArea[splitArea.length-1])!==-1){
				console.log("过滤文件 进行位移 "+ ele);
				fs.renameSync(path.resolve(filePath + "/" + ele), path.resolve(newPath+'/'+ele));
			} else {
				console.log('非 过滤文件 不进行位移');
			}
		}
	})
}