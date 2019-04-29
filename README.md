# schedule
<h2>一个简约的前端日程显示插件</h2>
<p>因为工作需要，在网上找不到插件后自己写了一个，向大家分享一下</p>
<hr>
<p>主要功能</p>
<ul>
  <li>将日程显示在前端页面</li>
  <li>大小百分比自适应</li>
  <li>支持点击日期、选择日期、周日历翻页</li>
  <li>对有重要日程的日期标记橙色显示</li>
</ul>
<p color="red">使用方法：</p>
<ol>
  <li>在head中引入Schedule/Schedule.css文件</li>
  <li>在body结尾引入Schedule/Schedule.js文件</li>
  <li>将需要显示日程的标签 id设置为Moke_Schedule</li>
  <li>在js中调用Schedule_init方法，参数为需要显示的数据</li>
</ol>
<p>数据格式为：</p>
<p>
{<br>
&nbsp;"年":{<br>
&nbsp;&nbsp;"月":{<br>
&nbsp;&nbsp;&nbsp;"日":{<br>
&nbsp;&nbsp;&nbsp;&nbsp;"id":{<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"type":"事项类型，可以为空",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"time":"事项时间，用作全天显示"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"important":"true/false实现是为否重要事项"<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"content":"事项内容"<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;}<br>
&nbsp;}  <br>
}<br>
</p>
<p>纯日程效果图</p>
<img src="https://s2.ax1x.com/2019/04/23/EAUEKH.png" alt="EAUEKH.png" border="0" />
<p>嵌套前端页面效果图</p>
<img src="https://s2.ax1x.com/2019/04/23/EAUwGT.png" alt="EAUwGT.png" border="0" />
