import pandas as pd
import io
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# --- Step 1: Prepare the Dataset ---
# For a hackathon, we can define our data directly in the code.
# This dataset is created based on the courses and careers shown in your screenshots.
# Each item has keywords that the AI will use for matching.
csv_data = """name,type,keywords,description
B.Tech (Engineering),Course,"Engineering, Physics, Mathematics, Problem Solving, Technology, Logic, Building Things, software development, IT","A versatile engineering degree for roles in software, IT, mechanical, or civil engineering."
Software Engineer,Career,"Python, Java, JavaScript, Data Structures, Logic, Technology, Problem Solving, software development, IT","Designs, builds, and maintains software applications and systems."
B.Sc. (Science),Course,"Science, Biology, Chemistry, Physics, Research, Analysis, Mathematics, data analytics","A foundational degree for scientific research, healthcare, and data analysis."
Research Assistant,Career,"Research, Analysis, Statistics, Experimentation, Science, Academia","Assists lead researchers in gathering and analyzing data for studies."
BBA (Business Administration),Course,"Business, Management, Finance, Marketing, Communication, Leadership, accounts, economics","Prepares students for management and administrative roles in the business world."
Accountant,Career,"Finance, Mathematics, Accounts, Business, Detail-oriented, Commerce, economics","Manages financial records, performs audits, and prepares financial reports."
BCA (Computer Applications),Course,"Computers, Technology, software development, web app development, programming, IT","Focuses on software development, programming, and computer science fundamentals."
Teacher / Lecturer,Career,"Teaching, Education, Communication, Subject Matter Expert, Academia","Educates students at various levels, from school to university, in a specific subject."
Law (LLB),Course,"Law, Justice, Reading, Writing, Debate, Corporate Law, Public Service, humanities","Pursues careers in legal practice, corporate law, public service, or judiciary."
Psychology (BA),Course,"Psychology, Human Behavior, Research, Empathy, Counseling, humanities, social science","Opportunities in counseling, human resources, research, and social outreach."
B.Com (Commerce),Course,"Commerce, Accounts, Finance, Business, Economics, Mathematics","A degree focused on commerce, accounting, finance, and business principles."
Design (B.Des),Course,"Design, Creativity, Art, Fashion, UI/UX, Visuals, humanities","Focuses on visual communication, product design, fashion, or user interface design."
"""

# Use pandas to read the text data into a structured DataFrame
df = pd.read_csv(io.StringIO(csv_data))

# --- Step 2: Create the AI Model (Vectorization) ---
# This is the core of the "AI". We convert the text 'keywords' into numerical vectors.
# TfidfVectorizer is a standard tool for this. It identifies which words are most
# important for each course/career.
vectorizer = TfidfVectorizer(max_features=500, stop_words='english')
item_vectors = vectorizer.fit_transform(df['keywords']).toarray()

# --- Step 3: Define the Recommendation Function ---
def get_recommendations(user_input_text, top_n=3):
    """
    Recommends the top N courses or careers based on the user's input.

    Args:
        user_input_text (str): A string of the user's skills and interests.
        top_n (int): The number of recommendations to return.

    Returns:
        list: A list of dictionaries, where each dictionary contains the
              details of a recommended item.
    """
    # 1. Convert the user's input text into a numerical vector using our trained vectorizer.
    user_vector = vectorizer.transform([user_input_text]).toarray()

    # 2. Calculate the "cosine similarity" between the user's vector and all the item vectors.
    # This gives a score of how similar the user's input is to each item.
    similarities = cosine_similarity(user_vector, item_vectors)[0]

    # 3. Get the indices of the top N most similar items.
    top_indices = similarities.argsort()[-top_n:][::-1]

    # 4. Format the results into a clean list of dictionaries for easy use later.
    recommendations = []
    for index in top_indices:
        item_details = {
            'name': df.iloc[index]['name'],
            'type': df.iloc[index]['type'],
            'description': df.iloc[index]['description'],
            'match_score': round(similarities[index] * 100, 2) # Convert score to a percentage
        }
        recommendations.append(item_details)

    return recommendations

# --- Step 4: Test the Model ---
# This part of the script will only run if you execute this file directly.
# It's a great way to test that our AI model is working as expected.
if __name__ == '__main__':
    print("--- Testing the AI Recommendation Model ---")

    # Test Case 1: A user interested in technology and coding
    test_input_1 = "I am good at math and I like computers, programming, and technology"
    recommendations_1 = get_recommendations(test_input_1)
    print(f"\nRecommendations for: '{test_input_1}'")
    for item in recommendations_1:
        print(item)

    # Test Case 2: A user interested in business and finance
    test_input_2 = "I want to learn about business, management, and accounts"
    recommendations_2 = get_recommendations(test_input_2)
    print(f"\nRecommendations for: '{test_input_2}'")
    for item in recommendations_2:
        print(item)
