/*!build time : 2013-10-24 4:21:54 PM*/
KISSY.add("gallery/uploader/1.5/themes/editorMultipleUploader/index",function(a,b,c){function d(a){var b=this;d.superclass.constructor.call(b,a)}var e=b.all;return a.extend(d,c,{_addHandler:function(a){var b=this,c=a.file,d=c.id,f=e(".J_Del_"+d);f.data("data-file",c),f.on("click",b._delHandler,b)},_startHandler:function(){},_progressHandler:function(){},_successHandler:function(a){var b=this,c=a.file,d=c.id,e=b.get("uploader"),f=e.getPlugin("proBars");if(!f){var g=c.target;if(!g)return!1;g.all(".J_ProgressBar_"+d).hide()}},_errorHandler:function(b){var c=b.msg||b.result.msg,d=b.file;if(!d)return!1;var f=b.file.id;e(".J_ErrorMsg_"+f).html(c),a.log(c)},_delHandler:function(a){var b=this,c=b.get("uploader"),d=c.get("queue"),f=e(a.target).data("data-file"),g=d.getFileIndex(f.id),h=f.status;("start"==h||"progress"==h)&&c.cancel(g),d.remove(g)}},{ATTRS:{name:{value:"editorMultipleUploader"},fileTpl:{value:'<tr id="queue-file-{id}" data-name="{name}"><td class="ks-editor-upload-filename">{name}</td><td class="ks-editor-upload-filesize">{textSize}</td><td class="ks-editor-upload-progress"><div class="status-wrapper"><div class="status waiting-status start-status progress-status success-status"><div class="J_ProgressBar_{id} ks-editor-progressbar"></div><span class="ks-editor-progressbar-title J_ProgressCount_{id}">0%</span></div><div class="status error-status"><p class="J_ErrorMsg_{id}">\u670d\u52a1\u5668\u6545\u969c\uff0c\u8bf7\u7a0d\u5019\u518d\u8bd5\uff01</p></div></div></td><td><a href="#" class="ks-editor-upload-delete J_Del_{id} del-pic">\u5220\u9664</a></td></tr>'},allowExts:{value:"jpg,png,gif,jpeg"},authMsg:{value:{max:"\u6bcf\u6b21\u6700\u591a\u4e0a\u4f20{max}\u4e2a\u56fe\u7247\uff01",maxSize:"\u56fe\u7247\u8d85\u8fc7{maxSize}\uff01",required:"\u81f3\u5c11\u4e0a\u4f20\u4e00\u5f20\u56fe\u7247\uff01",allowExts:"\u4e0d\u652f\u6301{ext}\u683c\u5f0f\uff01",allowRepeat:"\u8be5\u56fe\u7247\u5df2\u7ecf\u5b58\u5728\uff01",widthHeight:"\u56fe\u7247\u5c3a\u5bf8\u4e0d\u7b26\u5408\u8981\u6c42\uff01"}}}}),d},{requires:["node","gallery/gallery/uploader/1.5/theme"]});