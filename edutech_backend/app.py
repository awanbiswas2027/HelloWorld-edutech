
# app.py
from flask import Flask, jsonify, request
from flask_cors import CORS
from model import get_recommendations

app = Flask(__name__)
CORS(app)  # Allow your frontend to communicate with this backend

# --- Sample Data (In a real app, this comes from a database) ---
# NOTE: Added 'tags' to each course for the AI recommendation logic
COURSES = [
    {"id": 1, "name": "B.Tech (Engineering)", "tags": ["coding", "software", "logical-reasoning", "problem-solving"]},
    {"id": 2, "name": "B.Sc. (Science)", "tags": ["research", "data", "analytics", "mathematics"]},
    {"id": 3, "name": "B.A. (Psychology)", "tags": ["counselling", "human-behavior", "research"]},
    {"id": 4, "name": "B.Com (Commerce)", "tags": ["finance", "business", "accounting"]},
    {"id": 5, "name": "BBA (Business Administration)", "tags": ["management", "business", "leadership", "finance"]}
]

CAREERS = [
    {"id": 1, "name": "Software Engineer", "typical_background": "B.Tech"},
    {"id": 2, "name": "Accountant", "typical_background": "B.Com"},
    {"id": 3, "name": "Data Scientist", "typical_background": "B.Sc. or B.Tech"},
]

# This USER_PROFILE simulates the data for a logged-in user
USER_PROFILE = {
    "id": "user123",
    "interests": ["data", "analytics", "business", "finance"],
    "strengths": ["mathematics", "problem-solving"]
}


# --- API Endpoints ---

@app.route("/")
def index():
    return "Welcome to the EduTech Backend API!"

# Endpoint to get all courses
@app.route("/api/courses", methods=['GET'])
def get_courses():
    return jsonify(COURSES)

# Endpoint to get all careers
@app.route("/api/careers", methods=['GET'])
def get_careers():
    return jsonify(CAREERS)

# --- AI Recommendation Endpoint ---
@app.route("/api/recommendations", methods=['POST'])
def get_ai_recommendations():
    data = request.get_json()
    user_input = data.get('user_input', '')
    if not user_input:
        return jsonify({"error": "user_input is required"}), 400
    recommendations = get_recommendations(user_input)
    return jsonify(recommendations)
        

# Endpoint for the contact form
@app.route("/api/contact", methods=['POST'])
def handle_contact():
    data = request.get_json()
    print(f"Received message from: {data['name']} ({data['email']})")
    # In a real app, you would email this message or save it to a database
    return jsonify({"message": "Message received successfully!"}), 201


if __name__ == "__main__":
    app.run(debug=True, port=5000)
