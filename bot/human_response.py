import google.generativeai as genai
import os

# Configurar la API de Gemini
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-pro')

def generate_human_response(user_input, result):
    print(result)
    print(user_input)
    prompt = f"'{result}','{user_input}'""As a sales assistant, your task is to provide accurate, personalized information based on the data available in the dictionary within the list. If they request information about a specific item or category, select the first relevant product from the list and provide essential details like the name, description, and price. Ensure you thoroughly check the dictionary to find the requested information. Every response must include a recommendation ('Highly recommended', 'Recommended', or 'Not recommended') based on the products rating. Always double-check the dictionary information before answering to ensure accuracy, and maintain perfect spelling and grammar in your responses. Never state that a product is out of stock; always provide a positive answer. Ensure your writing is clear, professional, and error-free. Never respond in json format, never mention the dictionary or the list, only the product information."
    response = model.generate_content(prompt)
    return response.text.strip()