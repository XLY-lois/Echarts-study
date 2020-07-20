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
                inverse: true, //反转y轴
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
                inverse: true, //反转y轴
                data: [702, 350, 610, 793, 664],
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
(function () {
    //假装ajax传来了数据
    var yearData = [{
            year: '2020', // 年份
            data: [ // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2021', // 年份
            data: [ // 两个数组是因为有两条线
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
            show: true, // 显示边框
            borderColor: '#012f4a', // 边框颜色
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
            boundaryGap: false // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false // 去除刻度
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
            name: '新增粉丝',
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            type: 'line',
            // 折线修饰为圆滑
            smooth: true,
        }, {
            name: '新增游客',
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
    $('.line h2').on('click', 'a', function () {
        //点击a之后 根据当前a的索引来确定要渲染的数据是哪一组
        // console.log(yearData[$(this).index()]);
        var obj = yearData[$(this).index()];
        option.series[0].data = obj.data[0];
        option.series[1].data = obj.data[1];
        myChart.setOption(option); //数据更新后要重新渲染
    });
})();

//折线图2

(function () {
    var myChart = echarts.init(document.querySelector('.line2 .charts'))
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎'],
            top: '0%',
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12'
            }
        },
        grid: {
            top: '30',
            left: '10',
            right: '10',
            bottom: '10',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
            axisLabel: {
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.2)'
                }
            }

        }],
        yAxis: [{
            axisTick: {
                show: false
            }, //不显示坐标轴刻度
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            // 修改分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
                name: "转发量",
                type: "line",
                smooth: true,
                areaStyle: {},
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
                //线是圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    normal: {
                        color: "#0184d5",
                        width: 2
                    }
                },
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,

            },
            {
                name: "转发量",
                type: "line",
                smooth: true,
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
            },
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    });
})();

//饼图1
(function () {
    var myChart = echarts.init(document.querySelector('.pie .charts'));
    var option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
          ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 10,
            itemHeight: 10,
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
            // 修改图例组件的文字为 12px
            textStyle: {
              color: "rgba(255,255,255,.5)",
              fontSize: "12"
            }
       },
        series: [{
            name: '年龄分布',
            type: 'pie',
            // 设置饼形图在容器中的位置
            center: ['50%', '50%'],
            //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            label: {
                show: false, //不显示标签文字
            },
            labelLine: {
                show: false
            }, //不显示连接线
            data: [
                { value: 1, name: "0岁以下" },
                { value: 4, name: "20-29岁" },
                { value: 2, name: "30-39岁" },
                { value: 2, name: "40-49岁" },
                { value: 1, name: "50岁以上" }
       ] ,
        }]
    };


    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    });

})();

(function(){
    var myChart = echarts.init(document.querySelector('.pie2 .charts'));
    var option = {
        roseType: "radius",//半径模式？
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            left: 'center',
            top: 'bottom',
            data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
        },
        series: [
            {
                name: "面积模式",
                type: "pie",
                radius: [10, 60],
                center: ["50%", "50%"],
                roseType: "radius",
                // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
                label: {
                    fontSize: 10
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    

    myChart.setOption(option);
    window.addEventListener('resize', function () {
        myChart.resize();
    });

})();