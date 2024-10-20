import requests
from search_code import generate_search_code
from human_response import generate_human_response

def chatbot(user_input):
    search_code = generate_search_code(user_input)
    list_response = search_code.split(" ")
    print(search_code)
    if len(list_response) == 1:
        try:
            link = f"https://dummyjson.com/products/search?q={search_code}"
            res = requests.get(link).json()
            if 'products' in res:
                return generate_human_response(user_input, res)
            else:
                return "I'm sorry, I didn't understand your question."
        except Exception as e:
            return f"Error: {str(e)}"
    else:
        combined_response = ""
        for keyword in list_response:
            try:
                link = f"https://dummyjson.com/products/search?q={keyword}"
                res = requests.get(link).json()
                if 'products' in res:
                    combined_response += generate_human_response(user_input, res['products']) + " "
            except Exception as e:
                continue
        return combined_response.strip() if combined_response else "I'm sorry, I didn't understand your question."
