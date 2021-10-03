from flask import Flask
from .config import Config
import requests

app = Flask(__name__)
app.config.from_object(Config)


@app.route('/')
def hello():
    req = requests.get(f'https://api.github.com/users/{app.config["GITUSERNAME"]}')
    response = req.json()
    return f'<p>{response["url"]}, {response["name"]}, {response["email"]}</p>'


# @app.route('/<int:id>')
# def test(id):
#     return f'HELLO! {id}'
