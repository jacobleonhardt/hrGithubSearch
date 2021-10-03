from flask import Flask
from .config import Config
import requests

app = Flask(__name__)
app.config.from_object(Config)


@app.route('/')
def initial():
    print('### BACKEND ###')
    req = requests.get(f'https://api.github.com/users/{app.config["GITUSERNAME"]}')
    response = req.json()
    return f'<p>{response["url"]}, {response["name"]}, {response["email"]}</p>'
