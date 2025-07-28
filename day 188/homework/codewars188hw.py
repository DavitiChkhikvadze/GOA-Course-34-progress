#N1 - Disemvowel Trolls
def disemvowel(s):
    for i in "aeiouAEIOU":
        s = s.replace(i,'')
    return s

#N2 - Number of People in the Bus
def number(bus_stops):
    sum=0
    for i in bus_stops:
        sum+=i[0]-i[1]
    return sum

#N3 - Beginner Series #3 Sum of Numbers
def get_sum(a,b):
    return sum(range(min(a, b), max(a, b) + 1))

#N4 - Counting Duplicates
def duplicate_count(text):
    seen = set()
    dupes = set()
    for char in text:
        char = char.lower()
        if char in seen:
            dupes.add(char)
        seen.add(char)
    return len(dupes)

#N5 - Convert string to camel case
def to_camel_case(text):
    words = text.replace('-', ' ').replace('_', ' ').split() 
    if not words:
        return ""
    first_word = words[0]
    remaining_words = [word.capitalize() for word in words[1:]]
    return first_word + ''.join(remaining_words)