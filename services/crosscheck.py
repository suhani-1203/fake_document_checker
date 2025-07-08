from fuzzywuzzy import fuzz

def fuzzy_compare(str1, str2):
    return fuzz.ratio(str1, str2)
