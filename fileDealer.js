var identifier = "web/view/";

function fileDealer(text){
  var copy = text;
  var i = 0;
  var file = "";
  var flag = true;
  while(flag){

    var url = copy.substring(copy.indexOf(identifier), copy.indexOf("<"));
    if(url.indexOf(" ") != -1){
      url = url.substring(0,url.indexOf(" "));
      copy = deleteSpaceInHead(copy.substring(copy.indexOf(" ")));
    }else{
      copy = deleteSpaceInHead(copy.substring(copy.indexOf("<")));
    }
    if(copy.indexOf(identifier) == -1){
      var remain = deleteSpaceInHead(copy);
      flag = false;
    }else{
      var remain = copy.substring(0, copy.indexOf(identifier));
      copy = copy.substring(copy.indexOf(identifier));
    }
    var queue = pickUpTags(remain);
    var result = "";
    while(queue.length > 0){
      var top = queue.shift();
      switch(top){
        case "<!--":
          //If you dont want to remain comment,
          //then dont add matchUpWithLeft() to result
          result += matchUpWithLeft(queue,"<!--","-->") +" ";
          break;
        case "<":
          matchUpWithLeft(queue,"<",">");
          break;
        case "</":
          matchUpWithLeft(queue,"</",">");
          break;
        default:
          result += top + " ";
          break;
      }
    }
    url = trim(url);
    result = trim(result);
    //document.write(url + "," + result + "<br/>");
    file = file + url +"," + result + "\r\n";
  }
  var blob = new Blob([file], {type: "text/plain;charset=utf-8"});
  saveAs(blob, "result.txt");
}

function matchUpWithLeft(array, left, right){
  var count = 1;
  var inner = left;
  while(count > 0){
    var top = array.shift();
    if(top == undefined){
      return inner;
    }
    if(top == left){
      count ++;
    }else if(top == right){
      count--;
    }
    inner += top;
  }
  return inner;
}

function pickUpTags(str){
  var queue = Array();
  var copy = str;
  var word = "";
  while(copy.length > 0){
    var char = copy.charAt(0);
    switch(char){
      case "<":
        switch(copy.charAt(1)){
          case "!":
            if(word != ""){
              queue.push(word);
            }
            word = "";
            queue.push("<!--");
            copy = copy.substring(4);
            break;
          case "/":
            if(word != ""){
              queue.push(word);
            }
            word = "";
            queue.push("</");
            copy = copy.substring(2);
            break;
          default:
            if(word != ""){
              queue.push(word);
            }
            word = "";
            queue.push("<");
            copy = copy.substring(1);
            break;
        }
        break;
      case "-":
        if(copy.substring(0,3) == "-->"){
          if(word != ""){
            queue.push(word);
          }
          word = "";
          queue.push("-->");
          copy = copy.substring(3);
        }else{
          word = word + char;
          copy = copy.substring(1);
        }
        break;
      case ">":
        if(word != ""){
          queue.push(word);
        }
        word = "";
        queue.push(">");
        copy = copy.substring(1);
        break;
      default:
        word = word + char;
        copy = copy.substring(1);
        break;
    }
  }
  if(word != ""){
    queue.push(word);
  }
  return queue;
}

function deleteSpaceInHead(text){
  while(text.substring(0,1) == " " || text.substring(0,1) == "	"){
    text = text.substring(1);
  }
  return text;
}

function trim(str) {
  str = str.replace(/[\r\n]/g, "");
  str = str.replace(/(^\s+)|(\s+$)/g, "");
  return str;
}
