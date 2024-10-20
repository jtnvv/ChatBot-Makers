import google.generativeai as genai
import os 
# Configurar la API de Gemini
api_key = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-pro')

def generate_search_code(user_input):
    prompt = (
        f"convert this question into keywords for the search or answer about a product, '{user_input}'"
        ", to perform the search for example if you are asked for a cell phone, you return 'phone', if you are asked for a computer, you return 'laptop', always in singular, if you are asked for the price of the mac book computer, you return 'macbook', if you are asked for a computer recommendation, you return 'laptop', if you are asked for the computers, return 'laptop', never return 'computer', and never return spaces between words, always return the words separated by '%20'. If you are asked for more than one thing, separate with ' ' (space). Only respond with the keywords that are necessary to answer the question, do not add additional words, only the tecnology or product that is being asked for, only words like laptop, iphone, mac%20book, dell, etc. Not include words like avilable, price, etc."
    )
    response = model.generate_content(prompt)
    return response.text.strip()
