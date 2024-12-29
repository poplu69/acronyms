from flask import Flask, request, jsonify

app = Flask(__name__)

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
