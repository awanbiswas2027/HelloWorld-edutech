# backend/api_server.py
from flask import Flask, jsonify, request
from flask_cors import CORS

# 1. Set up the Flask App
app = Flask(__name__)

# 2. Set up CORS
# This allows your frontend at localhost:3000 to talk to this backend
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

# 3. Create a simple 'home' route for your API
@app.route("/")
def index():
    return "Welcome to the EduTech API!"

# 4. This line starts the server
if __name__ == "__main__":
    app.run(debug=True, port=5000)