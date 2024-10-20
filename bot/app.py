from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot import chatbot  # Importa la función chatbot
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app, origins=["http://localhost:5173"], supports_credentials=True)  # Para permitir solicitudes desde otros dominios

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_input = data.get("message")  # Captura el mensaje del usuario

    if user_input:
        try:
            # Llama al chatbot y devuelve la respuesta
            response = chatbot(user_input)
            return jsonify({"response": response})
        except Exception as e:
            return jsonify({"error": f"Error: {str(e)}"}), 500
    else:
        return jsonify({"error": "Invalid input"}), 400

if __name__ == "__main__":
    app.run(debug=True)
