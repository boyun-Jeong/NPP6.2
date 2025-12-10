package com.base.fwk.server;

import org.springframework.context.ApplicationContext;

public class BeanUtils {
    public static Object getBean(String bean) {
        ApplicationContext applicationContext = ApplicationContextProvider.getApplicationContext();
        
        if (applicationContext != null) {
        	System.out.print("[BeanUtils] applicationContext != null");
            String[] beans = applicationContext.getBeanDefinitionNames();
            System.out.print("[BeanUtils] beans.length : " + beans.length);
//            for (String bean_ : beans) {
//                System.out.print("[BeanUtils] bean_ : " + bean_ + "\t");
//            }
        }else {
        	System.out.print("[BeanUtils] applicationContext == null");
        }
        return applicationContext.getBean(bean);
    }
    
    public static Object getBean(Class obj) {
        ApplicationContext applicationContext = ApplicationContextProvider.getApplicationContext();
        
        if (applicationContext != null) {
        	System.out.print("[BeanUtils] applicationContext != null");
            String[] beans = applicationContext.getBeanDefinitionNames();
            System.out.print("[BeanUtils] beans.length : " + beans.length);
//            for (String bean_ : beans) {
//                System.out.print("[BeanUtils] bean_ : " + bean_ + "\t");
//            }
        }else {
        	System.out.print("[BeanUtils] applicationContext == null");
        }
        return applicationContext.getBean(obj);
    }
}