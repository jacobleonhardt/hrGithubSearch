import os


class Config(object):
    GITHUB_CLIENT = os.environ.get("GITHUB_CLIENT_ID")
    GITHUB_SECRET = os.environ.get("GITHUB_CLIENT_SECRET")
    AUTH_TOKEN = os.environ.get("SAFE_TOKEN")
