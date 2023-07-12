from flask import Flask
from gevent import pywsgi
from flask_cors import cross_origin

app = Flask(__name__)


@app.route('/api')
@cross_origin()
def api():
    return 'hello world'


if __name__ == '__main__':
    server = pywsgi.WSGIServer(('0.0.0.0', 4242), application=app)
    print(server)
    server.serve_forever()
