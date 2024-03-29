
package br.com.latinsistemas.framework.listeners;

import br.com.latinsistemas.framework.config.SegurancaConfig;
import java.io.IOException;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.annotation.WebListener;

/**
 * Essa classe inicia o processo de configuração das seguranças.
 * 
 * As seguranças são lidas de um arquivo de configuração (assim como também são
 * declaradas no código, nos métodos ou nas entidades).
 * 
 * Essa classe inicia a leitura dos arquivos de configuração das seguranças
 * principalmente para permitir a segunraça de endereços (URLs).
 * 
 * @author Rafael
 */
@WebListener
public class SegurancaConfigRegistrador implements ServletContextListener{

  @Override
  public void contextInitialized(ServletContextEvent sce) {
    try{
      SegurancaConfig.init();
    }catch(IOException ex){
      throw new RuntimeException("------ Problemas ao tentar carregar as configuracoes de seguranca!", ex);
    }
  }

  @Override
  public void contextDestroyed(ServletContextEvent sce) {
    
  }
    
    
    
}
