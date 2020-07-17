//使用立即执行函数可以防止变量的污染 免去命名的烦恼
//柱状图模块
(function () {
    var myChart = echarts.init(document.querySelector('.bar .charts'));
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            top: '10%',
            left: '0',
            right: '0',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            axisTick: {
                alignWithLabel: true
            },
            //修改刻度标签相关样式
            axisLabel: {
                color: 'rgba(255,255,255,.6',
                fontSize: '12px'
            },
            //不显示坐标轴
            axisLine: {
                show: false,
            }

        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: 'rgba(255,255,255,.6',
                fontSize: '12px'
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            //y轴分割线样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 5
            }
        }]
    };
    myChart.setOption(option);
    //图表自适应屏幕
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();


//柱状图2
(function () {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var myChart = echarts.init(document.querySelector('.bar2 .charts'));
    var option = {
        grid: {
            top: '10%',
            left: '5%',
            right: '0',
            bottom: '4%',
            containLabel: true
        },
        xAxis: {
            show: false //不显示x轴
        },
        yAxis: [{
                type: "category",
                inverse:true,//反转y轴
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                show: true,
                inverse:true,//反转y轴
                data:[702, 350, 610, 793, 664],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [{
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                //圆角
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (parmas) {
                        // console.log(parmas);//params里有六个对象 分别对应两个柱子
                        return myColor[parmas.dataIndex]; //将颜色数组运用到柱子中
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                label: {
                    //显示柱子内的文字
                    normal: {
                        show: true,
                        // 图形内显示
                        position: "inside",
                        // 文字的显示格式
                        formatter: "{c}%"
                    }
                },
                // 给series  第一个对象里面的 添加 
                yAxisIndex: 0,
            },
            {
                name: "框",
                type: "bar",
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                // 给series  第一个对象里面的 添加 
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100],

            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

//折线图1
(function(){
    //假装ajax传来了数据
    var yearData = [
        {
          year: '2020',  // 年份
          data: [  // 两个数组是因为有两条线
               [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
               [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
          year: '2021',  // 年份
          data: [  // 两个数组是因为有两条线
               [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
               [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
       ];

    var myChart = echarts.init(document.querySelector('.line .charts '))
    var option = {
        color: ['#00f2f1', '#ed3f35'],
        grid: { 
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
          },
          legend: {
            textStyle: {   
              color: '#4c9bfd' // 图例文字颜色
            },
            right: '10%' // 距离右边10%
          },
          xAxis: {
            type: 'category',
  data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
               show: false // 去除刻度线
             },
             axisLabel: {
               color: '#4c9bfd' // 文本颜色
             },
             axisLine: {
               show: false // 去除轴线
             },
             boundaryGap: false  // 去除轴内间距
          },
          yAxis: {
            type: 'value',
            axisTick: {
              show: false  // 去除刻度
            },
            axisLabel: {
              color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
              lineStyle: {
                color: '#012f4a' // 分割线颜色
              }
            }
          },
          series: [{
            name:'新增粉丝',
            data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],            type: 'line',
            // 折线修饰为圆滑
            smooth: true,
            },{
            name:'新增游客',
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],     
            type: 'line',
            smooth: true,
          }]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    });

    //点击切换
    $('.line h2').on('click','a',function(){
        //点击a之后 根据当前a的索引来确定要渲染的数据是哪一组
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        myChart.setOption(option); //数据更新后要重新渲染
    });
})();