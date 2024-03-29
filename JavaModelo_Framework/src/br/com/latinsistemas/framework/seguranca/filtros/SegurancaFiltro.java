
package br.com.latinsistemas.framework.seguranca.filtros;

import br.com.latinsistemas.framework.config.Configuracoes;
import br.com.latinsistemas.framework.jaxrs.JacksonObjectMapperContextResolver;
import br.com.latinsistemas.framework.jaxrs.JsonResponse;
import br.com.latinsistemas.framework.seguranca.servicos.UsuarioServico;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.inject.Inject;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SegurancaFiltro implements Filter{
  
  private Pattern pattern;
  
  @Inject
  private UsuarioServico usuarioService;
  
  private ObjectMapper mapper;

  
  @Override
  public void init(FilterConfig filterConfig) throws ServletException {
    pattern = Pattern.compile( Configuracoes.segurancaRegExp );
    mapper = new JacksonObjectMapperContextResolver().getContext(null);
  }

  @Override
  public void doFilter(ServletRequest request, ServletResponse response, 
      FilterChain chain) throws IOException, ServletException {
    
    HttpServletRequest req = (HttpServletRequest) request;
    
    String ctxPath = req.getContextPath();
    String uri = req.getRequestURI().substring( ctxPath.length() );
    
    Matcher matcher = pattern.matcher(uri);
    
    // Checar se essa é uma URL pública
    if( "OPTIONS".equals( req.getMethod().toUpperCase() ) 
        || matcher.find() ){
      chain.doFilter(request, response);
      return;
    }
    
    if( !usuarioService.checkLogin(true) ){
      HttpServletResponse resp = (HttpServletResponse) response;
      resp.addHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      resp.addHeader("Pragma", "no-cache");
      resp.addHeader("Expires", "0");
      
      String header = req.getHeader("X-Requested-With");
      if( "XMLHttpRequest".equals(header) ){
        JsonResponse res = new JsonResponse(false, JsonResponse.ERROR_DESLOGADO, null, "Você está deslogado");
        mapper.writeValue(resp.getOutputStream(), res);
        return;
      }
      req.getRequestDispatcher( Configuracoes.loginPath ).forward(request, response);
      //resp.sendRedirect( req.getContextPath() + Configuracoes.loginPath );
      return; 
    }
    
    // Tudo ok aqui
    chain.doFilter(request, response);
  }

  @Override
  public void destroy(){
    pattern = null;
  }

}
