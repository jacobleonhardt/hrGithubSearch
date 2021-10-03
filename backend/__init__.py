from flask import Flask
from .config import Config
import requests

app = Flask(__name__)
app.config.from_object(Config)


@app.route('/')
def hello():
    req = requests.get('https://api.github.com/users/octocat')
    response = req.json()
    return f'<h1>{response.id}, {response.name}, {response.email}, {response.url},</h1>'


@app.route('/<int:id>')
def test(id):
    return f'HELLO! {id}'
