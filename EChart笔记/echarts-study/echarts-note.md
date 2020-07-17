# echarts 学习时的小案例
---
### 可视化适配方案（用 rem ）
1. 下载安装flexible.js 
`npm i -S amfe-flexible`
2. 引入flexible.js
`<script src="../node_modules/amfe-flexible/index.js"></script>`
3. 在 index.js 中修改屏幕划分的份数，默认是10，本案例修改为24 （因为设计稿是1920px宽 24份 每份80px） 
```
 // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 24
    docEl.style.fontSize = rem + 'px'
  }
```
4. 在插件 cssrem 中修改一 rem 的 像素值，本案例使用的是 80px
5. 重启 vscode 后 在 less 中书写样式时 可以将px自动转换 rem 为单位

### echarts的使用
1. 引入 
`<script src="../node_modules/echarts/dist/echarts.min.js"></script>`
2. 初始化实例对象
```
var maChart = echarts.init(document.querySelector('box'));
//前提是 放入图表的 box 容器必须要有一个宽高 不然放不进
```
3. 指定配置项和数据
```
var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
```
4. 把配置项给实例对象
```
myChart.setOption(option);
```

### 配置项中的各个属性
- title 图表标题
   ```
   title: {
        text: '折线图堆叠'
    },
   ```
- tooltip 提示框组件
   ```
   tooltip: {
        trigger: 'axis'
    },
   ```
   - trigger 触发方式 ： 'axis' 坐标轴
- legend 图例组件
```
legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
```
- toolbox 工具箱组件 比方说 下载成图片等
```
toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
```
- grid 网格配置 可以控制图表大小
```
grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true //显示刻度
    },
```
- xAxis x轴的相关配置
```
xAxis: {
        type: 'category', //坐标轴类型 category是文字 value是数值  可通过修改xy轴的这个属性来 颠倒图形的横竖方向
        boundaryGap: false, //图表与坐标轴的缝隙 false未无缝隙
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
 yAxis: {
        type: 'value'
    },
```

- series系列图表配置 决定显示的图表类型
   - 是一个对象数组 每个对象对应一条线
```
series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
```
   - stack 数据堆叠 即数据是累加的 删掉该属性就不会累加

- color 调色板
`color:['pink','red','skyblue','green'],`
   - 记得是个数组