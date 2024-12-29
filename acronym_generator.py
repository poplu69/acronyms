from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/generate_acronym', methods=['POST'])
def generate_acronym():
    data = request.json
    phrase = data.get("phrase", "")
    if not phrase:
        return jsonify({"error": "Phrase is required"}), 400
    text = phrase.split()
    acronym = " ".join([word[0].upper() for word in text])
    return jsonify({"acronym": acronym})

if __name__ == "__main__":
    app.run(debug=True)
