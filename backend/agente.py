import requests
import os
import api
from dotenv import load_dotenv

load_dotenv()
cidade = api.name
dados = api.clima()
api_key = os.getenv("API_KEY")
def agente_groq(dados):
    url = 'https://api.groq.com/openai/v1/chat/completions'
    headers = {
        "Authorization": f'Bearer {api_key}',
        "Content-Type": 'application/json'
    }
    dados_envio = {
    "model": "openai/gpt-oss-120b",
    "max_tokens": 4096,
    "messages": [
        {
            "role": "system",
            "content": (
                "Você é um agente especialista em turismo, eventos e curadoria de lazer local. "
                "Sua missão é analisar a previsão do tempo de uma cidade e recomendar atividades "
                "adequadas às condições climáticas de cada período do dia.\n\n"
                "DIRETRIZES DE RESPOSTA:\n"
                "1. Divida o dia estritamente em 4 períodos: Madrugada (00h-06h), Manhã (06h-12h), Tarde (12h-18h) e Noite (18h-24h).\n"
                "2. Para CADA um dos 4 períodos, forneça EXATAMENTE 3 sugestões para cada uma das seguintes categorias:\n"
                "   - Eventos (shows, feiras, exposições, etc.)\n"
                "   - Pontos Turísticos\n"
                "   - Locais para Encontro Social (cafés, bares, restaurantes, parques, etc.)\n"
                "   - Centros de Entretenimento Urbano (cinemas, teatros, shoppings, arenas, etc.)\n"
                "3. Adapte as sugestões ao clima do período (ex.: evitar locais abertos sob chuva/calor extremo).\n"
                "4. Se a resposta for em JSON ou texto formatado, mantenha a estrutura clara e sem rodeios."
            )
        },
        {
            "role": "user",
            "content": (
                f"Análise do clima e recomendações para a cidade de **{cidade}**:\n\n"
                f"**Dados Climáticos:**\n{dados}\n\n"
                "Por favor, apresente o itinerário/recomendações organizados no seguinte formato de Markdown para cada período (Madrugada, Manhã, Tarde, Noite):\n\n"
                "### [Nome do Período] (Resumo do Clima: Ex. Ensolarado, 24°C)\n"
                "#### 🎟️ Eventos\n"
                "1. ...\n2. ...\n3. ...\n"
                "#### 📍 Pontos Turísticos\n"
                "1. ...\n2. ...\n3. ...\n"
                "#### ☕ Locais para Encontro Social\n"
                "1. ...\n2. ...\n3. ...\n"
                "#### 🏢 Centros de Entretenimento Urbano\n"
                "1. ...\n2. ...\n3. ...\n"
            )
        }
    ],
    "temperature": 0.7,
    "max_tokens": 4096
}

    response = requests.post(url, headers=headers, json=dados_envio)

    dados_recebimento = response.json()
    texto_limpo = dados_recebimento['choices'][0]['message']['content']
    return texto_limpo

print(agente_groq(dados))