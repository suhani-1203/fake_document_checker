import language_tool_python

tool = language_tool_python.LanguageTool('en-IN')

def grammar_check(text):
    matches = tool.check(text)
    return len(matches), [str(m) for m in matches]

def validate_place_names(text, valid_places):
    return [place for place in valid_places if place.lower() in text.lower()]
