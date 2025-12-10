package com.base.fwk.wrapper;

import java.io.BufferedReader;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import jakarta.servlet.ReadListener;
import jakarta.servlet.ServletInputStream;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletRequestWrapper;

public class RequestWrapper extends HttpServletRequestWrapper {

	//2024-11-01 Sparrow 조치  log 추가
	private Logger log = LoggerFactory.getLogger(HttpServletRequestWrapper.class);
	
	private final String body;
	
	public RequestWrapper(HttpServletRequest request) throws IOException {
		
		super(request);
		
		StringBuilder stringBuilder = new StringBuilder();
		BufferedReader bufferedReader = null;
		InputStreamReader inputReader = null;
		
		try {
			InputStream inputStream = request.getInputStream();
			
			if(inputStream != null) {
				inputReader = new InputStreamReader(inputStream);
				bufferedReader = new BufferedReader(inputReader);
				//2024-10-30 Sparrow 조치 주석후 위 2줄 처리함
				//bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
				
				char[] charBuffer = new char[128];
				int bytesRead = -1;
				
				while( (bytesRead = bufferedReader.read(charBuffer)) > 0 ) {
					stringBuilder.append(charBuffer, 0, bytesRead);
				}
			}
			else {
				stringBuilder.append("");
			}
		} catch(IOException ex) {
			throw ex;
		} finally {
			//2024-10-30 Sparrow 조치  inputReader 추가함
			if(inputReader != null) {
				try {
					inputReader.close();
				} catch(IOException ex) {
					throw ex;
				}
			}
			if(bufferedReader != null) {
				try {
					bufferedReader.close();
				} catch(IOException ex) {
					throw ex;
				}
			}
		}
		
		body = stringBuilder.toString();
	}
	
	@Override
	public ServletInputStream getInputStream() throws IOException {
		final ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(body.getBytes());
		ServletInputStream servletInputStream = new ServletInputStream() {
			
			@Override
			public int read() throws IOException {
				// TODO Auto-generated method stub
				return 0;
			}
			
			@Override
			public void setReadListener(ReadListener arg0) {
				// TODO Auto-generated method stub
				
			}
			
			@Override
			public boolean isReady() {
				// TODO Auto-generated method stub
				return false;
			}
			
			@Override
			public boolean isFinished() {
				// TODO Auto-generated method stub
				return false;
			}
		};
		return servletInputStream;
	}
	
	/* 2024-11-01 sparrow 처리 - 사용안함 처리함
	@Override
	
	public BufferedReader getReader() throws IOException {
		
		//return new BufferedReader(new InputStreamReader(this.getInputStream()));
		
		//2024-11-01 sparrow 조치 - 위 return 처리사항을 아래와 같이 적용함--------------
		BufferedReader bufReader = null;
		InputStreamReader instrReader = null;
		
		
		try {
			instrReader = new InputStreamReader(this.getInputStream());
			bufReader = new BufferedReader(instrReader);
		}catch(Exception e) {
			log.error("ERROR] RequestWrapper getReader Exception " + e.getMessage());
		} finally {
			if( bufReader != null ) bufReader.close();
			if( instrReader != null ) instrReader.close();
		}
				
		return bufReader;

	}
	*/
	
	public String getBody() {
		return this.body;
	}
}