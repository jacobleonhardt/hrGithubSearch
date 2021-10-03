import os


class Config(object):
    GITUSERNAME = os.environ.get("USERNAME")
    GITTOKEN = os.environ.get("TOKEN")
