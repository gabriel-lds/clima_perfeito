import requests
name = input('Informe o nome da cidade que deseja verificar o clima: ')

def latitude_longitude(name):
    url = 'https://geocoding-api.open-meteo.com/v1/search'
    params = {'name':name, 'count':1, 'language':'pt'}
    requisicao = requests.get(url, params=params)
    dados = requisicao.json()
    latitude = dados['results'][0]['latitude']
    longitude = dados['results'][0]['longitude']
    retorno = [latitude, longitude]
    return retorno
dados_de_latitude = latitude_longitude(name)

def clima(dados_de_latitude):
    url = 'https://api.open-meteo.com/v1/forecast'
    dados = dados_de_latitude
    params = params = {
    'latitude': dados[0], 
    'longitude': dados[1],
'current': 'temperature_2m,relative_humidity_2m,weather_code'
}
    requisicao = requests.get(url, params=params)
    dados_clima = requisicao.json()
    return dados_clima
