

export function logaUsuario(dados) {
   return {
        type: 'LOGA_USUARIO',
        dados: dados
      }
  }

export function deslogaUsuario() {
    return {
         type: 'DESLOGA_USUARIO',
       }
   }
   

  