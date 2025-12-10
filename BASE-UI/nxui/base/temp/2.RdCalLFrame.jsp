<%@ page language="java" errorPage="/error.jsp" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/common/taglibs.jsp"%>
<%@ page import="java.util.Date" %>
<%@ page import="com.solutionlink.itscope.common.model.PmUser" %>
<%
	PmUser userInfo = (PmUser)session.getAttribute("userInfoSS");
	String userId = userInfo.getUserId();
%>

<head>
	<meta name="decorator" content="popup"></meta>
	<title><fmt:message key="ReportDesigner"/></title>
	<script type="text/javascript">
	
		function initForm() {
			window.resizeTo(1000,820);
			func_move_popup();
			
			funcRpt();
		}
		
		function funcRpt(){
			var url = "${rdUrl}";
			var rparam="/rdata [";
			rparam+=$("#txta").text().trim().replace(/(?:\r\n|\r|\n)/g,'/ENTER/');
			rparam+="] /rnl [/ENTER/]";
			$("#reportData").val(rparam);
			$("#rptFrm").attr("action", url).submit();
		}
		
    </script>
</head>
<body leftmargin=0 topmargin=0 scroll=no >
	<form name="rptFrm" id="rptFrm" method="post">
		<input type="hidden" name="mrdName" value="${rdFile }">
		<input type="hidden" name="reportData" id="reportData">
	</form>
	<div style="display:none;">
	<c:set var="dm" value="//DD//" />
	<c:set var="eor" value="//EOR//" />
	<c:choose>
		<c:when test="${param.formKind eq '31' }">
			<textarea id="txta" style="width:500px;height: 500px;"><c:out value="${csrInfo.csrMngNo}${dm }${csrInfo.csrName}${dm }${csrInfo.csrReqDeptName}${dm }${csrInfo.occurDt}${dm }${csrInfo.csrReqUserName}${dm }${csrInfo.elecDocNumber}${dm }${csrInfo.actualChrgName}${dm }${csrInfo.actaulDeptName}${dm }${csrInfo.chngReason}${dm }${csrInfo.chngDesc}${dm }${csrInfo.csrReqDeptName}${dm }${csrInfo.cmplDt}${dm }${csrInfo.csrReqUserName}${dm }${csrInfo.reviewUserName}${dm }${csrInfo.deptMgrNm}${dm }${csrInfo.chngMeasure}${dm }${csrInfo.chngEtc}${dm }"/>
<c:out value="${apndFile.fileName }${dm }"/>
${eor }
<c:forEach items="${refPartInfoList }" var="refPartInfo" varStatus="status">
<c:set var="agency" value=""/>
<c:if test="${refPartInfo.agencyUserNm ne null && refPartInfo.agencyUserNm ne '' }">
	<c:set var="agency" value="//NL//[(代)${refPartInfo.agencyUserNm }]"/>
</c:if>
<c:out value="${refPartInfo.refPartName }${dm }${refPartInfo.refPartChrgDeptName }${dm }${refPartInfo.refPartChrgName }${agency}${dm }${refPartInfo.apprDt }${dm }${refPartInfo.apprDesc }${dm }"/>
</c:forEach>
${eor }</textarea>
		</c:when>
		<c:when test="${param.formKind eq '37' || param.formKind eq '38' || param.formKind eq '39' }">
			<textarea id="txta" style="width:500px;height: 500px;"><c:out value="${csrInfo.itDeptName }${dm }${csrInfo.pmName }${dm }${csrInfo.execReqDt }${dm }${csrInfo.prjName }${dm }${csrInfo.csrReqDeptName }${dm }${csrInfo.csrReqUserName }${dm }${csrInfo.reqDt }${dm }${csrInfo.csrTypeName }${dm }${csrInfo.busiNo }${dm }${csrInfo.csrGradeName }${dm }${csrInfo.csrPurpose }${dm }${csrInfo.csrDesc }${dm }${csrInfo.execCsrName }${dm }${csrInfo.execCsrDesc }${dm }${csrInfo.execChngReasonNm }${dm }${csrInfo.execCmplHopeDate }${dm }${csrInfo.deptMgrNm }${dm }${csrInfo.deptMgrApprDt }${dm }"/>
<c:forEach items="${refPartInfoList }" var="refPartInfo" varStatus="status">
<c:set var="agency" value=""/>
<c:if test="${refPartInfo.agencyUserNm ne null && refPartInfo.agencyUserNm ne '' }">
	<c:set var="agency" value="//NL//[(代)${refPartInfo.agencyUserNm }]"/>
</c:if>
<c:out value="${refPartInfo.refPartName }${dm }${refPartInfo.refPartChrgDeptName }${dm }${refPartInfo.refPartChrgName }${agency}${dm }${refPartInfo.apprDt }${dm }${refPartInfo.apprDesc }${dm }"/>
</c:forEach>
${eor }</textarea>
		</c:when>
		<c:when test="${param.formKind eq '5114' || param.formKind eq '5117' || param.formKind eq '5122' }">
			<textarea id="txta" style="width:500px;height: 500px;"><c:out value="${reqInfo.formId }${dm }${reqInfo.reqUserName }${dm }${reqInfo.reqDt }${dm }${reqInfo.formName }${dm }${reqInfo.formDesc }${dm }${reqInfo.reqQuery }${dm }${reqInfo.execResult }${dm }"/>
<c:forEach items="${apprList }" var="appr" varStatus="status">
<c:out value="${appr.signDuty }${dm }${appr.signUserName }${dm }"/>
</c:forEach>
${eor }</textarea>
		</c:when>
		<c:when test="${param.formKind eq 'PRJCON' }">
			<textarea id="txta" style="width:500px;height: 500px;"><c:out value="${confirm.confirmNm }${dm }${reqInfo.reqUserName }${dm }"/>
<c:forEach items="${confirmUser }" var="cfu" varStatus="status">
<c:set var="agency" value=""/>
<c:if test="${cfu.isTransfer ne null && cfu.isTransfer eq '1' }">
	<c:set var="agency" value="//NL//[(代)${cfu.transferNm }]"/>
</c:if>
<c:out value="${cfu.apprDivNm }${dm }${cfu.deptNm }${dm }${cfu.positionNm }${dm }${cfu.userNm }${agency}${dm }${cfu.confirmStatNm }${dm }${cfu.confirmDt }${dm }"/>
</c:forEach>
${eor }</textarea>
		</c:when>
		<c:when test="${param.formKind eq 'MIGR' }">
			<textarea id="txta" style="width:500px;height: 500px;"><c:out value="${migrInfo.rqsDeptNm }${dm }${migrInfo.rqspNm }${dm }${migrInfo.prjName }${dm }${migrInfo.csrReqDeptName }${dm }${migrInfo.csrReqUserName }${dm }${migrInfo.reqDt }${dm }${migrInfo.csrGrade }${dm }${migrInfo.csrPurpose }${dm }${migrInfo.csrDesc }${dm }${migrInfo.chngOvrv }${dm }${migrInfo.chngObj }${dm }${migrInfo.migrDt }${dm }${migrInfo.migrRiskElm }${dm }${migrInfo.fltRcvgPln }${dm }${migrInfo.mnitPln }${dm }${migrInfo.afSche }${dm }${migrInfo.rqsTmlNm }${dm }${migrInfo.rqsTmlAprvDt }${dm }"/>
<c:forEach items="${refList }" var="ref" varStatus="status">
<c:set var="agency" value=""/>
<c:if test="${ref.agntNm ne null && ref.agntNm ne '' }">
	<c:set var="agency" value="//NL//[(代)${ref.agntNm }]"/>
</c:if>
<c:set var="tmlAgency" value=""/>
<c:if test="${ref.tmlAgntNm ne null && ref.tmlAgntNm ne '' }">
	<c:set var="tmlAgency" value="//NL//[(代)${ref.tmlAgntNm }]"/>
</c:if>
<c:out value="${ref.deptNm }${dm }${ref.userNm }${agency}${dm }${ref.aprvScdNm }${dm }${ref.tmlNm }${tmlAgency}${dm }${ref.tmlAprvScdNm }${dm }"/>
</c:forEach>
${eor }</textarea>
		</c:when>
	</c:choose>
	</div>


</body>
