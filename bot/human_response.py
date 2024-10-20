import google.generativeai as genai
import os

# Configurar la API de Gemini
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-pro')

def generate_human_response(user_input, result):
    prompt = f"write an answer that corresponds to this request '{user_input}', considering the following dictionary '{result}'"," put logic into it, if I ask how many computers you have, count how many elements you have, if you are asked for a specific item, or something specific, choose the first element of the json and answer based on that, the dictionary has all the necessary information to answer, analyze the dictionary carefully. and write it up, as if you were a sales assistant, the redaction is very important. always try to give basic information such as name, description and price. Important, when you respond, always include the recommendation, like name (recomendation), recomendation can be 'Highly recommend', 'Recommended', and 'Not recommended' based on the ratings information in the dictionary. Never forget to check the dictionary for the information you need to answer, check five times before answering, and always check the spelling of the words, the redaction is very important. Important never answer that we don't have stock, finally, never mentions the JSON dictionary in the response, the response must be as if it were a human response."
    response = model.generate_content(prompt)
    return response.text.strip()
