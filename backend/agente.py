import requests
import os
import api
from dotenv import load_dotenv

load_dotenv()
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
            "content": "Você é um agente especializado em lugares e eventos. Sua função é, com base nas informações passadas de clima da cidade do cliente, informá-lo quais as melhores atividades, pontos turísticos e lugares que ele pode visitar."
        },
        {
            "role": "user",
            "content": f"As informações de clima da minha cidade são as seguintes: {dados}"
        }
    ],
    "temperature": 0.7,
    "max_tokens": 1024
}

    response = requests.post(url, headers=headers, json=dados_envio)

    dados_recebimento = response.json()
    texto_limpo = dados_recebimento['choices'][0]['message']['content']
    return texto_limpo

print(agente_groq(dados))