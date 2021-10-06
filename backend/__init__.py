from flask import Flask, request, g, session, redirect, url_for
from flask_github import GitHub
from .config import Config
import requests

app = Flask(__name__)
app.config.from_object(Config)

github = GitHub(app)

@app.route('/login')
def login():
    return github.authorize()
    # print('### BACKEND ###')
    # req = requests.get(f'https://api.github.com/users/{app.config["GITUSERNAME"]}')
    # response = req.json()
    # return f'<p>{response["url"]}, {response["name"]}, {response["email"]}</p>'


@app.route('/github-callback')
@github.authorized_handler
def authorized(oauth_token):
    next_url = request.args.get('next') or url_for('index')
    if oauth_token is None:
        flash("Authorization failed.")
        return redirect(next_url)

    user = User.query.filter_by(github_access_token=oauth_token).first()
    if user is None:
        user = User(oauth_token)
        db_session.add(user)

    user.github_access_token = oauth_token
    db_session.commit()
    return redirect(next_url)


@github.access_token_getter
def token_getter():
    user = g.user
    if user is not None:
        return user.github_access_token


@app.route('/repo')
def repo():
    repo_dict = github.get('repos/cenkalti/github-flask')
    return str(repo_dict)
