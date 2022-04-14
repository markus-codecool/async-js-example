from flask import Flask, json, make_response, render_template

from src.userrepository import get_users

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/user-data')
def get_user_data():
    users = get_users()
    return make_response(json.jsonify(users), 200)


if __name__ == '__main__':
    app.run()
