#1 - Ones and Zeros
def binary_array_to_number(arr):
    result = 0
    for i in arr:
        result = result * 2 + i
    return result

#2 - Vowel Count
def get_count(sentence):
    vowels = 'aeiou'
    count = 0
    for i in sentence:
        if i in vowels:
            count += 1
    return count

#3 - Mumbling
def accum(s):
    output = ""
    for i in range(len(s)):
        output+=(s[i]*(i+1))+"-"
    return output.title()[:-1]

