# HTMLFilter
To filter a specific format of file (a mixture of HTML and other string) to a more readable format. 

<h2 id="keyquestion">Contents</h2>
<ul>
  <li><a href="#input">Input</a></li>
  <li><a href="#output">Output</a></li>
  <li><a href="#preparation">Preparation</a></li>
  <li><a href="#hint">Hints</a></li>
</ul>

<h2 id="input">Input</h2>
<p>A txt file with template like:  URL + HTML SCRIPT
  <img src="https://mb.api.cloud.nifty.com/2013-09-01/applications/JH0HWGCunFwimk6Q/publicFiles/textco.JPG"/>
</p>
<h2  id="output">Output</h2>
<p>Output is a text document. If you open it with excel, it will look like as follows:
  <img src="https://mb.api.cloud.nifty.com/2013-09-01/applications/JH0HWGCunFwimk6Q/publicFiles/output.JPG"/>
</p>
<h2 id="preparation">Preparation</h2>
<p>
1. Change the value of "identifier" that help filter out your url.
<img src="https://mb.api.cloud.nifty.com/2013-09-01/applications/JH0HWGCunFwimk6Q/publicFiles/code.JPG"/><br/>
2. Make sure that the charset of your file is <b>UTF-8</b>.
</p>
<h2 id="hint">Hint</h2>
<ul>
  <li>If you just want to filter a html file, function pickUpTags() and matchUpWithLeft() may also help you.</li>
  <li>This code will remain the comment symbol. If you want to filter this away too, you only need to make a little trick.
  To know how to do that, read the comment in the code.</li>
</ul>
