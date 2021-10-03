import os


class Config(object):
    GREETING = 'Hello people!'
    GITUSERNAME = os.environ.get("USERNAME")
    GITTOKEN = os.environ.get("TOKEN")
