//XJS=lib_HighChart_mirae.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        this.miraefnGetPie2DChart;		// 미래에셋용 스타일 적용된 pie2Dchart custom
        this.miraefnGetHalfDonutChart;	// 미래에셋용 스타일 적용된 half donut custom


        // pie 2D custom chart
        /* oParam = {
         *	  colors			: (Array) 색상 array
         * 	, title				: (String) 차트 title
         *	, subtitle			: (String) 차트 subtitle
         *  , objDs				: {Dataset} 차트 표기할 dataset
         *  , nameCol	 		: {String} dataset 컬럼 중 명칭 표기 컬럼명
         *  , valueCol		 	: {String} dataset 컬럼 중 data 표기 컬럼명
         * }
         */
        this.miraefnGetPie2DChart = function(oParam)
        {
        	oParam = oParam||{};

        	var chartScript = '';
        	chartScript += "Highcharts.chart('divChart', {";
        	chartScript += "\n    colors: [";
        		// color set
        		if( !Ex.isEmpty(oParam.colors) ) {
        			for(var i = 0; i < oParam.colors.length; i++) {
        				chartScript += "'" + oParam.colors[i] + "'";
        				if( i < oParam.colors.length-1 )
        					chartScript += ',';
        			}
        		}
        		else {
        			chartScript += "'#08d3db', '#1d6ce9', '#00fcd5', '#2543ef', '#1595e3'";
        		}
        		chartScript += "],";
        	chartScript += "\n    chart: {";
        	chartScript += "\n        type: 'pie'";
        	chartScript += "\n    },";
        	// chart title
        	chartScript += "\n    title: {";
        	chartScript += "\n        text: '" + (oParam.title||'') + "',";
        	chartScript += "\n        align: 'left'";
        	chartScript += "\n    },";
        	// chart subtitle
        	if( !Ex.isEmpty(oParam.subtitle) )
        	{
        		chartScript += "\n    subtitle: {";
        		chartScript += "\n        text: '" + oParam.subtitle + "',";
        		chartScript += "\n        align: 'left'";
        		chartScript += "\n    },";
        	}
        	chartScript += "\n    tooltip: {";
        	chartScript += "\n        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'";
        	chartScript += "\n    },";
        	chartScript += "\n    accessibility: {";
        	chartScript += "\n        point: {";
        	chartScript += "\n            valueSuffix: '%'";
        	chartScript += "\n        }";
        	chartScript += "\n    },";
        	chartScript += "\n    plotOptions: {";
        	chartScript += "\n        pie: {";
        	chartScript += "\n            allowPointSelect: true,";
        	chartScript += "\n            borderWidth: 2,";
        	chartScript += "\n            cursor: 'pointer',";
        	chartScript += "\n            dataLabels: {";
        	chartScript += "\n                enabled: true,";
        	chartScript += "\n                format: '<b>{point.name}</b><br>{point.percentage}%',";
        	chartScript += "\n                distance: 20";
        	chartScript += "\n            }";
        	chartScript += "\n        }";
        	chartScript += "\n    },";
        	chartScript += "\n    series: [{";
        	chartScript += "\n        enableMouseTracking: false,";		// Disable mouse tracking on load, enable after custom animation
        	chartScript += "\n        animation: {";
        	chartScript += "\n            duration: 2000";
        	chartScript += "\n        },";
        	chartScript += "\n        shadow: true,";
        	chartScript += "\n        colorByPoint: true,";
        	chartScript += "\n		  data: [";
        		// retrieve data from dataset
        		for(var i = 0; i < oParam.objDs.rowcount; i++)
        		{
        			chartScript += "\n{";
        			chartScript += "\n	name : '" + oParam.objDs.getColumn(i, oParam.nameCol) + "',";
        			chartScript += "\n	y : " + oParam.objDs.getColumn(i, oParam.valueCol);
        			chartScript += "}";

        			if( i < oParam.objDs.rowcount -1 )
        				chartScript += ",";
        		}
        	chartScript += "\n		  ]";
        	chartScript += "\n    }]";
        	chartScript += "\n});";

        	return chartScript;
        }

        // half donut custom chart
        /* oParam = {
         *	  colors			: (Array) 색상 array
         * 	, title				: (String) 차트 title
         *	, subtitle			: (String) 차트 subtitle
         *  , objDs				: {Dataset} 차트 표기할 dataset
         *  , nameCol	 		: {String} dataset 컬럼 중 명칭 표기 컬럼명
         *  , valueCol		 	: {String} dataset 컬럼 중 data 표기 컬럼명
         * }
         */
        this.miraefnGetHalfDonutChart = function(oParam)
        {
        	oParam = oParam||{};

        	var chartScript = '';
        	chartScript += "\nHighcharts.chart('divChart', {";
        	chartScript += "\n    chart: {";
        	chartScript += "\n        plotBackgroundColor: null,";
        	chartScript += "\n        plotBorderWidth: 0,";
        	chartScript += "\n        plotShadow: false";
        	chartScript += "\n    },";
        	// chart title
        	chartScript += "\n    title: {";
        	chartScript += "\n        text: '" + (oParam.title||'') + "',";
        	chartScript += "\n        align: 'center',";
        	chartScript += "\n        verticalAlign: 'middle',";
        	chartScript += "\n        y: 60,";
        	chartScript += "\n        style: {";
        	chartScript += "\n            fontSize: '1.1em'";
        	chartScript += "\n        }";
        	chartScript += "\n    },";
        	chartScript += "\n    tooltip: {";
        	chartScript += "\n        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'";
        	chartScript += "\n    },";
        	chartScript += "\n    accessibility: {";
        	chartScript += "\n        point: {";
        	chartScript += "\n            valueSuffix: '%'";
        	chartScript += "\n        }";
        	chartScript += "\n    },";
        	chartScript += "\n    plotOptions: {";
        	chartScript += "\n        pie: {";
        	chartScript += "\n            dataLabels: {";
        	chartScript += "\n                enabled: true,";
        	chartScript += "\n                distance: -50,";
        	chartScript += "\n                style: {";
        	chartScript += "\n                    fontWeight: 'bold',";
        	chartScript += "\n                    color: 'white'";
        	chartScript += "\n                }";
        	chartScript += "\n            },";
        	chartScript += "\n            startAngle: -90,";
        	chartScript += "\n            endAngle: 90,";
        	chartScript += "\n            center: ['50%', '75%'],";
        	chartScript += "\n            size: '110%'";
        	chartScript += "\n        }";
        	chartScript += "\n    },";
        	chartScript += "\n    series: [{";
        	chartScript += "\n    colors: [";
        		// color set
        		if( !Ex.isEmpty(oParam.colors) ) {
        			for(var i = 0; i < oParam.colors.length; i++) {
        				chartScript += "'" + oParam.colors[i] + "'";
        				if( i < oParam.colors.length-1 )
        					chartScript += ',';
        			}
        		}
        		else {
        			chartScript += "'#08d3db', '#1d6ce9', '#00fcd5', '#2543ef', '#1595e3'";
        		}
        		chartScript += "],";
        	chartScript += "\n        shadow: true,";
        	chartScript += "\n        type: 'pie',";
        	chartScript += "\n        name: '',";
        	chartScript += "\n        innerSize: '50%',";
        	chartScript += "\n        data: [";
        		for(var i = 0; i < oParam.objDs.rowcount; i++)
        		{
        			chartScript += "\n['" + (oParam.objDs.getColumn(i, oParam.nameCol)||'') + "', " + (oParam.objDs.getColumn(i, oParam.valueCol)||'') + "]";
        			if( i < oParam.objDs.rowcount - 1 )
        				chartScript += ",";
        		}
        	chartScript += "\n        ]";
        	chartScript += "\n    }]";
        	chartScript += "\n});";

        	return chartScript;
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
