//XJS=lib_Comm.xjs
(function()
{
    return function(path)
    {
        var obj;
    
        // User Script
        this.registerScript(path, function() {
        // include "lib::lib_Comm.xjs";
        // 업무 폴더 comm 관련 공통 라이브러리

        /*****************************************************************
         * 함수명	: initMonthCalendar
         * 설명	: 월력 popupdiv를 생성한다.
         *****************************************************************/
        this.initMonthCalendar = function(objId, gubun, initValue)
        {
        	//PopupDiv.init( strName, vLeft, vTop , vWidth, vHeight [, vRight, vBottom, [vMinWidth, [vMaxWidth, [vMinHeight, [vMaxHeight]]]]] )
        	var objComp = new PopupDiv(objId, 0, 300, 296, 360, null, null, 296, 296, 360, 360);
        	objComp.addEventHandler("onpopup", this.onPopupMonthCalendar);
        	objComp.set_url("comm::comMonthCalendar.xfdl");
        	this.addChild(objId, objComp);

        	if( Ex.isEmpty(initValue) )
        	{
        		objComp.monthValue = Ex.util.getMaskFormatString(Ex.util.strToDate(Ex.util.today()), "yyyyMM");
        	}
        	else
        	{
        		objComp.monthValue = initValue;
        	}
        	trace("objComp.monthValue : " + objComp.monthValue);
        	objComp.show();
        	return objComp;
        }

        /*****************************************************************
         * comm::comMonthCalendar.xfdl 관련
         * 함수명	: onPopupMonthCalendar
         * 설명	: 월력 popupdiv가 열릴 때 이벤트
         *****************************************************************/
        this.openMonthCalendar = function(pdivObj, stndObj, value, gubun)
        {
        	pdivObj.value = value;

        	if( !Ex.isEmpty(gubun) )
        	{
        		if(gubun == "MONTH")
        		{
        			pdivObj.form.divCalendar.form.divYear.set_height(0);
        			pdivObj.form.divCalendar.form.divMonth.set_top(0);
        			pdivObj.set_height(267);
        		}
        	}

        	trace("stndObj.id : " + stndObj.id);
        	var compWidth = stndObj.getOffsetWidth();
        	var popDivLeft = (compWidth - pdivObj.getOffsetWidth()) / 2;
        	//trace("compWidth : " + compWidth + ", popDivLeft : " + popDivLeft);
        	pdivObj.trackPopupByComponent(stndObj , popDivLeft, stndObj.getOffsetHeight());
        }

        /*****************************************************************
         * comm::comMonthCalendar.xfdl 관련
         * 함수명	: onPopupMonthCalendar
         * 설명	: 월력 popupdiv가 열릴 때 이벤트
         *****************************************************************/
        this.onPopupMonthCalendar = function(obj, e)
        {
        	trace("obj.id : " + obj.id + ", obj.monthValue : " + obj.monthValue);
        	if(!Ex.isEmpty(obj.monthValue) )
        	{
        		if(obj.monthValue.length == 6)
        		{

        			obj.form.divCalendar.form.divYear.form.spYear.set_value(obj.monthValue.substr(0, 4));
        		}

        		if(obj.monthValue.length == 2 || obj.monthValue.length == 6)
        		{
        			for(var i=0; i<12; i++)
        			{
        				var mon = nexacro.toNumber(obj.monthValue.substr(4, 2));
        				trace("mon : " + mon + ",i=" + i);
        				if(mon == (i+1))
        				{
        					//obj.form.divMonth.form["btn" + ((i+1) < 10 ? "0" : "") + (i+1)].set_cssclass("btn_WF_Dboard_DayS");
        					obj.form.divCalendar.form.divMonth.form["btn" + ((i+1) < 10 ? "0" : "") + (i+1)].set_background("pink");
        				}
        				else
        				{
        					//obj.form.divMonth.form["btn" + ((i+1) < 10 ? "0" : "") + (i+1)].set_cssclass("btn_WF_Dboard_Day");
        					obj.form.divCalendar.form.divMonth.form["btn" + ((i+1) < 10 ? "0" : "") + (i+1)].set_background("");
        				}
        			}
        		}
        	}
        }
        });
    
        this.loadIncludeScript(path);
        
        obj = null;
    };
}
)();
