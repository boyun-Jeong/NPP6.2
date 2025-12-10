package com.base.fwk.intercepter;

import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.Statement;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import org.apache.ibatis.executor.resultset.ResultSetHandler;
import org.apache.ibatis.plugin.Interceptor;
import org.apache.ibatis.plugin.Intercepts;
import org.apache.ibatis.plugin.Invocation;
import org.apache.ibatis.plugin.Plugin;
import org.apache.ibatis.plugin.Signature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.nexacro.uiadapter.jakarta.core.data.metadata.support.MapMetaData;

@Intercepts({@Signature(type = ResultSetHandler.class, method = "handleResultSets", args = {Statement.class})})
public class SelectQueryPlugin implements Interceptor {

//	private Logger log = LoggerFactory.getLogger(SelectQueryPlugin.class);

    @Override
    public Object intercept(Invocation invocation) throws Throwable {

//    	log.debug("[SelectQueryPlugin]-intercept");
    	Object[] args = invocation.getArgs();

        Statement statement = (Statement) args[0];
        ResultSet rs = statement.getResultSet();

        while (rs == null) {
            if (statement.getMoreResults()) {
                rs = statement.getResultSet();
            }else {
                if(statement.getUpdateCount() == -1) {
                	break;
                }
            }
        }

        Map<String, Object> columnMeta = new HashMap<>();

        if (rs != null) {
            ResultSetMetaData rsmd = rs.getMetaData();
            int columnCount = rsmd.getColumnCount();

            for (int i = 1; i <= columnCount; i++) {            	
                String colNm = rsmd.getColumnName(i);
                //String colType = rsmd.getColumnTypeName(i);
                //log.debug("[SelectQueryPlugin]-intercept colNm:[" + colNm + "] colType:[" + colType + "]");
                columnMeta.put(colNm, null);
            }
        }
        
        MapMetaData metaData = new MapMetaData(columnMeta);

        Object proceed = invocation.proceed();		
        String rtnType = invocation.getMethod().getReturnType().getName();
        //log.debug("[SelectQueryPlugin]-intercept rtnType:[" + rtnType + "]");
        //log.debug("[SelectQueryPlugin]-intercept() proceed.getClass().getTypeName():[" + proceed.getClass().getTypeName() + "]");

		if("java.util.List".equals(rtnType) || "java.util.ArrayList".equals(rtnType)) {
			List<Map<String, Object>> list = (List<Map<String, Object>>) proceed;

			if (list.size() == 0) {
				//log.error("[SelectQueryPlugin] [List] list.size() == 0");
				return metaData;
				
			}else {
				return proceed;
			}
		}else {
			return proceed;
		}
    }

    @Override
    public Object plugin(Object target) {
//    	log.debug("[SelectQueryPlugin]-plugin target:::::[" + target+ "]");
    	return Plugin.wrap(target, this);
    }

    @Override
    public void setProperties(Properties properties) {
        //To change body of implemented methods use File | Settings | File Templates.
    }
}