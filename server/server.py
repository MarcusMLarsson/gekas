from flask import (
    Flask,
    request,
    abort,
    jsonify
)

app = Flask(__name__)

users = []

@app.route("/login", methods=["POST"])
def login():
    username = request.json.get('username', None)
    if username is None or username in users:
        abort(401)
    else:
        users.append(username)
        return jsonify({
        'status': 'OK',
        'message': 'Successfully Logged in'
        })


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')