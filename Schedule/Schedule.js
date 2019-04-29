
let Schedule_data = {
}
onload = function () {
}

function Schedule_init (data) {
  let el = document.getElementById('Moke_Schedule')
  el.innerHTML = ('<div class="Moke_Schedule_Date">\n' +
    '        <div class="Moke_Schedule_Top">\n' +
    '            <input type="date" value="2019-04-20" class="Moke_Schedule_SetDateInput">\n' +
    '            <div class="Moke_Schedule_SetDatePage">\n' +
    '                <img class="Moke_Schedule_SetDatePage_last" src="./Schedule/icon/Last.png" alt="上一页">\n' +
    '                <img class="Moke_Schedule_SetDatePage_next" src="./Schedule/icon/Next.png" alt="下一页">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <ul class="Moke_Schedule_Body">\n' +
    '            <li><span>日</span><span class="Moke_Schedule_Body_0">14</span></li>\n' +
    '            <li><span>一</span><span class="Moke_Schedule_Body_1">15</span></li>\n' +
    '            <li><span>二</span><span class="Moke_Schedule_Body_2">16</span></li>\n' +
    '            <li><span>三</span><span class="Moke_Schedule_Body_3" >17</span></li>\n' +
    '            <li><span>四</span><span class="Moke_Schedule_Body_4">18</span></li>\n' +
    '            <li><span>五</span><span class="Moke_Schedule_Body_5">19</span></li>\n' +
    '            <li><span>六</span><span class="Moke_Schedule_Body_6">20</span></li>\n' +

    '        </ul>\n' +
    '    </div>\n' +
    '    <ul class="Moke_Schedule_Events">\n' +
    '        <li>\n' +
    '            <span>全天</span>\n' +
    '            <p>对北京市科技管理局...对北京市科技管理局对北京市科技管理局对北京市科技管理局对北京市科技管理局对北京市科技管理局对北京市科技管理局对北京市科技管理局对北京市科技管理局对北京市科技管理局</p>\n' +
    '        </li>\n' +
    '    </ul>')

  Schedule_data = data
  let date = new Date()
  date = new Schedule_con(date);//将今日时间传入初始化
  //
  let Moke_Schedule_SetDateInput = document.getElementsByClassName('Moke_Schedule_SetDateInput')[0]
  Moke_Schedule_SetDateInput.setAttribute('value', date.DateStr)
  Schedule_set(date)
//事件绑定
  {
    {
      document.getElementsByClassName('Moke_Schedule_SetDateInput')[0].addEventListener('change', function () {
        let newDate = new Date(this.value)
        console.log("------"+newDate);
        date.SetDate(newDate)
        Schedule_set(date)
      })
    }
    {
      for(let i=0;i<7;i++){
        document.getElementsByClassName('Moke_Schedule_Body_'+i)[0].addEventListener('click', function () {
          let newDate = new Date(this.title)
          date.SetDate(newDate)
          Schedule_set(date)
        })
      }
    }
    {
      document.getElementsByClassName('Moke_Schedule_SetDatePage_last')[0].addEventListener('click', function () {
        let domDate=document.getElementsByClassName("Moke_Schedule_Selected")[0].title;
        newDate = new Date(domDate)
        newDate.setDate(newDate.getDate()-7)
        date.SetDate(newDate)
        Schedule_set(date)
      })
      document.getElementsByClassName('Moke_Schedule_SetDatePage_next')[0].addEventListener('click', function () {
        let domDate=document.getElementsByClassName("Moke_Schedule_Selected")[0].title;
        newDate = new Date(domDate)
        newDate.setDate(newDate.getDate()+7)
        date.SetDate(newDate)
        Schedule_set(date)
      })
    }

  }
}

function Schedule_con (Date) {
  this.Year = 2019
  this.Month = 4
  this.Day = 19
  this.leap = false
  this.week = 5
  this.DateStr="2019-04-19"
  this.Date = Date
  this.SetDate = function (Date) {
    this.Year = Date.getFullYear()
    this.Month = Date.getMonth() + 1
    this.Day = Date.getDate()
    this.week = Date.getDay()
    if ((this.Year % 4 === 0 && this.Year % 100 !== 0) || this.Year % 400 === 0) {
      this.leap = true
    }
    this.DateStr = this.Year + '-' + (this.Month >= 10 ? this.Month : '0' + this.Month) + '-' + (this.Day >= 10 ? this.Day : '0' + this.Day);
    this.Date=Date;
    document.getElementsByClassName("Moke_Schedule_SetDateInput")[0].value=this.DateStr;
  }
  this.SetDate(Date)
}

function Schedule_set (date) {

  //当日日程渲染
    let html = ''
    if (typeof Schedule_data[date.Year] !== 'undefined' && typeof Schedule_data[date.Year][date.Month] !== 'undefined' && typeof Schedule_data[date.Year][date.Month][date.Day] !== 'undefined') {  //日程渲染
      let list = Schedule_data[date.Year][date.Month][date.Day]

      for (let i in list) {
        html += '<li><span>' + list['' + i]['time']  + '</span><p>' + (list['' + i]['type'] == null ? '' : '【' + list['' + i]['type'] + '】') + list['' + i]['content'] + '</p></li>'
      }

    }
    document.getElementsByClassName('Moke_Schedule_Events')[0].innerHTML = html


  //日历渲染
  let week = date.week;//7-1   6
  for (let i = 0; i < 7; i++) {
    let t_date = new Date(date.Date);
    t_date.setDate(date.Day - week) //21-6
    week -= 1;       //5
    let ele=document.getElementsByClassName('Moke_Schedule_Body_' + (i))[0];
    ele.classList.remove("Moke_Schedule_Important");
    ele.classList.remove("Moke_Schedule_Primary");
    ele.classList.remove("Moke_Schedule_Selected");
    ele.innerHTML = t_date.getDate();
    ele.title=t_date;

    if (date.Day === t_date.getDate()) {   //给当前选择日期添加样式
      ele.classList.add('Moke_Schedule_Selected')
    } else {
      if (typeof Schedule_data[t_date.getFullYear()] !== 'undefined' && typeof Schedule_data[t_date.getFullYear()][t_date.getMonth() + 1] !== 'undefined' && Schedule_data[t_date.getFullYear()][t_date.getMonth() + 1][t_date.getDate()] !== 'undefined') {  //日程渲染

        let list = Schedule_data[t_date.getFullYear()][t_date.getMonth() + 1][t_date.getDate()]
        let t = true
        for (let j in list) {
          if (list['' + j]['important']) {
            ele.classList.add('Moke_Schedule_Important')
            t = false
            break
          }
        }
        if (t) {
          for (let j in list) {
            ele.classList.add('Moke_Schedule_Primary')
            break
          }

        }

      }
    }
  }

}
