import React, { useState } from "react";

export default function Login() {
  const [isRegistering, setIsRegistering] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-900 via-blue-700 to-sky-300 flex items-center justify-center p-4">
      
      <div className="w-full max-w-4xl h-130 bg-white/15 backdrop-blur-md border border-white/30 rounded-2xl shadow-2xl flex overflow-hidden">
        
        <div 
          className={`flex-col justify-center p-8 text-white transition-all duration-500 ease-in-out flex ${
            isRegistering ? "flex-1" : "flex-2"
          } bg-white/5`}
        >
          {!isRegistering ? (
            <div className="w-full max-w-sm mx-auto space-y-4">
              <h1 className="text-3xl font-bold tracking-tight">Bem-vindo de volta!</h1>
              <p className="text-sm text-sky-100">Insira suas credenciais para acessar sua conta.</p>
              
              <form className="space-y-3 pt-2" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-1">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="seu.email@exemplo.com" 
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-sky-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-1">Senha</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-sky-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-2.5 mt-2 bg-white text-indigo-900 font-semibold rounded-lg shadow-md hover:bg-sky-50 transition-colors text-sm"
                >
                  Entrar
                </button>
              </form>
            </div>
          ) : (
            <div onMouseEnter={() => setIsRegistering(false)} className="flex flex-col items-center justify-center text-center h-full space-y-3 ">
              
              <h2 className="text-xl font-semibold">Já tem uma conta?</h2>
              <p className="text-xs text-sky-100">Passe o mouse ou clique para realizar o login</p>
              <button 
                className="px-4 py-2 text-xs font-medium border border-white/40 rounded-lg hover:bg-white/10 transition-colors"
              >
                Ir para Login
              </button>
            </div>
          )}
        </div>

        {/* Painel Direito: Convite e Formulário de Registro */}
        <div 
          onMouseEnter={() => setIsRegistering(true)}
          className={`flex-col justify-center p-8 text-white transition-all duration-500 ease-in-out flex ${
            isRegistering ? "flex-2" : "flex-1"
          } bg-black/20`}
        >
          {!isRegistering ? (
            <div className="flex flex-col items-center justify-center text-center h-full space-y-4">
              <h2 className="text-2xl font-bold">Ainda não é cadastrado?</h2>
              <p className="text-xs text-sky-100">Passe o mouse ou clique para criar uma conta rápida.</p>
              <button 
                onClick={() => setIsRegistering(true)} 
                className="px-5 py-2 text-xs font-medium border border-white/40 rounded-lg hover:bg-white/10 transition-colors"
              >
                Registrar-se
              </button>
            </div>
          ) : (
            <div className="w-full max-w-sm mx-auto space-y-3">
              <h1 className="text-2xl font-bold tracking-tight">Criar Conta</h1>
              <p className="text-xs text-sky-100">Preencha os dados abaixo para se cadastrar.</p>
              
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    placeholder="Seu Nome" 
                    className="w-full px-3 py-1.5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-sky-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-1">E-mail</label>
                  <input 
                    type="email" 
                    placeholder="seu.email@exemplo.com" 
                    className="w-full px-3 py-1.5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-sky-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-1">Senha</label>
                  <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="w-full px-3 py-1.5 bg-white/20 border border-white/30 rounded-lg text-white placeholder-sky-200 focus:outline-none focus:ring-2 focus:ring-white/50 text-sm"
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full py-2 bg-white text-indigo-900 font-semibold rounded-lg shadow-md hover:bg-sky-50 transition-colors text-sm mt-1"
                >
                  Confirmar Cadastro
                </button>
              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}